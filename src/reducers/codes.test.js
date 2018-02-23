import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as codes from './codes'
import expect from 'expect'
import Api from 'api/api-service'

const middlewares = [thunk.withExtraArgument(Api)]
const mockStore = configureMockStore(middlewares)

describe('codes actions', () => {
  describe('getCodes', () => {
    const response = {
      chapter: [],
      heading: [],
      subheading: [],
    }

    beforeEach(function() {
      Api.getCodes = jest.fn(() => Promise.resolve({ data: response }))
    })

    it('creates GET_CODES_REQUEST and GET_CODES_SUCCESS when request has succeeded', async () => {
      const expectedActions = [
        { type: codes.GET_CODES_REQUEST },
        { type: codes.GET_CODES_SUCCESS, payload: { codes: { ...response } } },
      ]
      const store = mockStore()

      await store.dispatch(codes.getCodes())
      expect(store.getActions()).toEqual(expectedActions)
    })

    describe('when fails', () => {
      const error = { message: 'Some random error' }

      beforeEach(function() {
        Api.getCodes = jest.fn(() => Promise.reject(error))
      })

      it('creates GET_CODES_REQUEST and GET_CODES_ERROR when request fails', async () => {
        const expectedActions = [
          { type: codes.GET_CODES_REQUEST },
          { type: codes.GET_CODES_ERROR, error },
        ]
        const store = mockStore()
        await store.dispatch(codes.getCodes())
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})

describe('codes reducers', () => {
  it('should return the initial state', () => {
    expect(codes.default(undefined, {})).toEqual({
      codes: {},
      error: '',
      isFetching: false,
    })
  })

  it('should handle GET_CODES_REQUEST', () => {
    expect(
      codes.default(
        {},
        {
          type: codes.GET_CODES_REQUEST,
        }
      )
    ).toEqual({
      isFetching: true,
    })
  })

  it('should handle GET_CODES_SUCCESS', () => {
    const codesResponse = {
      chapter: [],
      heading: [],
      subheading: [],
    }

    expect(
      codes.default(
        {},
        {
          type: codes.GET_CODES_SUCCESS,
          payload: { codes: { ...codesResponse } },
        }
      )
    ).toEqual({
      codes: { ...codesResponse },
    })
  })

  it('should handle GET_CODES_ERROR', () => {
    const error = { message: 'Some random error' }

    expect(
      codes.default(
        {},
        {
          type: codes.GET_CODES_ERROR,
          error,
        }
      )
    ).toEqual({
      isFetching: false,
      error,
    })
  })
})
