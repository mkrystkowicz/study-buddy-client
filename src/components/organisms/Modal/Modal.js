import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper } from './Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => modalContainer.removeChild(modalNode);
  }, [modalNode]);

  return createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>CloseModal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
