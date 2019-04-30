import { combineReducers } from 'redux';
import postsReducer from './postsReducer'

export default combineReducers({
  posts: postsReducer
});


// Rules of reducers:
  // must return any other value besides 'undefined'
  // produces 'state', or data to be used inside of your app using only previous state and the action
  // must not reach 'out of itself' to decide whtat value to return (ex: make an API request)
    // only looks at previous state value and action payload
    // reducers are pure
  // must not mutate its input 'state' arguments
