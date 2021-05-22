import {START_LOADING_ACTION, STOP_LOADING_ACTION} from './constants';

export const startLoadingAction = () => {
  return {
    type: START_LOADING_ACTION,
    payload: null,
  };
};

export const stopLoadingAction = () => {
  return {
    type: STOP_LOADING_ACTION,
    payload: null,
  };
};
