import produce from 'immer';
import shortid from 'shortid';

export const ADD_TODOLIST = 'TODOLIST/ADD_TODOLIST';
export const ADD_TODOLIST_ACTION = (title) => ({
  type: ADD_TODOLIST,
  payload: { title },
});

export const ADD_TODO = 'TODO/ADD_TODO';
export const ADD_TODO_ACTION = ({ todoValue, todoListIdx }) => ({
  type: ADD_TODO,
  payload: { todoListIdx, todoValue },
});

export const CHECK_TODO = 'TODO/CHECK_TODO';
export const CHECK_TODO_ACTION = ({ todoListIdx, todoIdx }) => ({
  type: CHECK_TODO,
  payload: { todoListIdx, todoIdx },
});

const initialState = [];

const trelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, (draftState) => {
        draftState[action.payload.todoListIdx].todo.push({
          id: shortid.generate(),
          value: action.payload.todoValue,
          done: false,
        });
      });
    case CHECK_TODO:
      return produce(state, (draftState) => {
        draftState[action.payload.todoListIdx].todo[action.payload.todoIdx].done =
          !draftState[action.payload.todoListIdx].todo[action.payload.todoIdx].done;
      });
    case ADD_TODOLIST:
      return produce(state, (draftState) => {
        draftState.push({
          id: shortid.generate(),
          title: action.payload.title,
          todo: [],
        });
      });
    default:
      return state;
  }
};

export default trelloReducer;
