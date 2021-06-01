import {isNotEmpty, isNotNullOrUndefined} from '../HelperUtil';

const parseServiceLocationsResponse = response => {
  console.log('locations data');
  if (
    isNotNullOrUndefined(response.data) &&
    isNotEmpty(response.data.location_list)
  ) {
    return response.data.location_list;
  } else {
    return [];
  }
};

export default parseServiceLocationsResponse;
