export default async function handler(req, res) {
    const { query, user_id } = req.body;
  
    try {
      const response = await fetch('https://mrneuralnet-chain-link-ai.hf.space/bot_interaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: newMessage,
            user_id: 'your_user_id',
          }),
      });
  
      if (response.ok) {
        const result = await response.json();
        const botResponse = result[0].text; // Assuming the response is an array with one element
        res.status(200).json({ botResponse });
      } else {
        console.error('Error:', response.statusText);
        res.status(response.status).json({ error: response.statusText });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }