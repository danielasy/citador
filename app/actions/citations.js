import { submit } from 'redux-form'

export function submitForm(formName) {
  return submit(formName)
}

export function addCitation(source, values) {
  return {
    type: 'ADD_CITATION',
    source,
    values,
  }
}
