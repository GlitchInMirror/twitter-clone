import { TWEET } from './types'

export const saveTweet = (tweet) => {
  // Constant response just to know if it works correctly. Remove when the API call is implemented
  const response = false
  return dispatch => {
    dispatch({
      type: response
	? TWEET.SUCCESS()
	:TWEET.FAIL()
    })
  }
}
