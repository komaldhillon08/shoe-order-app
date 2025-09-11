import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal.showModal();
        } else {
            modal.close();
        }
    }, [open]);

    return createPortal(

        <dialog
            onClose={onClose}
            ref={dialog}
            className="bg-[#e4ddd4] rounded-md border-none shadow-[0_2px_8px_rgba(0,0,0,0.6)] 
            p-4 w-1/3 mx-auto mt-60 max-w-[40rem] animate-[fade-slide-up_0.3s_ease-out_forwards]"
        >
            {children}
        </dialog>, document.getElementById("modal")


    )
}



/* 
    background-color: #e4ddd4;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    padding: 1rem;
    width: 80%;
    max-width: 40rem;
    animation: fade-slide-up 0.3s ease-out forwards;
*/