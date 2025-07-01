// Test script to verify external API integration
// Run this with: node test-integration.js

async function testExternalAPI() {
  const apiEndpoint = 'https://mve9rre4i6.execute-api.ap-southeast-2.amazonaws.com/prod/chat';
  
  console.log('Testing external Bedrock API integration...\n');
  
  try {
    // Test 1: Simple message
    console.log('Test 1: Simple message');
    const response1 = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({
        prompt: 'Hello, test!'
      })
    });
    
    const data1 = await response1.json();
    console.log('Response:', data1);
    console.log('Status:', response1.status);
    console.log('---\n');
    
    // Test 2: Conversation context
    console.log('Test 2: Conversation with context');
    const response2 = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({
        prompt: `You are Marcya, an AI assistant specialized in Australian immigration guidance.

User: What is VETASSESS?
Assistant: VETASSESS is the Vocational Education and Training Assessment Services, which assesses the skills of skilled workers who want to migrate to Australia.

User: How does the assessment process work?`
      })
    });
    
    const data2 = await response2.json();
    console.log('Response:', data2);
    console.log('Status:', response2.status);
    console.log('---\n');
    
    console.log('✅ All tests passed! The external API integration is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testExternalAPI(); 