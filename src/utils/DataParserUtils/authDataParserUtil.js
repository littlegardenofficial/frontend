import ServiceFactory from "../../config/ServiceFactory"
import { isNotNullOrUndefined } from '../HelperUtil';

export const parseRegisterRequestData = (requestPayload) => {
  return ServiceFactory.registerRequest(requestPayload)
}

export const parseForgotPasswordData = (requestPayload) => {
  return ServiceFactory.sendForgotPasswordRequest(requestPayload);
}

export const parseVerifyForgotPasswordData = (requestPayload) => {
  return ServiceFactory.sendVerifyForgotPasswordReq(requestPayload);
}

export const parseForgotChangePasswordData = (requestPayload, authToken) => {
  return ServiceFactory.sendForgotChangePassReq(requestPayload, authToken)
}

export const parseLoginRequest = response => {
  let parsedUserData = null;
  if (isNotNullOrUndefined(response.data)) {
    let userDataResponse = response.data;
    parsedUserData = {
      userId: userDataResponse.id,
      userName: userDataResponse.user_name,
      firstName: userDataResponse.first_name,
      lastName: userDataResponse.last_name,
      // profileImage: {uri: userDataResponse.image_url},
      profileImage: { uri: 'https://dailyish.s3.ap-south-1.amazonaws.com/aws/category/dryfruits.jpeg' },
      email: userDataResponse.user_name,
      mobileNo: userDataResponse.mobile_no,
      address: []
    }
    return parsedUserData;
  } else {
    return parsedUserData;
  }
};

// response sample below 

// created_at: "2021-06-09T17:15:19.320Z"
// default_billing_address: 0
// default_shipping_address: 0
// dob: null
// first_name: "Mritunjay"
// group_id: 0
// id: 23
// image_url: "https://dailyish.s3.ap-south-1.amazonaws.com/aws/customer/default.jpg"
// is_active: true
// is_confirmed: true
// is_mobile_verify: false
// is_subscribed: false
// is_verify_email: false
// jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsIm1vYmlsZV9ubyI6Ijk1MTc0MTUyNDEiLCJ0b2tlbl90eXBlIjoiY3VzdG9tZXIiLCJ1c2VyX25hbWUiOiJuZXdjb25jZXB0aW9uQGdtYWlsLmNvbSIsImlhdCI6MTYyMzI2MjU1MywiZXhwIjoxNjI0NDcyMTUzfQ.beEa-vpI-rtsEF0k47e-NK3UePhk4WVi7Vp9D6Rw7F8"
// last_name: "Yadav"
// location_coordinates: (2) [0, 0]
// mobile_no: "9517415241"
// social_id: "0"
// updated_at: "2021-06-09T17:15:19.320Z"
// user_name: "newconception@gmail.com"