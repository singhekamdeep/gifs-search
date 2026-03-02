import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

  const tabs = ['photos', 'videos', 'gif']

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-10 p-10'>
      {tabs.map((tab, idx)=>{
        return( 
          <button 
          key={idx} 
          className={`${(activeTab == tab ? 'bg-blue-700' : 'bg-emerald-400')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
          onClick={()=>{
            dispatch(setActiveTab(tab))
          }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs