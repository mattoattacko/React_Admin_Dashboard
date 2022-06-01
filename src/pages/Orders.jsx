import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'


const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title='Orders' />
      
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {/* Orders go in the ColDirective. We get an item and index. For each item, we render an individual ColDirective. We provide a key=index and spread the data.  */}
          {ordersGrid.map((item, index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        {/* we need to use the Inject component to be able to move to the second page */}
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default Orders