# External Bedrock API Chat Integration

This directory contains the replacement for the Fixie AI chat integration with an external Bedrock API.

## Setup Instructions

### 1. External API Configuration

The chat system is now configured to use your external Bedrock API endpoint:
- **API Endpoint**: `https://mve9rre4i6.execute-api.ap-southeast-2.amazonaws.com/prod/chat`
- **Region**: `ap-southeast-2`
- **Method**: POST
- **Headers**: `Content-Type: application/json`, `Origin: [your-domain]`

### 2. API Request/Response Format

**Request Format:**
```json
{
  "prompt": "User: Hello, how can you help me?\nAssistant: I can help you with Australian immigration questions.\nUser: What about VETASSESS?"
}
```

**Response Format:**
```json
{
  "response": "VETASSESS is the Vocational Education and Training Assessment Services..."
}
```

### 3. No Additional Dependencies Required

Since we're using your external API, no additional AWS SDK dependencies are needed. The integration uses standard `fetch` API calls.

## Architecture Overview

### Components

1. **Types** (`types/bedrock.ts`): TypeScript interfaces for chat data structures
2. **Service** (`services/bedrockService.ts`): External API integration
3. **Hook** (`hooks/useBedrockChat.ts`): React hook replacing useFixie
4. **UI Components**: Updated to work with new types

### Key Changes

- **Replaced Fixie types** with simplified chat interfaces
- **Added external API integration** using your Bedrock endpoint
- **Maintained same UI interface** for seamless integration
- **Added proper error handling** and loading states
- **Preserved conversation history** functionality
- **Simulated streaming** for real-time response feel

### Features

- ✅ External API integration
- ✅ Conversation history
- ✅ Error handling
- ✅ Loading states
- ✅ Multi-language support
- ✅ Markdown rendering
- ✅ Mobile responsive design
- ✅ Simulated streaming responses

## Migration Notes

The integration maintains the same interface as the original Fixie implementation, so existing UI components work without changes. The main differences are:

1. **Async sendMessage**: Now returns a Promise<boolean>
2. **Simplified message types**: Removed Fixie-specific function calls
3. **External API**: Uses your existing Bedrock API endpoint
4. **Simulated streaming**: Character-by-character response for real-time feel

## API Integration Details

### Conversation Formatting

The service converts conversation history into a single prompt string:

```
System: You are Marcya, an AI assistant specialized in Australian immigration guidance...

User: What is VETASSESS?
Assistant: VETASSESS is the Vocational Education and Training Assessment Services...

User: How does it work?
```

### Error Handling

- Network errors are caught and displayed to users
- API errors return appropriate error messages
- Fallback responses for failed requests

### CORS Configuration

The integration includes proper Origin headers to work with your API's CORS settings 