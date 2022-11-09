import { useCallback, useMemo, useReducer, useEffect, useRef } from 'react';
import { genId } from '../utils/helpers';
import {
  SELECT_BOARD,
  ADD_BOARD,
  ADD_CARD,
  ADD_STATUS,
  UPDATE_STATUS,
} from './constants';
import { reducer, initialState } from './reducer';
import {
  getBoards,
  getStatuses,
  getTitle,
} from './selectors';

const STATE_KEY = 'state';
const STORAGE_UPDATE_TIMEOUT = 2000;

const getInitialState = () => {
  const stateStr = window.localStorage.getItem(STATE_KEY);

  if (stateStr === null) {
    return initialState;
  }

  try {
    const state = JSON.parse(stateStr);

    return state;
  } catch {
    return initialState;
  }
};

export const useState = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectBoard = useCallback((boardId: string) => {
    dispatch({
      type: SELECT_BOARD,
      payload: {
        boardId,
      },
    });
  }, []);

  const handleAddBoard = useCallback((title: string) => {
    dispatch({
      type: ADD_BOARD,
      payload: {
        id: genId(),
        title,
      },
    });
  }, []);

  const handleAddStatus = useCallback((title: string) => {
    if (state.boardId) {
      dispatch({
        type: ADD_STATUS,
        payload: {
          boardId: state.boardId,
          statusId: genId(),
          title,
        },
      });
    }
  }, [state.boardId]);

  const handleAddCard = useCallback((statusId: string, title: string) => {
    dispatch({
      type: ADD_CARD,
      payload: {
        statusId,
        cardId: genId(),
        title,
      },
    });
  }, []);

  const handleUpdateStatus = useCallback((statusId: string, nextStatusId: string, cardId: string) => {
    dispatch({
      type: UPDATE_STATUS,
      payload: {
        statusId,
        nextStatusId,
        cardId,
      },
    })
  }, []);

  const handleUpdateStorage = useMemo(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const stateStr = JSON.stringify(state);

      window.localStorage.setItem(STATE_KEY, stateStr);
    }, STORAGE_UPDATE_TIMEOUT);
  }, [state]);

  const boards = useMemo(() => getBoards(state), [state]);
  const statuses = useMemo(() => getStatuses(state), [state]);
  const title = useMemo(() => getTitle(state), [state]);

  useEffect(() => {
    handleUpdateStorage();
  }, [handleUpdateStorage]);

  return {
    state: {
      boardId: state.boardId,
      title,
      boards,
      statuses,
    },
    actions: {
      onSelectBoard: handleSelectBoard,
      onAddBoard: handleAddBoard,
      onAddStatus: handleAddStatus,
      onAddCard: handleAddCard,
      onUpdateStatus: handleUpdateStatus,
    },
  };
};
