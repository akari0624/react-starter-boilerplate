import { renderComponent , expect } from '../test_helper'
import IndexPage from '../../src/IndexRouter'

describe('Index should appear' , () => {
  let component

  beforeEach(() => {
    component = renderComponent(IndexPage)
  })

  it('renders something', () => {
    expect(component).to.exist
  })
})
