import {
  FETCH_SERVICE_LOCATIONS_ACTION,
  SERVICE_LOCATIONS_RECEIVED,
} from './constants';

export const fetchServiceLocations = () => {
  return {
    type: FETCH_SERVICE_LOCATIONS_ACTION,
    payload: null,
  };
};

export const serviceLocationsReceived = data => {
  return {
    type: SERVICE_LOCATIONS_RECEIVED,
    payload: data,
  };
};
