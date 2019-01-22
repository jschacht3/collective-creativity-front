import axios from 'axios'

export const SET_CURRENT_STORY = 'SET_CURRENT_STORY'
export const SET_CURRENT_FRAGMENTS = 'SET_CURRENT_FRAGMENTS'
export const ADD_VOTE = 'ADD_VOTE'
export const SUBMIT_PROPOSAL = 'SUBMIT_PROPOSAL'
export const COMPLETED_VOTE = 'COMPLETE_VOTE'
export const SET_STORY_CONTENT = 'SET_STORY_CONTENT'

let initialState = {
  currentStory: {},
  currentFragments: [],
  currentStoryContent: []
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

export const updatedVote = fragment => {
  return {
    type: ADD_VOTE,
    fragment
  }
}

export const submittedProposal = fragment => {
  return {
    type: ADD_VOTE,
    fragment
  }
}

export const setNewStory = story => {
  return {
    type: SET_NEW_STORY,
    story
  }
}

export const completedVote = fragment => {
  return {
    type: COMPLETE_VOTE,
    fragment
  }
}

export const setStoryContent = fragments => {
  return {
    type: SET_STORY_CONTENT,
    fragments
  }
}


export const getCurrentStory = () => async dispatch => {
  try {
    const {data} = await axios.get(`http://172.16.21.13:8080/api/story/current`)
    dispatch(setCurrentStory(data))
  } catch (err) {
    console.error(err)
  }
}

export const getCurrentFragments = () => async dispatch => {
  try {
    const {data} = await axios.get(`http://172.16.21.13:8080/api/story/current/fragments`)
    dispatch(setCurrentFragments(data))
  } catch (err) {
    console.error(err)
  }
}

export const addVote = (id) => async dispatch => {
  try {
    const {data} = await axios.put(`http://172.16.21.13:8080/api/story/current/fragment/${id}`)
    dispatch(updatedVote(data))
  } catch (err) {
    console.error(err)
  }
}

export const submitProposal = (submission) => async dispatch => {
  try {
    const {data} = await axios.post(`http://172.16.21.13:8080/api/story/current/fragment/new`, submission)
    dispatch(submittedProposal(data))
  } catch (err) {
    console.error(err)
  }
}

export const completeVote = (id) => async dispatch => {
  try {
    const {data} = await axios.put(`http://172.16.21.13:8080/api/story/current/vote/complete/${id}`)
    dispatch(submittedProposal(data))
  } catch (err) {
    console.error(err)
  }
}

export const getStoryContent = () => async dispatch => {
  try {
    const {data} = await axios.get(`http://172.16.21.13:8080/api/story/content`)
    dispatch(setStoryContent(data))
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
    case ADD_VOTE:
      return {
        ...state,
        currentFragments: state.currentFragments.map((elem) => {
          if (action.fragment.id === elem.id) return action.fragment
          else return elem
        })
      }
    case SUBMIT_PROPOSAL:
      return {
        ...state,
        currentFragments: [state.currentFragments, ...action.fragment]
      }
    case COMPLETED_VOTE:
      return {
        ...state,
        currentFragments: []
      }
    case SET_STORY_CONTENT:
      return {
        ...state,
        currentStoryContent: action.fragments
      }
    default:
      return state
  }
}

export default storyReducer
