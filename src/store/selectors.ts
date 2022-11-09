import { State } from './types';

export const getBoards = (state: State) => {
  return state.boards.ids.map((id) => state.boards.items[id]);
};

export const getStatuses = (state: State) => {
  if (state.boardId === null) {
    return [];
  }

  const board = state.boards.items[state.boardId];

  return board.statusIds.map((statusId) => {
    const status = state.statuses.items[statusId];

    return {
      id: statusId,
      title: status.title,
      cards: status.cardIds.map((cardId) => {
        const card = state.cards.items[cardId];

        return {
          id: cardId,
          title: card.title,
        };
      }),
    };
  });
};

export const getTitle = (state: State) => {
  if (state.boardId === null) {
    return 'You should create board';
  }

  const board = state.boards.items[state.boardId];

  return board.title;
};
