import { MouseEventHandler, PropsWithChildren, useEffect, useState, useRef } from "react";
import { Modal, ModalContent,} from "./styles";
import IconButton from "../IconButton";
import { IoClose } from 'react-icons/io5';

type modalProps = {
    isOpen: boolean,
    onClose?: Function,
    closeOnOverlayClick?: boolean
} & PropsWithChildren

export default ({ children, isOpen, onClose, closeOnOverlayClick }:modalProps)  => {
    const modalRef = useRef<HTMLDialogElement>(null);
    
    function closeModal() {
        modalRef.current?.setAttribute('closing', '');
        modalRef.current?.addEventListener('animationend', () => {
            modalRef.current?.removeAttribute('closing');
            modalRef.current?.close();
        }, { once: true })
    }

    useEffect(() => {
        if(isOpen) {
            modalRef.current?.showModal();
        }
    }, [isOpen])

    return (
        <Modal 
            ref={modalRef}
            onClick={
                (e) => {
                    const target = e.target as Element;
                    e.stopPropagation();
                    console.log(target.nodeName)
                    if(closeOnOverlayClick) {
                        if(target.nodeName === 'DIALOG') {
                            closeModal();
                            if(onClose) onClose()
                        }
                    }
                }
            }
        >
            <ModalContent>
                <IconButton
                    icon={<IoClose />}
                    variant="solid"
                    onClick={() => {

                        if(onClose) onClose()
                    }}
                    css={{ position: 'absolute', top: 20, right: 20, '@bp2': {top: -20, right: -20}}}
                />
                teste
                {children}
            </ModalContent>
        </Modal>
    )
}