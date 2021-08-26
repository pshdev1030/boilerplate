import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO_ACTION } from '@/reducer/trello';
import { toast } from 'react-toastify';
// import { useForm } from 'react-hook-form';

const TrelloEditForm = ({ index }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  //   const { handleSubmit, register, error, reset } = useForm();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value.trim() === '') {
        toast.error('올바른 값이 입력되지 않았습니다.', {
          autoClose: 2000,
        });
        return;
      }
      dispatch(ADD_TODO_ACTION({ todoValue: value, todoListIdx: index }));
      setValue('');
    },
    [value],
  );

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
      </form>
    </div>
  );
};

export default TrelloEditForm;
