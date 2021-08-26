import React from 'react';
import Modal from '@/Component/Modal';
import { TrelloEditModalWrapper } from '@/Component/TrelloEditModal/style';
import TrelloEditForm from '@/Component/TrelloEditForm';
import TrelloItem from '@/Component/TrelloItem';

const TrelloEditModal = ({ TodoList, onCloseModal, index }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <TrelloEditModalWrapper>
        <h4>{TodoList.title}</h4>
        <ul key={TodoList.id}>
          {TodoList.todo.map((ele, idx) => (
            <li key={ele.id}>
              <TrelloItem Todo={ele} TodoListIdx={index} TodoIdx={idx} />
            </li>
          ))}
        </ul>
        <TrelloEditForm index={index} />
      </TrelloEditModalWrapper>
    </Modal>
  );
};

export default TrelloEditModal;
