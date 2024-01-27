import styled from "styled-components"
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"
import { useContext, useState } from "react"
import SIZES from "../../assets/SIZES"
import Logo from "../../assets/images/logo.svg?react"
import Category from "../../assets/images/icons/category.svg?react"
import TrendUp from "../../assets/images/icons/trend-up.svg?react"
import Box from "../../assets/images/icons/box.svg?react"
import Users from "../../assets/images/icons/profile-2user.svg?react"
import Discount from "../../assets/images/icons/discount-shape.svg?react"
import Info from "../../assets/images/icons/info-circle.svg?react"
import Bright from "../../assets/images/icons/brightness.svg?react"
import Moon from "../../assets/images/icons/moon.svg?react"
import Setting from "../../assets/images/icons/setting-2.svg?react"
import Enter from "../../assets/images/icons/broken-arrow.svg?react"
import Logout from "../../assets/images/icons/logout.svg?react"
import { ThemeContext } from "../../context/ThemeContext"


const TabButtonWrapper: React.FC<{
    isActive: boolean
    children: React.ReactElement
    onClick: any
}> = ({ isActive, onClick, children }) => {
    return <button onClick={onClick}
        className={`${isActive ? "active !tw-text-[#0D062D] dark:after:!tw-bg-success dark:!tw-text-success" : "!tw-text-grey700"} link-btn`}>
        {children}
    </button>
}

export default function SideBar() {
    const { activeTheme, setActiveTheme } = useContext(ThemeContext)

    const [activeTab, setActiveTab] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const tabHandler = (tab: string) => {
        setActiveTab(tab)
    }

    return <Styles className={`${!sidebarOpen && "close-sidebar"} dark:tw-bg-dark100 tw-bg-grey400 tw-border-r tw-border-grey500 dark:tw-border-0 !tw-z-20`}>
        <div className="top-section tw-flex tw-flex-col tw-py-5 tw-items-center">
            <div>
                <Logo />
            </div>
            <div className="links-section tw-pt-10 tw-w-full tw-flex tw-flex-col tw-items-center">
                <TabButtonWrapper
                    onClick={() => tabHandler("Dashboard")}
                    isActive={activeTab === "Dashboard"}
                >
                    <Category className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("TrendUp")}
                    isActive={activeTab === "TrendUp"}
                >
                    <TrendUp className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Users")}
                    isActive={activeTab === "Users"}
                >
                    <Users className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Box")}
                    isActive={activeTab === "Box"}
                >
                    <Box className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Discount")}
                    isActive={activeTab === "Discount"}
                >
                    <Discount className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Info")}
                    isActive={activeTab === "Info"}
                >
                    <Info className="icon" />
                </TabButtonWrapper>

                <button className="tw-mb-[150px] tw-rounded-[40px] tw-space-y-8 tw-p-2 tw-flex tw-flex-col tw-items-center tw-bg-white dark:tw-bg-grey600">
                    <div
                        onClick={() => setActiveTheme("LIGHT")}
                        className={`tw-text-grey700 tw-p-1 ${activeTheme === "LIGHT" && 'tw-bg-success !tw-text-white tw-rounded-full'}`}>
                        <Bright />
                    </div>
                    <div
                        onClick={() => setActiveTheme("DARK")}
                        className={`tw-text-grey700 tw-p-1 ${activeTheme === "DARK" && 'tw-bg-success !tw-text-white tw-rounded-full'}`}>
                        <Moon />
                    </div>
                </button>

                <TabButtonWrapper
                    onClick={() => tabHandler("Enter")}
                    isActive={activeTab === "Enter"}
                >
                    <Enter className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Setting")}
                    isActive={activeTab === "Setting"}
                >
                    <Setting className="icon" />
                </TabButtonWrapper>

                <TabButtonWrapper
                    onClick={() => tabHandler("Logout")}
                    isActive={activeTab === "Logout"}
                >
                    <Logout className="icon" />
                </TabButtonWrapper>
            </div>
        </div>

        <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="control">
            {sidebarOpen
                ? <DoubleLeftOutlined />
                : <DoubleRightOutlined />}
        </button>
    </Styles>
}

const Styles = styled.div`
    width: ${SIZES.sidebarWidth}px;
    height: 100vh;
    position: fixed;
    z-index: 1;
    transition: all 0.2s;
    margin-left: 0;

    .control{
        all: unset;
        cursor: pointer;
        padding: 17.4233px 17.4809px;
        background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
        box-shadow: inset 8.74047px 9.71163px 18.4521px rgba(61, 73, 100, 0.3);
        border-top-right-radius: 13.5963px;
        border-bottom-right-radius: 13.5963px;
        color: #fff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5386px;
        display: none;
        margin-left: ${SIZES.sidebarWidth}px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        transition: all 0.2s;
    }

    @media only screen and (max-width: 992px) {
        box-shadow: 42px -84px 83px 20px rgba(0, 0, 0, 0.034);
        .control{
            display: flex;
            align-items: center;
        }
        &.close-sidebar{
            box-shadow: none;
            margin-left: -${SIZES.sidebarWidth}px;
            width: 0;
        }
    }

    .top-section{
        height: 100vh;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;
        }

        .links-section{
            .link-btn{
                all: unset;
                cursor: pointer;
                align-items: center;
                transition: all 0.2s;
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 50px;

                &.active{
                    &::after{
                        content: "";
                        width: 4px;
                        height: 100%;
                        position: absolute;
                        right: -1px;
                        top: 50%;
                        transform: translateY(-50%);
                        background: #0D062D;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border: none;
                        outline: none;
                    }
                }
            }
        }
    }
`