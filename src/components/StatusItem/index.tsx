import React, { useCallback, useState } from 'react';
import { Card } from '../../store/types';
import { AddForm } from '../AddForm';
import { CardList } from '../CardList';
import './StatusItem.css';

type StatusItemProps = {
  statusId: string;
  title: string;
  cards: Card[];
  onAddCard: (statusId: string, title: string) => void;
  onUpdateStatus: (statusId: string, nextStatusId: string, cardId: string) => void;
};

export const StatusItem = ({
  statusId,
  title,
  cards,
  onAddCard,
  onUpdateStatus,
}: StatusItemProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleAddCard = useCallback((title: string) => {
    onAddCard(statusId, title);
  }, [statusId, onAddCard]);

  const handleDrop = useCallback((event: React.DragEvent) => {
    const prevStatusId = event.dataTransfer.getData('statusId');
    const cardId = event.dataTransfer.getData('cardId');

    if (prevStatusId && cardId && prevStatusId !== statusId) {
      onUpdateStatus(prevStatusId, statusId, cardId);
    }

    setDragOver(false);
  }, [statusId, onUpdateStatus]);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDragEnter = useCallback(() => {
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  return (
    <div className='status-item'>
      <h4 className='status-item-title'>
        {title}
      </h4>
      <CardList
        statusId={statusId}
        list={cards} />
      <div
        className={`status-item-dragarea ${dragOver ? 'status-item-dragarea_dragover' : ''}`}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}>
        Drag Here
      </div>
      <AddForm
        placeholder='Add card'
        onSubmit={handleAddCard} />
    </div>
  );
};
