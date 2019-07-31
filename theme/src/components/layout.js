import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout } from "theme-ui"
import Home from "./home";
import '../style.css';

const Layout = ({ children }) => {

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
		<Home/>
    </StyledLayout>
  )
}

export default Layout
