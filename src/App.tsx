import styled, { ThemeProvider } from "styled-components"
import SIZES from "./assets/SIZES"
import Sidebar from "./components/sidebar"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/navbar"
import { createGlobalStyle } from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.primaryBg};
  }

  .hide-scrollbar{
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
  }
`;

function App() {
  const { activeTheme } = useContext(ThemeContext)

  return <ThemeProvider
    theme={{
      primaryBg: activeTheme === "DARK" ? "#1F1E25" : "#FAFAFA"
    }}>
    <Styles className="tw-flex">
      <GlobalStyle />
      <Sidebar />
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </Styles>
  </ThemeProvider>
}

const Styles = styled.div`
    overflow-x: hidden;
    .main{
        width: 100vw;
        margin-left: ${SIZES.sidebarWidth}px;
        @media only screen and (max-width: 992px) {
            margin-left: 0 !important;
        }
    }
`

export default App
