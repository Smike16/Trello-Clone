import {
  State,
  SelectBoardAction,
  AddBoardAction,
  AddStatusAction,
  AddCardAction,
  UpdateStatusAction,
} from './types';

export const selectBoard = (state: State, action: SelectBoardAction): State => {
  const { boardId } = action.payload;

  return {
    ...state,
    boardId,
  };
};

export const addBoard = (state: State, action: AddBoardAction): State => {
  const { id, title } = action.payload;

  return {
    ...state,
    boardId: state.boardId || id,
    boards: {
      ...state.boards,
      items: {
        ...state.boards.items,
        [id]: {
          id,
          title,
          statusIds: [],
        }
      },
      ids: [...state.boards.ids, id],
    },
  };
};

export const addStatus = (state: State, action: AddStatusAction): State => {
  const { boardId, statusId, title } = action.payload;

  return {
    ...state,
    boards: {
      ...state.boards,
      items: {
        ...state.boards.items,
        [boardId]: {
          ...state.boards.items[boardId],
          statusIds: [...state.boards.items[boardId].statusIds, statusId],
        },
      },
    },
    statuses: {
      ...state.statuses,
      items: {
        ...state.statuses.items,
        [statusId]: {
          id: statusId,
          title,
          cardIds: [],
        }
      },
      ids: [...state.statuses.ids, statusId],
    },
  };
};

export const addCard = (state: State, action: AddCardAction): State => {
  const { statusId, cardId, title } = action.payload;

  return {
    ...state,
    statuses: {
      ...state.statuses,
      items: {
        ...state.statuses.items,
        [statusId]: {
          ...state.statuses.items[statusId],
          cardIds: [...state.statuses.items[statusId].cardIds, cardId],
        },
      },
    },
    cards: {
      ...state.cards,
      items: {
        ...state.cards.items,
        [cardId]: {
          id: cardId,
          title,
        },
      },
      ids: [...state.cards.ids, cardId],
    },
  };
};

export const updateStatus = (state: State, action: UpdateStatusAction): State => {
  const { statusId, nextStatusId, cardId } = action.payload;

  return {
    ...state,
    statuses: {
      ...state.statuses,
      items: {
        ...state.statuses.items,
        [statusId]: {
          ...state.statuses.items[statusId],
          cardIds: state.statuses.items[statusId].cardIds.filter((id) => id !== cardId),
        },
        [nextStatusId]: {
          ...state.statuses.items[nextStatusId],
          cardIds: [...state.statuses.items[nextStatusId].cardIds, cardId],
        },
      },
    },
  };
};
