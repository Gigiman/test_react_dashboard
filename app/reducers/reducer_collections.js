import { FETCH_COLLECTIONS } from '../actions/index';

const INITIAL_STATE = { all: [], collection: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
};
