import { Avatar, Col, Dropdown, Progress, Row } from "antd";
import { topPlatformData } from "../data/topPlatformData";
import TableWrapper from "../components/dashboard/TableWrapper";
import { lastOrdersData } from "../data/lastOrdersData";
import Invoice from "../assets/images/icons/invoice.svg?react"
import SuccessChart from "../assets/images/icons/successchart.svg?react"
import ArrowDown from "../assets/images/icons/arrowdown.svg?react"
import ErrorChart from "../assets/images/icons/errorchart.svg?react"
import ArrowTrendUp from "../assets/images/icons/arrow-trending-up.svg?react"
import ArrowTrendDown from "../assets/images/icons/arrow-trending-down.svg?react"
import TotalOrder from "../assets/images/icons/totalorder.svg?react"
import AverageSales from "../assets/images/icons/averagesales.svg?react"
import TotalRefund from "../assets/images/icons/totalrefund.svg?react"
import TotalIncome from "../assets/images/icons/totalincome.svg?react"
import Barchart from "../components/dashboard/Barchart";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Dashboard = () => {
    const { activeTheme } = useContext(ThemeContext)

    return (<div className="tw-px-4 tw-py-5 lg:tw-p-5">
        <Row  gutter={[20, 20]}>
            <Col xs={24} lg={14}>
                <div className="tw-p-[16px] tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded-[14px] tw-bg-white dark:tw-bg-dark200 tw-h-full tw-flex tw-flex-col">
                    <div className="tw-flex tw-items-center">
                        <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600]">Sales Trends</h6>

                        <span className="tw-text-header dark:tw-text-grey900 tw-font-[500] tw-text-sm tw-ml-auto tw-mr-2">Sort By:</span>
                        <Dropdown
                            trigger={["click"]}
                            menu={{
                                items: [
                                    {
                                        key: 1,
                                        label: "Daily",
                                    },
                                    {
                                        key: 2,
                                        label: "Yearly",
                                    },
                                    {
                                        key: 3,
                                        label: "Weekly",
                                    }
                                ]
                            }}
                        >
                            <button className="tw-space-x-[2px] tw-p-[3px] lg:tw-py-[3px] tw-pl-[9px] tw-rounded-full tw-border tw-border-grey200 dark:tw-border-grey300 tw-flex tw-items-center">
                                <span className="tw-text-header dark:tw-text-grey900 tw-font-[400] tw-text-xs">Weekly</span>
                                <ArrowDown transform="scale(0.7)" className="tw-text-dark300 dark:tw-text-grey300" />
                            </button>
                        </Dropdown>
                    </div>
                    <div className="tw-mt-3 tw-overflow-scroll hide-scrollbar">
                        <Barchart />
                    </div>
                </div>
            </Col>

            {/*  */}

            <Col xs={24} lg={10}>
                <div className="tw-w-full">
                    <Row gutter={[20, 20]}>
                        <Col xs={24} lg={12}>
                            <div className="tw-space-y-2 tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded-[14px] tw-bg-white dark:tw-bg-dark200 tw-lg:h-[150px] tw-p-[15px]">
                                <div className="tw-flex tw-justify-between">
                                    <TotalOrder />
                                    <SuccessChart />
                                </div>
                                <h3 className="tw-text-[16px] tw-font-[500] tw-text-[#898989]">Total Order</h3>
                                <h2 className="tw-text-2xl tw-font-[650] tw-text-[#3A3F51] dark:tw-text-grey800">350</h2>
                                <div className="tw-flex tw-items-center tw-space-x-2">
                                    <span className="tw-flex tw-items-center tw-text-success tw-text-xs tw-px-3 tw-py-1 tw-rounded-3xl tw-bg-[#34caa51f]">
                                        <ArrowTrendUp className="tw-mr-2" />23.5%
                                    </span>
                                    <span className="tw-text-xs tw-text-[#606060]">vs. previous month</span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} lg={12}>
                            <div className="tw-space-y-2 tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded-[14px] tw-bg-white dark:tw-bg-dark200 tw-lg:h-[150px] tw-p-[15px]">
                                <div className="tw-flex tw-justify-between">
                                    <TotalRefund />
                                    <ErrorChart />
                                </div>
                                <h3 className="tw-text-[16px] tw-font-[500] tw-text-[#898989]">Total Refund</h3>
                                <h2 className="tw-text-2xl tw-font-[650] tw-text-[#3A3F51] dark:tw-text-grey800">270</h2>
                                <div className="tw-flex tw-items-center tw-space-x-2">
                                    <span className="tw-flex tw-items-center tw-text-error tw-text-xs tw-px-3 tw-py-1 tw-rounded-3xl tw-bg-[#ed544e1f]">
                                        <ArrowTrendDown className="tw-mr-2" />23.5%
                                    </span>
                                    <span className="tw-text-xs tw-text-[#606060]">vs. previous month</span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} lg={12}>
                            <div className="tw-space-y-2 tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded-[14px] tw-bg-white dark:tw-bg-dark200 tw-lg:h-[150px] tw-p-[15px]">
                                <div className="tw-flex tw-justify-between">
                                    <AverageSales />
                                    <ErrorChart />
                                </div>
                                <h3 className="tw-text-[16px] tw-font-[500] tw-text-[#898989]">Average Sales</h3>
                                <h2 className="tw-text-2xl tw-font-[650] tw-text-[#3A3F51] dark:tw-text-grey800">1567</h2>
                                <div className="tw-flex tw-items-center tw-space-x-2">
                                    <span className="tw-flex tw-items-center tw-text-error tw-text-xs tw-px-3 tw-py-1 tw-rounded-3xl tw-bg-[#ed544e1f]">
                                        <ArrowTrendDown className="tw-mr-2" />23.5%
                                    </span>
                                    <span className="tw-text-xs tw-text-[#606060]">vs. previous month</span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} lg={12}>
                            <div className="tw-space-y-2 tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-rounded-[14px] tw-bg-white dark:tw-bg-dark200 tw-lg:h-[150px] tw-p-[15px]">
                                <div className="tw-flex tw-justify-between">
                                    <TotalIncome />
                                    <SuccessChart />
                                </div>
                                <h3 className="tw-text-[16px] tw-font-[500] tw-text-[#898989]">Total Income</h3>
                                <h2 className="tw-text-2xl tw-font-[650] tw-text-[#3A3F51] dark:tw-text-grey800">$350.000</h2>
                                <div className="tw-flex tw-items-center tw-space-x-2">
                                    <span className="tw-flex tw-items-center tw-text-success tw-text-xs tw-px-3 tw-py-1 tw-rounded-3xl tw-bg-[#34caa51f]">
                                        <ArrowTrendUp className="tw-mr-2" />23.5%
                                    </span>
                                    <span className="tw-text-xs tw-text-[#606060]">vs. previous month</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

            {/*  */}

            <Col xs={24} lg={14}>
                <div className="tw-p-[16px] tw-rounded-[14px] tw-border tw-border-grey800 dark:tw-border-grey700/[0.2] tw-bg-white dark:tw-bg-dark200 tw-h-[500px]">
                    <div className="tw-flex tw-justify-between">
                        <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600]">Last Orders</h6>
                        <a className="!tw-text-success tw-font-[500]">See All</a>
                    </div>
                    <TableWrapper className="tw-mt-[20px]">
                        <table className="table-view">
                            <thead>
                                <tr>
                                    <th className="dark:!tw-border-grey900/[0.7]">Name</th>
                                    <th className="dark:!tw-border-grey900/[0.7]">Date</th>
                                    <th className="dark:!tw-border-grey900/[0.7]">Amount</th>
                                    <th className="dark:!tw-border-grey900/[0.7]">Status</th>
                                    <th className="dark:!tw-border-grey900/[0.7]">Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lastOrdersData.map((row, idx) =>
                                    <tr key={idx}>
                                        <td className="dark:!tw-border-grey900/[0.5]">
                                            <div className="tw-space-x-3">
                                                <Avatar src={row.image} size={34} />
                                                <span className="tw-text-sm tw-font-normal tw-text-[#0D062D] dark:tw-text-grey800">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="dark:!tw-border-grey900/[0.5]">
                                            <span className="date dark:!tw-text-grey900/[0.7]">{row.date}</span>
                                        </td>
                                        <td className="dark:!tw-border-grey900/[0.5]">
                                            <span className="amount dark:!tw-text-grey900">${row.amount}</span>
                                        </td>
                                        <td className="dark:!tw-border-grey900/[0.5]">
                                            <span className={`status ${row.status.toLowerCase()}`}>{row.status}</span>
                                        </td>
                                        <td className="dark:!tw-border-grey900/[0.5]">
                                            <button className="tw-flex">
                                                <Invoice className="tw-mr-2 tw-text-[#292D32] dark:tw-text-grey800" />
                                                <span className="tw-font-semibold tw-text-[#0D062D] dark:tw-text-grey800">View</span>
                                            </button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </TableWrapper>
                </div>
            </Col>

            {/*  */}

            <Col xs={24} lg={10}>
                <div className="tw-p-[16px] tw-rounded-[8px] tw-bg-white dark:tw-bg-dark200 tw-h-[500px]">
                    <div className="tw-flex tw-justify-between">
                        <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600]">Top Platform</h6>
                        <a className="!tw-text-success tw-font-[500]">See All</a>
                    </div>

                    <div className="tw-mt-[20px]">
                        {topPlatformData.map((obj, idx) =>
                            <div className="tw-mt-5" key={idx}>
                                <h6 className="tw-text-header dark:tw-text-grey900 tw-font-[600]">
                                    {obj.title}
                                </h6>
                                <Progress
                                    percent={obj.percentage}
                                    size={["100%", 15]}
                                    trailColor={activeTheme === "LIGHT" ? "#F5F5F5" : "#1F1E25"}
                                    strokeColor={obj.color}
                                    showInfo={false}
                                />
                                <div className="tw-flex tw-justify-between">
                                    <p className="tw-text-[#525252] dark:tw-text-grey300 tw-font-[400] tw-m-0">${obj.amount}</p>
                                    <p className="tw-text-[#525252] dark:tw-text-grey300 tw-font-[400] tw-m-0">+{obj.percentage}%</p>
                                </div>
                            </div>)}
                    </div>
                </div>
            </Col>
        </Row>
    </div >);
}

export default Dashboard;