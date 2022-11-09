import React, { useCallback } from 'react';
import './BoardItem.css';

type BoardItemProps = {
  id: string;
  title: string;
  selected: boolean;
  onSelect: (id: string) => void;
};

export const BoardItem = ({
  id,
  title,
  selected,
  onSelect,
}: BoardItemProps) => {
  const handleSelect = useCallback(() => {
    onSelect(id);
  }, [id, onSelect]);

  return (
    <div
      className={`board-item ${selected ? 'board-item_selected' : ''}`}
      onClick={handleSelect}>
      {title}
    </div>
  );
};
