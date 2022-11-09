import React from 'react';
import { useState } from './store';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { BoardList } from './components/BoardList';
import { StatusList } from './components/StatusList';
import { AddForm } from './components/AddForm';

export const App = () => {
  const { state, actions } = useState();

  return (
    <Layout title={state.title}>
      <Sidebar>
        <BoardList
          list={state.boards}
          selectedId={state.boardId}
          onSelect={actions.onSelectBoard}
          onAdd={actions.onAddBoard} />
      </Sidebar>
      <Content>
        {state.boardId !== null ? (
          <>
            <StatusList
              list={state.statuses}
              onAddCard={actions.onAddCard}
              onUpdateStatus={actions.onUpdateStatus} />
            <AddForm
              placeholder='Add new status'
              onSubmit={actions.onAddStatus} />
          </>
        ) : null}
      </Content>
    </Layout>
  );
};
