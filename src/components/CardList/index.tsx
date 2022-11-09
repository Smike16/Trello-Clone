import React from 'react';
import { Card } from '../../store/types';
import { CardItem } from '../CardItem';
import './CardList.css';

type CardListProps = {
  statusId: string;
  list: Card[];
};

export const CardList = ({ statusId, list }: CardListProps) => (
  <div className='card-list'>
    {list.map((card) => (
      <CardItem
        key={card.id}
        statusId={statusId}
        id={card.id}
        title={card.title} />
    ))}
  </div>
);
