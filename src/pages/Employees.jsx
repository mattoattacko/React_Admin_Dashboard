import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'


const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title='Employees' />
      
      <GridComponent  
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {/* Orders go in the ColDirective. We get an item and index. For each item, we render an individual ColDirective. We provide a key=index and spread the data.  */}
          {employeesGrid.map((item, index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        {/* we need to use the Inject component to be able to move to the second page */}
        <Inject services={[ Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees