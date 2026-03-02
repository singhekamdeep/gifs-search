import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removedToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item))
    dispatch(removedToast())
  }

  return (
    <div className='w-[17vw] relative h-80 bg-white rounded-xl overflow-hidden'>
      <a 
        href={item.url} 
        target='_blank'
      >

        {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' playsInline autoPlay loop muted src={item.src}></video> : ''}
        {item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}

      </a>
      <div 
        id='bottom' 
        className='flex justify-between gap-3 items-center text-white w-full p-4 absolute bottom-0'
      >

        <h2 className='text-lg h-14 overflow-hidden cursor-default select-none
         font-semibold capitalize'>
          {item.title}
        </h2>

        <button 
          onClick={()=>{
            removeFromCollection(item)
          }}
          className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
        >
          Remove
        </button>

      </div>
    </div>
  )
}

export default CollectionCard