import { toast } from 'react-toastify';
import { iNotify } from 'src/@types/globalState';

export function typeNotify(notify: iNotify){
    if(notify.type >= 500 && notify.type != undefined && notify.message != undefined){
        return( // ERROR
            toast.error(notify.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
        }))
    } else if(notify.type >= 400) {
        return( // WARNING
            toast.warning(notify.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
        }))
    } else {
        return( // SUCESSS
            toast.success(notify.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
        }))
    }
}