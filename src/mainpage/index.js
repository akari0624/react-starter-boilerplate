import React from 'react'
import Styled from 'styled-components'


const MiddleDiv = Styled.div`
  text-align:center;
`

export default(props) => {

  return (
    <MiddleDiv>
      <h3>Greeting from React + bundle in webpack</h3>
    </MiddleDiv>
  )



}
