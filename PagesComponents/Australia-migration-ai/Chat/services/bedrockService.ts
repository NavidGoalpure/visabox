import { BedrockMessage, BedrockTurn, BedrockConfig } from '../types/bedrock';

// External Bedrock API Service - Using your existing API endpoint
export class BedrockService {
  private config: BedrockConfig;
  private sessionId: string;
  private apiEndpoint: string;

  constructor(config: BedrockConfig) {
    this.config = config;
    this.sessionId = this.generateSessionId();
    // navid change this hard coding
    this.apiEndpoint = 'https://mve9rre4i6.execute-api.ap-southeast-2.amazonaws.com/prod/chat';
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Convert conversation history to a single prompt
  private formatConversationToPrompt(turns: BedrockTurn[]): string {
    let prompt = '';
    
    // Add system prompt if provided
    if (this.config.systemPrompt) {
      prompt += `${this.config.systemPrompt}\n\n`;
    }

    // Convert conversation turns to a conversation format
    turns.forEach(turn => {
      turn.messages.forEach(message => {
        if (message.role === 'user') {
          prompt += `User: ${message.content}\n`;
        } else if (message.role === 'assistant') {
          prompt += `Assistant: ${message.content}\n`;
        }
      });
    });

    return prompt.trim();
  }

  // Send message to your external Bedrock API
  async sendMessage(message: string, conversationHistory: BedrockTurn[] = []): Promise<BedrockTurn> {
    try {
      // Format the conversation history and add the new message
      const conversationPrompt = this.formatConversationToPrompt(conversationHistory);
      const fullPrompt = conversationPrompt ? `${conversationPrompt}\nUser: ${message}` : message;

      const requestBody = {
        prompt: fullPrompt
      };

      // Call your external Bedrock API endpoint
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Bedrock API error: ${response.status}`);
      }

      const data = await response.json();

      // Create the assistant turn from your API response
      const assistantTurn: BedrockTurn = {
        role: 'assistant',
        messages: [{
          role: 'assistant',
          content: data.response || 'No response generated',
          timestamp: new Date().toISOString()
        }],
        timestamp: new Date().toISOString(),
        state: 'completed'
      };

      return assistantTurn;

    } catch (error) {
      console.error('Bedrock API error:', error);
      
      // Return error turn
      const errorTurn: BedrockTurn = {
        role: 'assistant',
        messages: [{
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date().toISOString()
        }],
        timestamp: new Date().toISOString(),
        state: 'error'
      };

      return errorTurn;
    }
  }

  // Stream message for real-time responses
  async *streamMessage(message: string, conversationHistory: BedrockTurn[] = []): AsyncGenerator<string> {
    try {
      // Format the conversation history and add the new message
      const conversationPrompt = this.formatConversationToPrompt(conversationHistory);
      const fullPrompt = conversationPrompt ? `${conversationPrompt}\nUser: ${message}` : message;

      const requestBody = {
        prompt: fullPrompt
      };

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Bedrock streaming error: ${response.status}`);
      }

      const data = await response.json();
      
      // Since your API doesn't support streaming, we'll simulate it by yielding the response character by character
      const responseText = data.response || 'No response generated';
      
      // Simulate streaming by yielding characters with a small delay
      for (let i = 0; i < responseText.length; i++) {
        yield responseText[i];
        // Add a small delay to simulate real streaming
        await new Promise(resolve => setTimeout(resolve, 10));
      }

    } catch (error) {
      console.error('Bedrock streaming error:', error);
      yield 'Sorry, I encountered an error. Please try again.';
    }
  }
} 