import { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./modal interfaces";
import {
  ModalBackdrop,
  ModalWindow,
  CloseButton,
  ModalTitle,
  ModalContent,
} from "./Modal.styles";

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackdrop>
      <ModalWindow>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWindow>
    </ModalBackdrop>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
