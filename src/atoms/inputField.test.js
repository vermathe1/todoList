import React from 'react'
import renderer from 'react-test-renderer'
import InputField from './InputField.js'

describe('<InputField />', () => {
  it(' matches the snapshop', () => {
    const tree = renderer.create(<InputField />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})