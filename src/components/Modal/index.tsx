import { MouseEventHandler, PropsWithChildren, useEffect, useState, useRef, MouseEvent } from "react";
import { ModalComponent, ModalContent,} from "./styles";
import IconButton from "../IconButton";
import { IoClose } from 'react-icons/io5';

type modalProps = {
    isOpen: boolean,
    onClose?: Function,
    closeOnOverlayClick?: boolean
} & PropsWithChildren

const Modal = ({ children, isOpen, onClose, closeOnOverlayClick }:modalProps)  => {
    const modalRef = useRef<HTMLDialogElement>(null);
    
    function closeModal() {
        modalRef.current?.setAttribute('closing', '');
        modalRef.current?.addEventListener('animationend', () => {
            modalRef.current?.removeAttribute('closing');
            modalRef.current?.close();
        }, { once: true })
    }

    function closeModalOnOverlayClick(e:MouseEvent<HTMLDialogElement>) {
        const target = e.target as Element;
        e.stopPropagation();
        if(closeOnOverlayClick) {
            if(target.nodeName === 'DIALOG') {
                closeModal();
                if(onClose) onClose()
            }
        }
    }

    useEffect(() => {
        if(isOpen) {
            modalRef.current?.showModal();
        }
    }, [isOpen])

    return (
        <ModalComponent 
            ref={modalRef}
            onClick={(e) => closeModalOnOverlayClick(e)}
        >
            <ModalContent>
                <IconButton
                    icon={<IoClose />}
                    variant="solid"
                    onClick={() => {
                        closeModal()
                        if(onClose) onClose()
                    }}
                    css={{ position: 'absolute', top: 20, right: 20, '@bp3': {top: -20, right: -20, zIndex: 5}}}
                />
                {children}
            </ModalContent>
        </ModalComponent>
    )
};

export default Modal;