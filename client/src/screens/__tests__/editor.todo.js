import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})

test('calls onSubmit with the username and password when submitted', () => {
  const container = document.createElement('div')
  const fakeUser = {id: 'foobar'}
  const fakeHistory = {
    push: jest.fn(),
  }
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  const form = container.querySelector('form')
  const {title, content, tags} = form.elements
  title.value = 'I like twix'
  content.value = 'Kinda a lot'
  tags.value = 'chocolate,    snacks   ,treats'

  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  // expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  // Arrange
  // create a fake user, post, history, and api
  //
  // use ReactDOM.render() to render the editor to a div
  //
  // fill out form elements with your fake post
  //
  // Act
  // submit form
  //
  // wait for promise to settle
  //
  // Assert
  // ensure the create function was called with the right data
})

// TODO later...
test('snapshot', () => {})
