//Async Actions types
export const API_CALL_REQUEST = "API_CALL_REQUEST"; // Eatche saga listen
export const API_CALL_SUCCESS = "API_CALL_SUCCESS"; // dispached by worker saga
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export const login = (email, password) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE,
    },
  };
};

/**
 * Generic http request Accion dispatcher
 * @param {string} method of request
 * @param {string} url endpoint
 * @param {object} data
 * @returns
 */

export const httpRequest = (method, url, data) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method,
        url,
        data,
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE,
    },
  };
};
