import React, { useCallback } from 'react';
import './CardItem.css';

type CardItemProps = {
  statusId: string;
  id: string;
  title: string;
};

export const CardItem = ({
  statusId,
  id,
  title,
}: CardItemProps) => {
  const handleDragStart = useCallback((event: React.DragEvent) => {
    event.dataTransfer.setData('cardId', id);
    event.dataTransfer.setData('statusId', statusId);
  }, [id, statusId]);

  return (
    <div
      className='card-item'
      onDragStart={handleDragStart}
      draggable>
      {title}
    </div>
  );
};
