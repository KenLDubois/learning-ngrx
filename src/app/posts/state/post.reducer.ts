import { createAction, createReducer, on } from '@ngrx/store';

export const postReducer = createReducer(
  { showPostId: false },
  on(createAction('[Post] Toggle Post Id'), (state) => {
    return { ...state, showPostId: !state.showPostId };
  })
);
