import React from 'react'
import { ResponsiveLine } from '@nivo/line';

const salesData = [
    {
      id: 'ventas',
      color: 'hsl(210, 70%, 50%)',
      data: [
        { x: 'January', y: 150 },
        { x: 'February', y: 300 },
        { x: 'March', y: 450 },
        { x: 'April', y: 600 },
        { x: 'May', y: 750 },
        { x: 'June', y: 900 },
      ],
    },
  ];

function SalesChart () {
    return (
        <div className="h-72  bg-slate-300 rounded-2xl mr-6 ml-2 my-8  lg:w-1/2">
        <ResponsiveLine
          data={salesData}
          margin={{ top: 90, right: 90, bottom: 110, left: 110 }}
          xScale={{ type: 'band', padding: 0.3 }}
          yScale={{ type: 'linear', min: 0, max: 1000, stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Meses',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Ventas',
            legendOffset: -40,
            legendPosition: 'middle',
            format: value => `${value}`, 
            tickValues: [0, 200, 400, 600, 800, 1000],
          }}
          colors={{ scheme: 'paired' }} 
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    )
}

export default SalesChart
