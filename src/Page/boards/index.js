import React, { useCallback, useState } from 'react';
import TrelloList from '@/Component/TrelloList';
import { useDispatch, useSelector } from 'react-redux';
import TrelloEditModal from '@/Component/TrelloEditModal';
import GlobalStyle from '@/Util/GlobalStyle';
import { ADD_TODOLIST_ACTION } from '@/reducer/trello';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Boards = () => {
  const dispatch = useDispatch();
  const TodoList = useSelector((state) => state.trello);
  const [todoListEditModal, setTodoListEditModal] = useState(false);
  const [curTodoListIndex, setCurTodoListIndex] = useState(-1);
  const [todoListTitle, setTodoListTitle] = useState('');

  const onOpenModal = useCallback(() => {
    setTodoListEditModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setTodoListEditModal(false);
  }, []);
  const onClickTitle = useCallback((idx) => {
    setCurTodoListIndex(idx);
    setTodoListEditModal(true);
  }, []);

  const addNewTodoList = useCallback(
    (e) => {
      e.preventDefault();
      if (todoListTitle.trim() === '') {
        toast.error('올바른 값이 입력되지 않았습니다.', {
          autoClose: 2000,
        });
        return;
      }
      dispatch(ADD_TODOLIST_ACTION(todoListTitle));
      setTodoListTitle('');
    },
    [todoListTitle],
  );

  const onChange = useCallback((e) => {
    setTodoListTitle(e.target.value);
  }, []);

  return (
    <>
      <GlobalStyle />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {TodoList.length === 0 ? (
          <div>아직 TodoList를 작성하지 않았어요.</div>
        ) : (
          TodoList.map((ele, idx) => (
            <TrelloList
              TodoList={ele}
              key={ele.id}
              TodoListIdx={idx}
              onClickTitle={onClickTitle}
              onOpenModal={onOpenModal}
            />
          ))
        )}
        {todoListEditModal && (
          <TrelloEditModal onCloseModal={onCloseModal} index={curTodoListIndex} TodoList={TodoList[curTodoListIndex]} />
        )}
        <div>
          <form onSubmit={addNewTodoList}>
            <input value={todoListTitle} onChange={onChange} placeholder="제목을 입력하세요"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Boards;
