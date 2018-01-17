import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

class FilterDate extends React.Component {
  render() {
    const { data } = this.props
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="schoolName" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="start" stackId="a" fill="#8884d8" />
        <Bar dataKey="stop" stackId="a" fill="#82ca9d" />
      </BarChart>
    )
  }
}

export default FilterDate
