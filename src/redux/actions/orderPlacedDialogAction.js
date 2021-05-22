import {
  CLOSE_ORDER_PLACED_DIALOG_ACTION,
  OPEN_ORDER_PLACED_DIALOG_ACTION,
} from './constants';

export const openOrderPlacedDialogAction = () => {
  return {
    type: OPEN_ORDER_PLACED_DIALOG_ACTION,
    payload: null,
  };
};

export const closeOrderPlacedDialogAction = () => {
  return {
    type: CLOSE_ORDER_PLACED_DIALOG_ACTION,
    payload: null,
  };
};
