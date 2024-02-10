export default function useSocket() {
    const ws = new WebSocket('wss://6dd412nf3j.execute-api.us-east-1.amazonaws.com/production/?role_id=0',
    )
    const eventHandlers={}
    ws.addEventListener('open', function (event) {
    ws.send('Subsribed to global channel')
    });
    ws.addEventListener('message',event=>{
        const eventData =JSON.parse(event.data)
        const eventHandler = eventHandlers[eventData.event];
        if (eventHandler) {
            eventHandler(eventData); // Llama al manejador de eventos correspondiente
        } else {
            console.error("No hay un manejador definido para el evento:", eventData.event);
        }
    })
    function registerEventHandler(event, handler) {
        eventHandlers[event] = handler;
       
    }
    function getCurrentSocketEvents(){
        return eventHandlers;
    }
    function reInitializeListeners(){
        ws.addEventListener('message',event=>{
            const eventData =JSON.parse(event.data)
            const eventHandler = eventHandlers[eventData.event];
            if (eventHandler) {
                eventHandler(eventData); // Llama al manejador de eventos correspondiente
            } else {
                console.error("No hay un manejador definido para el evento:", eventData.event);
            }
        })
    }
    return{
        ws,
        registerEventHandler,
        getCurrentSocketEvents,
        reInitializeListeners
    }
    // ws.addEventListener('message', function (event) {
    //     const data=JSON.parse(event.data)
    //     const permitedRoles=data.permitted
    //     if(permitedRoles.includes(userData.value.role_id)){
    //     showSuccessSwall('Alerta',data.message)
    //     }
    // });
}  