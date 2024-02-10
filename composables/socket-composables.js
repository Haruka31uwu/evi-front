import socketHandler from '../handler/socket.js';
const socket = socketHandler();
const eventHandlers=socket.getCurrentSocketEvents()
export const useSocket = () => {
    function subscribeAdminChannel() {
        socket.ws.close();
        socket.ws = new WebSocket('wss://6dd412nf3j.execute-api.us-east-1.amazonaws.com/production/?role_id=1');
    }
    function subscribeUsersChannel() {
        socket.ws.close();
        socket.ws = new WebSocket('wss://6dd412nf3j.execute-api.us-east-1.amazonaws.com/production/?role_id=2');
        socket.ws.addEventListener('message',event=>{
            const eventData =JSON.parse(event.data)
            const eventHandler = eventHandlers[eventData.event];
            if (eventHandler) {
                eventHandler(eventData); // Llama al manejador de eventos correspondiente
            } else {
                console.error("No hay un manejador definido para el evento:", eventData.event);
            }
        })       
    }
    function subscribeGlobalChannel() {
        socket.ws.close();
        socket.ws = new WebSocket('wss://6dd412nf3j.execute-api.us-east-1.amazonaws.com/production/?role_id=0');
        socket.ws.addEventListener('message',event=>{
            const eventData =JSON.parse(event.data)
            const eventHandler = eventHandlers[eventData.event];
            if (eventHandler) {
                eventHandler(eventData); // Llama al manejador de eventos correspondiente
            } else {
                console.error("No hay un manejador definido para el evento:", eventData.event);
            }
        })   
    }
    function getCurrentSocket() {
        return socket.ws
    }
    function registerEventHandler(event, handler) {
        socket.registerEventHandler(event, handler)
    }
    function getCurrentSocketEvents() {
        return socket.getCurrentSocketEvents()
    }
    return {
        subscribeAdminChannel,
        subscribeUsersChannel,
        subscribeGlobalChannel,
        getCurrentSocket,
        registerEventHandler,
        getCurrentSocketEvents,
    }
}
