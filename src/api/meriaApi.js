import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export const fetchPhotos = async(query, page=1, per_page=20) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params:{query, page, per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  })
  return response.data
}

export const fetchVideos = async (query, page=1, per_page=15) => {
  const response = await axios.get('https://api.pexels.com/videos/search',{
    params:{query, per_page},
    headers:{Authorization:PEXELS_KEY}
  })
  return response.data
}

export const fetchGIFS = async(query) => {
  const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
    params:{api_key:`${GIPHY_KEY}`,q:`${query}`, limit:20},
  })
  return response.data
}