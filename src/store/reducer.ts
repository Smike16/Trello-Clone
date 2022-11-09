import { State, Action } from './types';
import {
  ADD_BOARD,
  ADD_STATUS,
  ADD_CARD,
  UPDATE_STATUS,
  SELECT_BOARD,
} from './constants';
import {
  selectBoard,
  addBoard,
  addStatus,
  addCard,
  updateStatus,
} from './cases';

export const initialState: State = {
  boardId: null,
  boards: {
    ids: [],
    items: {},
  },
  statuses: {
    ids: [],
    items: {},
  },
  cards: {
    ids: [],
    items: {},
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SELECT_BOARD: {
      return selectBoard(state, action);
    }

    case ADD_BOARD: {
      return addBoard(state, action);
    }

    case ADD_STATUS: {
      return addStatus(state, action);
    }

    case ADD_CARD: {
      return addCard(state, action);
    }

    case UPDATE_STATUS: {
      return updateStatus(state, action);
    }

    default: {
      return state;
    }
  }
};
