import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = { randomValue: 'Hola' };

const reducer = (state = initialState, action: any) => {
  return state;
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // other store enhancers if any
);
