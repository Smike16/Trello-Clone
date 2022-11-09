import {
  SELECT_BOARD,
  ADD_BOARD,
  ADD_STATUS,
  ADD_CARD,
  UPDATE_STATUS,
} from './constants';

type BoardState = {
  id: string;
  title: string;
  statusIds: string[];
};

type StatusState = {
  id: string;
  title: string;
  cardIds: string[];
};

export type Card = {
  id: string;
  title: string;
};
export type Board = Omit<BoardState, 'statusIds'>;
export type Status = Omit<StatusState, 'cardIds'> & { cards: Card[] };

export type SelectBoardAction = {
  type: typeof SELECT_BOARD,
  payload: {
    boardId: string;
  }
};

export type AddBoardAction = {
  type: typeof ADD_BOARD,
  payload: {
    id: string;
    title: string;
  }
};

export type AddStatusAction = {
  type: typeof ADD_STATUS;
  payload: {
    boardId: string;
    statusId: string;
    title: string;
  }
};

export type AddCardAction = {
  type: typeof ADD_CARD;
  payload: {
    statusId: string;
    cardId: string;
    title: string;
  }
};

export type UpdateStatusAction = {
  type: typeof UPDATE_STATUS;
  payload: {
    statusId: string;
    nextStatusId: string;
    cardId: string;
  }
};

export type Action =
  | SelectBoardAction
  | AddBoardAction
  | AddStatusAction
  | AddCardAction
  | UpdateStatusAction;

type Entity<T> = {
  ids: string[];
  items: Record<string, T>;
};

export type State = {
  boardId: string | null;
  boards: Entity<BoardState>;
  statuses: Entity<StatusState>;
  cards: Entity<Card>;
};
