export const GET_CODES_REQUEST = 'GET_CODES_REQUEST'
export const GET_CODES_SUCCESS = 'GET_CODES_SUCCESS'
export const GET_CODES_ERROR = 'GET_CODES_ERROR'

function requestGetCodes() {
  return {
    type: GET_CODES_REQUEST,
  }
}

function getCodesSuccess(codes) {
  return {
    type: GET_CODES_SUCCESS,
    payload: {
      codes,
    },
  }
}

function getCodesError(error) {
  return {
    type: GET_CODES_ERROR,
    error,
  }
}

// Actions
export function getCodes() {
  return (dispatch, getState, Api) => {
    dispatch(requestGetCodes())

    return Api.getCodes()
      .then(res => {
        const { data } = res
        dispatch(getCodesSuccess(data))
      })
      .catch(error => {
        dispatch(getCodesError(error))
      })
  }
}

const defaultState = {
  codes: {},
  error: '',
  isFetching: false,
}

const codes = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CODES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GET_CODES_SUCCESS:
      return {
        ...state,
        codes: { ...action.payload.codes },
      }
    case GET_CODES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default codes
