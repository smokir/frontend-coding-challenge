import { combineReducers } from 'redux';

import tournaments from 'reducers/tournaments';

const rootReducer = combineReducers({
  tournaments
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
