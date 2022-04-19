import { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return {
    Modal,
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
