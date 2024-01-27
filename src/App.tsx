import styled, { ThemeProvider } from "styled-components"
import SIZES from "./assets/SIZES"
import Sidebar from "./components/sidebar"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/navbar"
import { createGlobalStyle } from "styled-components"
import { useContext, useEffect } from "react"
import { ThemeContext } from "./context/ThemeContext"
import { notification } from "antd"
import Logo from "./assets/images/logo.svg?react"

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
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    api.open({
      closeIcon: <span className="dark:tw-text-grey100/[0.7]">x</span>,
      icon: null,
      className: "tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded tw-bg-white dark:tw-bg-dark200",
      message: <span className="dark:tw-text-grey100 tw-font-bold tw-flex tw-items-center"><Logo className="tw-mr-2" width={20} /> Notification</span>,
      description: <span className="dark:tw-text-grey100/[0.7] tw-text-[#898989]">
        The Dashboard theme is set to follow your system's theme by default.
        <br />
        You can manually switch between dark and light themes in the dashboard sidebar.
      </span>,
      key,
      onClose: () => api.destroy(key),
      duration: null
    });
  };

  useEffect(() => {
    openNotification()
  }, [])

  return <ThemeProvider
    theme={{
      primaryBg: activeTheme === "DARK" ? "#1F1E25" : "#FAFAFA"
    }}>
    <Styles className="tw-flex">
      <GlobalStyle />
      {contextHolder}
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
