import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  { month: 'January', clients: 200 },
  { month: 'February', clients: 350 },
  { month: 'March', clients: 500 },
  { month: 'April', clients: 650 },
  { month: 'May', clients: 800 },
  { month: 'June', clients: 950 },
];

function Clientchart () {
    return (
        <div className="h-72 bg-slate-300 rounded-2xl mx-16 my-8  lg:w-1/2">
            <p className='mt-4 ml-6 text-2xl'>Total clientes</p>
            <ResponsiveBar
            data={data}
            keys={['clients']}
            indexBy="month"
            margin={{ top: 100, right: 100, bottom: 100, left: 110 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'category10' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Meses',
                legendPosition: 'middle',
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Clientes',
                legendPosition: 'middle',
                legendOffset: -40,
                tickValues: [0, 200, 400, 600, 800, 1000],
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                    on: 'hover',
                    style: {
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
)} ;

export default Clientchart
