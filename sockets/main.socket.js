// import Echo from 'laravel-echo'
// import Pusher from 'pusher-js'
// window.Pusher = Pusher
// console.log('context')
// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: "d893bc04c49a94987fe6",
//   cluster: "mt1",
//   forceTLS: false,
//   wsHost: "127.0.0.1",
//   wsPort: 6001,     
// })
// window.Echo.channel('channel-chat').listen('.message', (data) => {
//   console.log('Mensaje recibido:', data.message);
//   // Puedes hacer lo que necesites con el mensaje aquí
// });
// export default window.Echo
const ws = new WebSocket('wss://89hkomvo2e.execute-api.us-east-1.amazonaws.com/dev',
);

ws.addEventListener('open', (event) => {
  try {
    ws.send('Hello!');
  }
    catch (err) {
        console.error('WebSocket error:', err);
    }
});

ws.addEventListener('message', (event) => {
  console.log('WebSocket message received:', event.data);
});

ws.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});

ws.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

export default ws;
