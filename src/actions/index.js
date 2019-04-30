import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
};


// bad approach 1: const response = await jsonPlaceholder.get('/posts');

// bad approach 2: c

// need REDUX THUNK to use asynchronous action creators

// Middlewares in Redux:
  // function that gets called with every action we dispatch
  // has the ability to STOP, MODIFY, or otherwise mess around with actions
  // Most popular use of middleware is for dealing with async actions

// Redux Thunk
  // Normal rules:
    // action creators must return action objects
    // actions must have a type property
    // actions can optionally have a 'payload'

  // Thunk Rules:
    // allows you to return either an action object or a function
    // if an action object gets returned, it must have a type
    // if an action object gets return, it can optionally have a 'payload'
    // action creator => object or function => dispatch => redux thunk
      // if action => reducers
      // if function => call with dispatch and getState functions as arguments
        // then use dispatch to manually dispatch an action to reducers
