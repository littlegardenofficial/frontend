import {SELECT_ADDRESS_FOR_DELIVERY_ACTION} from './constants';

export const selectAddressForDeliveryAction = addressId => {
  return {
    type: SELECT_ADDRESS_FOR_DELIVERY_ACTION,
    payload: addressId,
  };
};
