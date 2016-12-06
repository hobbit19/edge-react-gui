import * as ACTION from './Username.action'

export const username = (state = '', action) => {
  switch (action.type) {
    case ACTION.CHANGE_USERNAME_VALUE :
      return action.data

    default:
      return state
  }
}
