import {
  CLOSE_ORDER_PLACED_DIALOG_ACTION,
  OPEN_ORDER_PLACED_DIALOG_ACTION,
} from '../actions/constants';

const initialState = false;
const orderPlacedDialog = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ORDER_PLACED_DIALOG_ACTION:
      return true;
    case CLOSE_ORDER_PLACED_DIALOG_ACTION:
      return false;

    default:
      return state;
  }
};

export default orderPlacedDialog;
