import {
  AssistantConversationTurn,
  Conversation,
  ConversationTurn,
  FixieClient,
} from 'fixie';
export async function getConversationID_old() {
  const fixieClient = new FixieClient({ apiKey: process.env.FIXIE_TOKEN });
  const FIXIE_AGENT_ID = process.env.MIGRATION_AGENT_ID || '';
  let userMessage = 'how are you?';

  // Start a conversation with our agent
  let getid = '';
  fixieClient
    .startConversation({ agentId: FIXIE_AGENT_ID, message: userMessage })
    .then((conversation) => {
      const reader = conversation.getReader();

      // TODO add a param to fixie client for stream = false
      // this will hold any 'done' assistant messages along the way
      let agentMsg: { turnId: string; timestamp: string; content: any }[] = [];

      reader.read().then(function processAgentMessage({ done, value }) {
        if (done) {
          console.log('***Done reading agent messages');
          return;
        }

        if (value?.id) {
          getid = value?.id;
          return getid;
        }

        // Process each message we get back from the agent
        // Get the turns and see if there are any assistant messages that are done
        // value.turns.forEach((turn) => {
        //   // It's an assistant turn
        //   if (turn.role == 'assistant') {
        //     // See if there are messages that are done
        //     turn.messages.forEach((message) => {
        //       // We have one -- if we haven't seen it before, log it
        //       // if (message?.kind?.state == 'done') {
        //       //   let currentMsg = {
        //       //     turnId: turn.id,
        //       //     timestamp: turn.timestamp,
        //       //     content: message.content,
        //       //   };
        //       //   if (
        //       //     !agentMsg.some(
        //       //       (msg) => JSON.stringify(msg) === JSON.stringify(currentMsg)
        //       //     )
        //       //   ) {
        //       //     agentMsg.push(currentMsg);
        //       //     // TODO:  Send message to user
        //       //     displayMessage(message.content);
        //       //   }
        //       // }
        //       // console.log('***message=', message);
        //     });
        //   }
        // });
        // Get the next message
        reader.read().then(processAgentMessage);
      });
    });
}

export async function getConversationID(): Promise<string> {
  //navid check this
  return new Promise<string>((resolve, reject) => {
    const fixieClient = new FixieClient({ apiKey: process.env.FIXIE_TOKEN });
    const FIXIE_AGENT_ID = process.env.MIGRATION_AGENT_ID || '';
    const userMessage = 'how are you?';

    fixieClient
      .startConversation({ agentId: FIXIE_AGENT_ID, message: userMessage })
      .then((conversation) => {
        const reader = conversation.getReader();

        let getid = '';

        reader
          .read()
          .then(function processAgentMessage({ done, value }) {
            if (done) {
              console.log('***Done reading agent messages');
              resolve(getid); // Resolve the Promise with getid once done reading
              return;
            }

            if (value?.id) {
              getid = value?.id;
            }

            reader.read().then(processAgentMessage);
          })
          .catch((error) => {
            reject(error); // Reject the Promise if there's an error
          });
      })
      .catch((error) => {
        reject(error); // Reject the Promise if there's an error starting the conversation
      });
  });
}
