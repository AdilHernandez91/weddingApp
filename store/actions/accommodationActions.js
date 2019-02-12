import { accommodations } from '../../mockData/accommodations';
import { ActionTypes } from './types';

export const getAccommodations = (cb) => async dispatch => {
  dispatch({ type: ActionTypes.FETCH_ACCOMMODATIONS, payload: accommodations });
  cb(false);
};
