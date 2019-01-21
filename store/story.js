import axios from 'axios'

export const SET_CURRENT_STORY = 'SET_CURRENT_STORY'
export const SET_CURRENT_FRAGMENTS = 'SET_CURRENT_FRAGMENTS'

let initialState = {
  currentStory: {},
  currentFragments: []
}

export const setCurrentStory = story => {
  return {
    type: SET_CURRENT_STORY,
    story
  }
}

export const setCurrentFragments = fragments => {
  return {
    type: SET_CURRENT_FRAGMENTS,
    fragments
  }
}

export const getCurrentStory = () => async dispatch => {
  try {
    const {data} = await axios.get(`http://192.168.1.158:8080/api/story/current`)
    dispatch(setCurrentStory(data))
  } catch (err) {
    console.error(err)
  }
}

export const getCurrentFragments = () => async dispatch => {
  try {
    const {data} = await axios.get(`http://192.168.1.158:8080/api/story/current/fragments`)
    dispatch(setCurrentFragments(data))
  } catch (err) {
    console.error(err)
  }
}

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.story
      }
    case SET_CURRENT_FRAGMENTS:
      return {
        ...state,
        currentFragments: action.fragments
      }
    default:
      return state
  }
}

export default storyReducer
