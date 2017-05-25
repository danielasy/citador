function citations(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state
    }
  }

  return state;
}

export default citations
