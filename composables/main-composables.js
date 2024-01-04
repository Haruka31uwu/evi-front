import preloaderHandler from '../handler/main';
import Swal from 'sweetalert2';
const preloader = preloaderHandler();
export const usePreloader = () => {
    function showPreloader() {
        preloader.showPreloader();
    }

    function hidePreloader() {
        preloader.hidePreloader();
    }

    return {
        isLoading: preloader.isLoading,
        showPreloader,
        hidePreloader,
    };
}
export const useSwall = () => {
    function showSuccessSwall(title='Success',text='Your work has been saved',confirmButtonText='Ok') {
        Swal.fire({
            color:"white",
            width:"50%",
            background:"#1C1C24",
            confirmButtonText: 'Ver Detalle de Compra',
            html: '<div class="text-center"><img  style="height:400px"src="/assets/img/commons/evi-success.png" class="w-50"></div><p class="text-center " style="font-family:Axiforma;margin-top:1em">'+text+'</p>',
            confirmButtonColor: "#0393AA",

        });
    }
    function showErrorSwall(title='Oops...',text='Something went wrong!') {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
        });
    }
    return {
        showSuccessSwall,
        showErrorSwall,
    };
}
    
export const scrollIntoView = (id) => {
    const el = document.getElementById(id)
    console.warn(el, id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
export const redirectTo = (path, id) => {
    const router = useRouter()
    console.log(path,id)
    router.push(path).then(() => {
        if (id) {
            scrollIntoView(id)
        }
    })
}
export const forceFileDownload = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
export const getClaimForm=ref(false);
export const setShowClaimForm =(value)=> {
    getClaimForm.value=value;
}