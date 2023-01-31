import { MouseEventHandler, PropsWithChildren, useEffect, useState } from "react";
import { Modal, ModalContent, ModalOverlay} from "./styles";
import IconButton from "../IconButton";
import { IoClose } from 'react-icons/io5';

type modalProps = {
    isOpen: boolean,
    onClose: Function
} & PropsWithChildren

export default ({ children, isOpen, onClose }:modalProps)  => {

    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay onClick={() => onClose()} />
            <ModalContent>
                <IconButton icon={<IoClose />} variant="solid" onClick={() => onClose()} css={{ position: 'absolute', top: 20, right: 20, '@bp2': {top: -20, right: -20}}}/>
                {children}
            </ModalContent>
        </Modal>
    )
}