import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import NavHeader from 'components/Main/NavHeader'
import React, { useState, FunctionComponent } from 'react'

const BackgroundWrap = styled.div<{ theme: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => (theme ? '#1f2023;;' : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  max-width: 1200px;
`

const IndexPage: FunctionComponent = function () {
  const [theme, setTheme] = useState(false)
  const changeTheme = () => {
    setTheme(prev => !prev)
    console.log(theme)
  }
  return (
    <>
      <GlobalStyle />
      <BackgroundWrap theme={theme}>
        <Container>
          <p>블로그이전</p>
        </Container>
      </BackgroundWrap>
    </>
  )
}

export default IndexPage
