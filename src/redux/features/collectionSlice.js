import { createSlice } from "@reduxjs/toolkit"
import { toast, Zoom } from 'react-toastify'

const initialState = {
  items:JSON.parse(localStorage.getItem('collection')) || [] //old data

}

const collectionSlice = createSlice({
  name:'collection',
  initialState,
  reducers:{
    addCollection:(state, action)=>{
      const alreadyExists = state.items.find(item=>item.id === action.payload.id)

      if(!alreadyExists){
        state.items.push(action.payload)
        localStorage.setItem('collection', JSON.stringify(state.items))
      }
    },

    removeCollection:(state, action)=>{
      state.items = state.items.filter(item=>item.id !== action.payload.id)
      localStorage.setItem('collection', JSON.stringify(state.items))
    },
    
    clearCollection:(state, action)=>{
      state.items = []
      localStorage.setItem('collection', JSON.stringify(state.items))
    },

    addedToast:()=>{
      toast.success('Added to Collection ✅', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        // progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    removedToast:()=>{
      toast.success('Removed from Collection ‼', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        // progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  }
})

export const {
  addCollection, 
  removeCollection, 
  clearCollection,
  addedToast,
  removedToast
} = collectionSlice.actions

export default collectionSlice.reducer