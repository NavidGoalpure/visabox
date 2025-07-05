// AWS Bedrock Chat Types - Replacement for Fixie types

export interface BedrockMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface BedrockTurn {
  role: 'user' | 'assistant';
  messages: BedrockMessage[];
  timestamp: string;
  state: 'completed' | 'in-progress' | 'error';
}

export interface BedrockConversation {
  turns: BedrockTurn[];
  sessionId?: string;
}

export interface BedrockChatHook {
  conversation: BedrockConversation | null;
  sendMessage: (message?: string) => Promise<boolean>;
  stop: () => boolean;
  isLoading: boolean;
  error: string | null;
}

