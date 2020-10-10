import { TWEET } from './types'

const initialState = {
  tweet: String,
  saveSuccess: Boolean,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case TWEET.SUCCESS():
      console.log('success!')
      return {
	...state,
	saveSuccess: true,
      }
    case TWEET.FAIL():
      console.log('fail')
      return {
	...state,
	saveSuccess: false,
      }

    default:
      return state
  }
}
