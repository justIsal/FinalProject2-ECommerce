import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'


const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route/>
      </Switch>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`

export default Main
