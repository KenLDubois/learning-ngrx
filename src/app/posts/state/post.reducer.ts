import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Post } from '../post';

export interface State extends AppState.State {
  posts: PostState;
}

export interface PostState {
  showPostId: boolean;
  selectedPost: Post;
  posts: Post[];
}

const initialState: PostState = {
  showPostId: false,
  selectedPost: null,
  posts: [],
};

export const postReducer = createReducer<PostState>(
  initialState,
  on(createAction('[Post] Toggle Post Id'), (state): PostState => {
    return { ...state, showPostId: !state.showPostId };
  })
);
