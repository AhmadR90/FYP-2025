import React from 'react'
import ImageGetter from '../Components/ImageGetter'
import DualImageGetter from '../Components/ImageGetter'
import HistoryTracker from '../Components/History'
import SimpleCheckDisplay from '../Components/History'

const Service = () => {
  return (
    <div>
      <DualImageGetter/>
      <SimpleCheckDisplay/>
    </div>
  )
}

export default Service
