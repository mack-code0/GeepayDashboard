import { Avatar, Col, Dropdown, Input, Row } from "antd";
import Search from "../../assets/images/icons/search.svg?react"
import Calendar from "../../assets/images/icons/calendar.svg?react"
import Bell from "../../assets/images/icons/bell.svg?react"
import ArrowDown from "../../assets/images/icons/arrowdown.svg?react"
import Logo from "../../assets/images/logo.svg?react"

const Navbar = () => {
    return (<div className="tw-py-[18px] tw-px-5 tw-border-b tw-border-grey100 dark:tw-border-grey700/[0.2]">
        <Row gutter={[20, 20]} className="tw-items-center">
            <Col xs={5} lg={14}>
                <Logo className="lg:tw-hidden tw-block" />
                <div className="tw-hidden lg:tw-flex tw-justify-between tw-items-center">
                    <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600] tw-text-lg">Dashboard</h6>
                    <Input
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
                            items: [
                                {
                                    key: 1,
                                    label: <span className="tw-font-semibold tw-text-[#787486]">Notifications</span>,
                                    className: "tw-border-b tw-border-grey100",
                                    disabled: true
                                },
                                {
                                    key: 2,
                                    label: "All",
                                },
                                {
                                    key: 3,
                                    label: <span>Unread <b className="tw-text-error tw-ml-2">(30)</b></span>,
                                },
                            ]
                        }}
                    >
                        <button className="lg:tw-mx-10 tw-p-[10px] tw-rounded-full tw-text-grey200 dark:tw-text-grey900 tw-border tw-border-grey200 dark:tw-border-grey300">
                            <Bell />
                        </button>
                    </Dropdown>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: [
                                {
                                    key: 1,
                                    label: "Profile",
                                },
                                {
                                    key: 2,
                                    label: "Settings",
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