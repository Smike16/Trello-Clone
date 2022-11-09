import React from 'react';
import { BoardItem } from '../BoardItem';
import { AddForm } from '../AddForm';
import { Board } from '../../store/types';
import './BoardList.css';

type BoardListProps = {
  list: Board[];
  selectedId: string | null;
  onSelect: (boardId: string) => void;
  onAdd: (title: string) => void;
};

export const BoardList = ({
  list,
  selectedId,
  onSelect,
  onAdd,
}: BoardListProps) => {
  return (
    <div className='board-list'>
      <h4>
        Boards ({list.length})
      </h4>
      {list.map((board) => (
        <BoardItem
          key={board.id}
          id={board.id}
          selected={selectedId !== null && board.id === selectedId}
          title={board.title}
          onSelect={onSelect} />
      ))}
      <AddForm
        placeholder='Add new board'
        onSubmit={onAdd} />
    </div>
  );
};
