// import React from 'react'
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip  } from '@syncfusion/ej2-react-charts';

// import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

// const Stacked = ({ width, height }) => {
//   return (
//     <ChartComponent
//       width={width}
//       height={height}
//       id="stacked-chart"
//       primaryXAxis={stackedPrimaryXAxis}
//       primaryYAxis={stackedPrimaryYAxis}
//       chartArea={{ border: { width: 0 } }} // remove border
//       tooltip={{ enabled: true }} // enable tooltip
//       legendSettings={{ background: 'white' }}

//     >
//       <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />

//       <SeriesCollectionDirective>
//         {/* map over our stacked custom series. The stacked custom series is our data coming from our dummy data. We get the item and the index, and we want to return a SeriesDirective for each of our items. We spread all the properties of the item  */}
//         {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
//       </SeriesCollectionDirective>
//     </ChartComponent>
//   )
// }

// export default Stacked

import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;