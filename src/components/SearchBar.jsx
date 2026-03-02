import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(search))
    setSearch('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-5 py-10 px-10'>

        <input 
          required
          className='w-full border-2 px-4 py-2 text-xl rounded-md outline-none'
          type="text" 
          placeholder='Search Anything' 
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
        />

        <button 
          className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded-md outline-none' 
        >
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar