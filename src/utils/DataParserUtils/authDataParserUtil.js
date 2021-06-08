import ServiceFactory from "../../config/ServiceFactory"

export const parseRegisterRequestData = (requestPayload) => {
  return ServiceFactory.registerRequest(requestPayload)
}

export const parseLoginRequest = (data) => {
  
}