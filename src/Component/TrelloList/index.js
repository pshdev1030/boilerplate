import React from 'react';
import TrelloItem from '@/Component/TrelloItem';
import { TrelloListWrapper } from '@/Component/TrelloList/style';

const TrelloList = ({ TodoList, TodoListIdx, onClickTitle }) => {
  return (
    <TrelloListWrapper onClick={() => onClickTitle(TodoListIdx)}>
      <h4 onClick={() => onClickTitle(TodoListIdx)}>
        {TodoList.title.length >= 10 ? TodoList.title.slice(0, 15) + ' ...' : TodoList.title}
      </h4>
      <ul key={TodoList.id}>
        {TodoList.todo.map((ele, idx) => (
          <li key={ele.id}>
            <TrelloItem Todo={ele} TodoListIdx={TodoListIdx} TodoIdx={idx} />
          </li>
        ))}
      </ul>
    </TrelloListWrapper>
  );
};
export default React.memo(TrelloList);
