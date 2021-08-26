import { CHECK_TODO_ACTION } from '@/reducer/trello';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const TrelloItem = ({ Todo, TodoListIdx, TodoIdx }) => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(CHECK_TODO_ACTION({ todoListIdx: TodoListIdx, todoIdx: TodoIdx }));
    },
    [Todo, TodoIdx],
  );
  return (
    <>
      {Todo.done ? (
        <span onClick={onClick} className="done" key={Todo.id}>
          <del>
            {Todo.value}
            <br />
          </del>
        </span>
      ) : (
        <span onClick={onClick}>
          <span>{Todo.value}</span>
        </span>
      )}
    </>
  );
};

export default React.memo(TrelloItem);
