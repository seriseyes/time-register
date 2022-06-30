import {ToastContainer} from "react-toastify";

/**
 * Баярхүү.Лув, 0000.00.00 00:00
 */

export default function Notification({position, second}) {
    return (
        <ToastContainer
            position={position ? position : "top-center"}
            autoClose={second ? second * 1000 : 2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}