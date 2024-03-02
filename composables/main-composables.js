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
                    '<div class="text-center"><h3 style="color:#0393AA;font-family:Axiforma;font-size:1.4em;margin:1em 0 2em 0;">' + title + '</h3><p class="text-center" style="font-family:Axiforma;margin-top:1em;font-size:1em">' +
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
    function showConfirmSwall(title = 'Are you sure?', text = 'You won\'t be able to revert this!', confirmButtonText = 'Yes',cancelButtonText='Cancel') {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: title,
                text: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,

            }).then((result) => {
                if (result.isConfirmed) {
                    resolve(true); // Resuelve la promesa con true si se confirma el diálogo
                } else {
                    resolve(false); // Resuelve la promesa con false si no se confirma el diálogo
                }
            });
        });
    }
    // function showSuccessSwall(title = 'Success', text = 'Your work has been saved') {
    //     Swal.fire({

    //         icon: 'success',
    //         title: title,
    //         text: text,
    //     });
    // }
    function showSuccessSwall(title = 'Oops...', text = 'Something went wrong!') {
        const swal = Swal.mixin({
            customClass: {
                confirmButton: "btn-blue",
                //   cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swal.fire({

            color: 'white',
            background: '#1C1C24',
            confirmButtonText: '<div style="width:350px;margin:0;font-family:Axiforma;color:white"> Cerrar</div>',
            width: "500px",
            html:
                '<div class="text-center"><svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65 130C52.1442 130 39.5772 126.188 28.888 119.046C18.1988 111.903 9.86756 101.752 4.94786 89.8744C0.0281633 77.9972 -1.25905 64.9279 1.24899 52.3192C3.75703 39.7104 9.94767 28.1285 19.0381 19.0381C28.1285 9.94767 39.7104 3.75703 52.3192 1.24899C64.9279 -1.25905 77.9972 0.0281633 89.8744 4.94786C101.752 9.86756 111.903 18.1988 119.046 28.888C126.188 39.5772 130 52.1442 130 65C130 73.5359 128.319 81.9883 125.052 89.8744C121.786 97.7606 116.998 104.926 110.962 110.962C104.926 116.998 97.7606 121.786 89.8744 125.052C81.9883 128.319 73.5359 130 65 130ZM65 9.51222C54.0256 9.51222 43.2976 12.7665 34.1727 18.8636C25.0477 24.9607 17.9357 33.6267 13.736 43.7658C9.53624 53.9048 8.4374 65.0616 10.5784 75.8252C12.7194 86.5887 18.0041 96.4757 25.7642 104.236C33.5243 111.996 43.4113 117.281 54.1749 119.422C64.9385 121.563 76.0952 120.464 86.2343 116.264C96.3734 112.064 105.039 104.952 111.136 95.8274C117.234 86.7025 120.488 75.9745 120.488 65C120.488 50.2837 114.642 36.1702 104.236 25.7642C93.8298 15.3582 79.7163 9.51222 65 9.51222Z" fill="#B7CD00"/><path d="M55.0765 94.7255C53.9011 94.7142 52.7716 94.268 51.9058 93.473L31.7082 74.845C31.1635 74.4546 30.7075 73.9536 30.37 73.3747C30.0324 72.7957 29.8211 72.152 29.7497 71.4857C29.6783 70.8194 29.7486 70.1455 29.9558 69.5083C30.1631 68.871 30.5027 68.2847 30.9523 67.7878C31.402 67.291 31.9515 66.8947 32.565 66.6251C33.1785 66.3555 33.842 66.2185 34.5122 66.2232C35.1823 66.2279 35.8438 66.3742 36.4534 66.6524C37.0631 66.9306 37.607 67.3346 38.0497 67.8377L54.5533 83.0572L88.1472 42.3609C88.9503 41.3875 90.1072 40.773 91.3633 40.6526C92.6195 40.5322 93.872 40.9157 94.8454 41.7188C95.8188 42.5219 96.4333 43.6787 96.5537 44.9349C96.6741 46.191 96.2906 47.4436 95.4875 48.417L58.7387 92.9974C58.3281 93.498 57.8196 93.9094 57.2444 94.2066C56.6692 94.5037 56.0394 94.6803 55.3936 94.7255H55.0765Z" fill="#B7CD00"/></svg></div><p class="text-center" style="font-family:Axiforma;margin-top:1em">' +
                text +
                '</p>',
        })
    }
    function showErrorSwall(title = 'Oops...', text = 'Something went wrong!') {
        const swal = Swal.mixin({
            customClass: {
                confirmButton: "btn-blue",
                //   cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swal.fire({

            color: 'white',
            background: '#1C1C24',
            confirmButtonText: '<div style="width:350px;margin:0;font-family:Axiforma;color:white"> Cerrar</div>',
            width: "500px",
            html:
                '<div class="text-center"><img style="height:400px" src="/assets/img/commons/evi-error.png" ></div><p class="text-center" style="font-family:Axiforma;margin-top:1em">' +
                text +
                '</p>',
        })
        // Swal.fire({

        //     color: 'white',
        //     width: '50%',
        //     background: '#1C1C24',
        //     confirmButtonText: '<div style="background:#0393AA;width:60%;min-width:200px"> Ver Detalle de Compra</div>',
        //     html:
        //         '<div class="text-center"><img style="height:400px" src="/assets/img/commons/evi-error.png" class="w-50"></div><p class="text-center" style="font-family:Axiforma;margin-top:1em">' +
        //         text +
        //         '</p>',
        // });
    }
    return {
        showSuccessSwall,
        showErrorSwall,
        showSuccessBuySwall,
        showConfirmEmailSwall,
        showConfirmSwall
    };
}

export const scrollIntoView = (id) => {
    const el = document.getElementById(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}
export const redirectTo = (path, id) => {
    const router = useRouter()
    console.log('path', path, id)
    router.push(path).then(() => {
        if (id) {
            setTimeout(() => {
                scrollIntoView(id)
            }, 200)
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