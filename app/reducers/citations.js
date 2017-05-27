function addCitation(state, source, citation) {
  switch (source) {
    case 'book':
      return [
        {
          source,
          ...citation,
        },
        ...state,
      ]
    default:
      return state
  }
}

function citations(state = [], action) {
  if (typeof action.source === 'undefined') {
    return state;
  }

  switch (action.type) {
    case 'ADD_CITATION':
      return addCitation(state, action.source, action.values)
    default:
      return state
  }
}

export default citations
