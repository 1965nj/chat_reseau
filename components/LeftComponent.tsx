import React from 'react'
import HistoryComponent from './HistoryComponent'
import SearchComponent from './SearchComponent'

function LeftComponent() {
  return (
    <div className='ml-6'>
      <div>
        <SearchComponent/>
      </div>
      <div>
        <HistoryComponent/>
      </div>
    </div>
  )
}

export default LeftComponent