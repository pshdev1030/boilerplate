import React from 'react';
import { ModalBackground } from '@/Component/Modal/style';

const Modal = ({ children, onCloseModal, index }) => {
  return (
    <>
      <ModalBackground onClick={onCloseModal} />
      <div>{index}</div>
      {children}
    </>
  );
};

export default Modal;
