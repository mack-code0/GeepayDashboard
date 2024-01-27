import { Avatar, Col, Dropdown, Input, Row } from "antd";
import Search from "../../assets/images/icons/search.svg?react"
import Calendar from "../../assets/images/icons/calendar.svg?react"
import Bell from "../../assets/images/icons/bell.svg?react"
import ArrowDown from "../../assets/images/icons/arrowdown.svg?react"
import Logo from "../../assets/images/logo.svg?react"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        // Updates the scroll position when the user scrolls
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // The empty dependency array ensures that the effect runs only once on mount


    const classForNavbarInSmallScreen = `${scrollPosition >= 80 && "tw-transition-all tw-fixed lg:tw-relative tw-z-10 tw-right-[0] tw-top-[0] tw-w-full tw-bg-[#FAFAFA]/50 dark:tw-bg-grey600/60 tw-backdrop-blur-sm"}`

    return (<div className={`tw-py-[15px] lg:tw-py-[18px] tw-px-4 lg:tw-px-5 tw-border-b tw-border-grey100 dark:tw-border-grey700/[0.2] ${classForNavbarInSmallScreen}`}>
        <Row gutter={[20, 20]} className="tw-items-center">
            <Col xs={5} lg={14}>
                <Logo className="lg:tw-hidden tw-block" />
                <div className="tw-hidden lg:tw-flex tw-justify-between tw-items-center">
                    <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600] tw-text-lg">Dashboard</h6>
                    <Input
                        classNames={{ input: "dark:placeholder:!tw-text-grey300" }}
                        className="dark:tw-bg-dark200 tw-ml-auto !tw-border-grey200 dark:!tw-border-grey700/[0.2] dark:!tw-text-grey700 tw-rounded-[24px] tw-py-2 tw-w-[300px]"
                        placeholder="Search..."
                        prefix={<Search className="tw-mr-1" />} />
                </div>
            </Col>
            <Col className="tw-flex tw-justify-end" xs={19} lg={10}>
                <div className="tw-flex tw-items-center">
                    <span className="tw-hidden lg:tw-flex tw-items-center tw-text-header dark:tw-text-grey900 tw-font-[650] tw-text-xs">
                        <Calendar className="tw-mr-2" /> November 15, 2023
                    </span>

                    <Dropdown
                        trigger={["click"]}
                        placement="bottomCenter"
                        menu={{
                            className: "dark:!tw-bg-dark200 dark:tw-border dark:tw-border-grey700/[0.2]",
                            items: [
                                {
                                    key: 1,
                                    label: <span className="tw-font-semibold tw-text-[#787486]">Notifications</span>,
                                    className: "dark:!tw-bg-dark200 tw-border-b tw-border-grey100 dark:tw-border-grey700/[0.2]",
                                    disabled: true
                                },
                                {
                                    key: 2,
                                    label: "All",
                                    className: "dark:!tw-text-grey900"
                                },
                                {
                                    key: 3,
                                    label: <span className="dark:!tw-text-grey900">Unread <b className="tw-text-error tw-ml-2">(30)</b></span>,
                                },
                            ]
                        }}
                    >
                        <button className="tw-mr-5 lg:tw-mx-10 tw-p-[10px] tw-rounded-full tw-text-dark300 dark:tw-text-grey900 tw-border tw-border-grey200 dark:tw-border-grey300">
                            <Bell />
                        </button>
                    </Dropdown>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            className: "dark:!tw-bg-dark200 dark:tw-border dark:tw-border-grey700/[0.2]",
                            items: [
                                {
                                    key: 1,
                                    label: "Profile",
                                    className: "dark:!tw-text-grey900"
                                },
                                {
                                    key: 2,
                                    label: "Settings",
                                    className: "dark:!tw-text-grey900"
                                },
                                {
                                    key: 3,
                                    label: "Logout",
                                    className: "!tw-text-error"
                                }
                            ]
                        }}
                    >
                        <button className="lg:tw-ml-auto tw-space-x-3 tw-p-[3px] lg:tw-py-[3px] lg:tw-px-[7px] tw-rounded-full tw-border tw-border-grey200 dark:tw-border-grey300 tw-flex tw-items-center">
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" size={34} />
                            <div className="tw-hidden lg:tw-flex tw-flex-col tw-text-right">
                                <span className="tw-text-header dark:tw-text-grey900 tw-font-[400] tw-text-md">Justin Bergson</span>
                                <span className="tw-text-grey300 tw-font-[400] tw-text-xs">Justin@gmail.com</span>
                            </div>
                            <ArrowDown className="tw-hidden lg:tw-flex tw-text-dark300 dark:tw-text-grey300" />
                        </button>
                    </Dropdown>
                </div>
            </Col>
        </Row>
    </div>);
}

export default Navbar;