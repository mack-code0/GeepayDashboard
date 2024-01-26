import styled from "styled-components";

const TableWrapper = styled.div`
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background: none;
    overflow-y: scroll;
    overflow-x: scroll !important;
    &::-webkit-scrollbar {
        display: none;
    }
    
    .table-view {
        width: 100%;
        min-width: 650px;
        thead tr {
            th {
                font-family: "Plus Jakarta Sans";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                height: 50px;
                /* padding: 0 1rem; */
                border: none;
                color: #9CA4AB;
                border-bottom: 1px solid #EDF2F6;
                text-align: left;
            }
        }
        tbody tr {
            td {
                /* min-width: 150px; */
                font-family: Plus Jakarta Text;
                font-weight: normal;
                font-size: 12px;
                color: #434d64;
                height: 72px;
                border-bottom: 1px solid #EDF2F6;
                vertical-align: middle;
                white-space: nowrap;

                span.date{
                    color: #737373;
                    font-family: "Plus Jakarta Sans";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                }

                span.amount{
                    color: #0D062D;
                    font-family: "Plus Jakarta Sans";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 24px;
                }

                span.status{
                    font-family: "Plus Jakarta Sans";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    &.paid{
                        color: #34CAA5;
                    }
                    &.refund{
                        color: #ED544E;
                    }
                }
            }
        }
    }
`

export default TableWrapper