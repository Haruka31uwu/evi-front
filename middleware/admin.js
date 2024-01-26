
export default defineNuxtRouteMiddleware((to,from)=>{
    let actualUser=localStorage.getItem('userData');
    if(actualUser){
        actualUser=JSON.parse(actualUser);
    }
    if(!actualUser){
        return {
            path: '/login'
        }
    }
    if(actualUser[0].id!=1){
        return {
            path: '/'
        }
      
    }
    
})
