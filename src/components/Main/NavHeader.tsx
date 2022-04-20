import styled from "@emotion/styled";

import React, { useState, FunctionComponent } from "react";

interface themeProps {
  theme: boolean
}

const Title = styled.p<{theme: boolean}>`
  font-size: 50px;
  font-weight: bold;
  color: ${({theme}) => theme ? '#fff;' : '#000000' };
  padding: 30px 0;
`

const NavHeader: FunctionComponent<themeProps> = function ({theme}) {
  
  return (
    <>
    <Title theme={theme}>
      WooSung Blog
    </Title>
      
    </>
  )
}

export default NavHeader