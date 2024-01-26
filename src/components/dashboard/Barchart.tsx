import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    ResponsiveContainer,
} from "recharts";
import { salesTrends } from "../../data/salesTrends";


const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="tw-bg-[#090C2C] dark:tw-bg-dark100 tw-px-4 tw-py-1 tw-rounded-lg">
                <p className="tw-text-white">{`$${payload[0].value}.00`}</p>
            </div>
        );
    }

    return null;
};

const formatYAxisLabel = (value: number) => {
    // Format the Y-axis label here (e.g., rounding to two decimal places)
    return value.toFixed(2);
};

export default function Barchart() {
    const [focusBar, setFocusBar] = useState<number | null>(null);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={salesTrends}
                onMouseMove={(state: any) => {
                    if (state.isTooltipActive) {
                        setFocusBar(state.activeTooltipIndex);
                    } else {
                        setFocusBar(null);
                    }
                }}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 8,
                }}
            >
                <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#34CAA5" />
                        <stop offset="1" stopColor="rgba(52, 202, 164, 0.062)" />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    tickLine={false}
                    tick={{ fontWeight: "600", fill: "#787486", fontSize: "14px", dy: 10, dx: -10 }}
                    axisLine={false} dataKey="name" />
                <YAxis
                    tickFormatter={formatYAxisLabel}
                    tickLine={false} tick={{ fontWeight: "600", fill: "#787486", fontSize: "13px" }}
                    axisLine={false} />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "transparent" }}
                />
                <Bar dataKey="value" radius={[20, 20, 0, 0]}>
                    {salesTrends.map((_, index) => (
                        <Cell
                            width={25}
                            key={`cell-${index}`}
                            fill={focusBar === index ? "url(#gradient1)" : "rgba(52, 202, 165, 0.10)"}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
