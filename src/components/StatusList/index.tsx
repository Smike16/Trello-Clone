import React from 'react';
import { Status } from '../../store/types';
import { StatusItem } from '../StatusItem';
import './StatusList.css';

type StatusListProps = {
  list: Status[];
  onAddCard: (statusId: string, title: string) => void;
  onUpdateStatus: (statusId: string, nextStatusId: string, cardId: string) => void;
};

export const StatusList = ({
  list,
  onAddCard,
  onUpdateStatus,
}: StatusListProps) => (
  <div className='status-list'>
    {list.map((status) => (
      <StatusItem
        key={status.id}
        statusId={status.id}
        title={status.title}
        cards={status.cards}
        onAddCard={onAddCard}
        onUpdateStatus={onUpdateStatus} />
    ))}
  </div>
);
