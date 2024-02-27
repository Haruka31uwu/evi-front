

export default defineNuxtRouteMiddleware((to,from)=>{
    let actualUser=localStorage.getItem('userData');
    if(actualUser){
        return {
            path: '/'
        
        }
        
    }
    
    
    
})
