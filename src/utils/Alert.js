import { toast } from 'react-toastify';

const toastConfig = {
    position: toast.POSITION.TOP_RIGHT
}

const notify =  {
    success: (msg) => toast.success(msg, toastConfig),
    info: (msg) => toast.info(msg, toastConfig),
    danger: (msg) => toast.error(msg, toastConfig)
}

export default notify;