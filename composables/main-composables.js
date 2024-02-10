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
    function showSuccessBuySwall(title = 'Success', text = 'Your work has been saved') {
        return new Promise((resolve, reject) => {
            Swal.fire({
                color: 'white',
                width: '50%',
                background: '#1C1C24',
                confirmButtonText: 'Ver Detalle de Compra',
                html:
                    '<div class="text-center"><img style="height:400px" src="/assets/img/commons/evi-success.png" class="w-50"></div><p class="text-center" style="font-family:Axiforma;margin-top:1em">' +
                    text +
                    '</p>',
                confirmButtonColor: '#0393AA',
            }).then((result) => {
                if (result.isConfirmed) {
                    resolve(true); // Resuelve la promesa con true si se confirma el diálogo
                } else {
                    resolve(false); // Resuelve la promesa con false si no se confirma el diálogo
                }
            });
        });
    };
    function showConfirmEmailSwall(title = 'Success', text = 'Your work has been saved') {
        return new Promise((resolve, reject) => {
            Swal.fire({
                color: 'white',
                width: '50%',
                background: '#1C1C24',
                confirmButtonText: 'Aceptar',
                html:
                    '<div class="text-center"><h3 style="color:#0393AA;font-family:Axiforma;font-size:1.4em;margin:1em 0 2em 0;">'+ title+'</h3><p class="text-center" style="font-family:Axiforma;margin-top:1em;font-size:1em">' +
                    text +
                    '</p>',
                confirmButtonColor: '#0393AA',
            }).then((result) => {
                if (result.isConfirmed) {
                    resolve(true); // Resuelve la promesa con true si se confirma el diálogo    
                } else {
                    resolve(false); // Resuelve la promesa con false si no se confirma el diálogo
                }
            });
        });
    }
    function showSuccessSwall(title = 'Success', text = 'Your work has been saved') {
        Swal.fire({
            icon: 'success',
            title: title,
            text: text,
        });
    }
    function showErrorSwall(title = 'Oops...', text = 'Something went wrong!') {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
        });
    }
    return {
        showSuccessSwall,
        showErrorSwall,
        showSuccessBuySwall,
        showConfirmEmailSwall
    };
}

export const scrollIntoView = (id) => {
    const el = document.getElementById(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
export const redirectTo = (path, id) => {
    const router = useRouter()
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
export const getClaimForm = ref(false);
export const setShowClaimForm = (value) => {
    getClaimForm.value = value;
}
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}