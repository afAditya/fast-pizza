import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
        Delete
      </Button>
    </div>
  );
}
