import { useState, useRef, useCallback } from 'react';
import { BedrockService } from '../services/bedrockService';
import { BedrockConversation, BedrockTurn } from '../types/bedrock';

export const useBedrockChat = () => {
  const [conversation, setConversation] = useState<BedrockConversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const bedrockService = useRef<BedrockService>(new BedrockService());
  const abortController = useRef<AbortController | null>(null);

  // Send message function - replaces Fixie's sendMessage
  const sendMessage = useCallback(async (message?: string): Promise<boolean> => {
    if (!message || message.trim() === '') {
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create user turn
      const userTurn: BedrockTurn = {
        role: 'user',
        messages: [{
          role: 'user',
          content: message.trim(),
          timestamp: new Date().toISOString()
        }],
        timestamp: new Date().toISOString(),
        state: 'completed'
      };

      // Update conversation with user message
      setConversation(prev => ({
        turns: [...(prev?.turns || []), userTurn],
        sessionId: prev?.sessionId
      }));

      // Create a placeholder assistant turn for streaming
      const assistantTurn: BedrockTurn = {
        role: 'assistant',
        messages: [{
          role: 'assistant',
          content: '',
          timestamp: new Date().toISOString()
        }],
        timestamp: new Date().toISOString(),
        state: 'in-progress'
      };

      // Add assistant turn to conversation
      setConversation(prev => ({
        turns: [...(prev?.turns || []), assistantTurn],
        sessionId: prev?.sessionId
      }));

      // Get conversation history for context
      const currentTurns = conversation?.turns || [];
      const historyTurns = [...currentTurns, userTurn];

      // Stream the response
      let fullResponse = '';
      const streamGenerator = bedrockService.current.streamMessage(message, historyTurns);

      for await (const chunk of streamGenerator) {
        fullResponse += chunk;
        
        // Update the assistant turn with streaming content
        setConversation(prev => {
          if (!prev) return prev;
          
          const updatedTurns = [...prev.turns];
          const lastTurn = updatedTurns[updatedTurns.length - 1];
          
          if (lastTurn && lastTurn.role === 'assistant') {
            lastTurn.messages[0].content = fullResponse;
          }
          
          return {
            ...prev,
            turns: updatedTurns
          };
        });
      }

      // Mark the turn as completed
      setConversation(prev => {
        if (!prev) return prev;
        
        const updatedTurns = [...prev.turns];
        const lastTurn = updatedTurns[updatedTurns.length - 1];
        
        if (lastTurn && lastTurn.role === 'assistant') {
          lastTurn.state = 'completed';
        }
        
        return {
          ...prev,
          turns: updatedTurns
        };
      });

      setIsLoading(false);
      return true;

    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
      
      // Mark the turn as error
      setConversation(prev => {
        if (!prev) return prev;
        
        const updatedTurns = [...prev.turns];
        const lastTurn = updatedTurns[updatedTurns.length - 1];
        
        if (lastTurn && lastTurn.role === 'assistant') {
          lastTurn.state = 'error';
          lastTurn.messages[0].content = 'Sorry, I encountered an error. Please try again.';
        }
        
        return {
          ...prev,
          turns: updatedTurns
        };
      });

      return false;
    }
  }, [conversation]);

  // Stop function - replaces Fixie's stop
  const stop = useCallback((): boolean => {
    if (abortController.current) {
      abortController.current.abort();
      abortController.current = null;
    }
    
    setIsLoading(false);
    
    // Mark the current turn as completed
    setConversation(prev => {
      if (!prev) return prev;
      
      const updatedTurns = [...prev.turns];
      const lastTurn = updatedTurns[updatedTurns.length - 1];
      
      if (lastTurn && lastTurn.role === 'assistant' && lastTurn.state === 'in-progress') {
        lastTurn.state = 'completed';
      }
      
      return {
        ...prev,
        turns: updatedTurns
      };
    });

    return true;
  }, []);

  // Clear conversation
  const clearConversation = useCallback(() => {
    setConversation(null);
    setError(null);
  }, []);

  return {
    conversation,
    sendMessage,
    stop,
    isLoading,
    error,
    clearConversation
  };
}; 