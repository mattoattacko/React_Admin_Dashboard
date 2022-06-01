import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title='Customers' />
    
    <GridComponent  
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      width='auto'
      editSettings={{ allowEditing: true, allowDeleting: true }}
    >
      <ColumnsDirective>
        {/* Orders go in the ColDirective. We get an item and index. For each item, we render an individual ColDirective. We provide a key=index and spread the data.  */}
        {customersGrid.map((item, index) =>(
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>

      {/* we need to use the Inject component to be able to move to the second page */}
      <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter ]} />
    </GridComponent>
  </div>
  )
}

export default Customers