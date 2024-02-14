import React, { useState, useEffect } from 'react'

import Images from './Images'

const Home = () => {
  // use state
  const [searchTerm, setSearchTerm] = useState('')

  let API_KEY = `5__hOrhuSvuNlKzYw0zWUYLEk7Omf0A93siCEPW7bSA`

  const getImages = async () => {
    console.log(`Searching for images of: ${searchTerm}`)
    if (searchTerm !== '' && searchTerm !== undefined && searchTerm !== null) {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=${pages}&per_page=10&query=${searchTerm}&client_id=${API_KEY}`
        )
        const data = await res.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const [pages, setPages] = useState()
  // change page number
  const changePage = (value) => {
    if (searchTerm !== '' && searchTerm !== undefined && searchTerm !== null) {
      console.log('value before give', value)
      setPages(value)
    }
  }

  // use effect for page check
  useEffect(() => {
    console.log(pages)
    getImages()
  }, [pages])

  return (
    <>
      <div className="fixed h-[40px] w-[100%] top-0 left-0 bg-zinc-700 flex flex-row items-center justify-center text-center gap-8">
        <input
          type="text"
          placeholder="search something..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <button
          onClick={getImages}
          className="w-[150px] h-[30px] rounded-md bg-zinc-400 hover:bg-zinc-500 text-white active:bg-zinc-600 "
        >
          submit
        </button>
      </div>
      <div>
        <Images />
      </div>
      <div className="fixed bottom-0 left-0 w-[100%] h-[30px] bg-zinc-500 flex flex-row text-center items-center justify-center gap-12">
        <button value={1} onClick={(e) => changePage(e.target.value)}>
          1
        </button>
        <button value={2} onClick={(e) => changePage(e.target.value)}>
          2
        </button>
        <button value={3} onClick={(e) => changePage(e.target.value)}>
          3
        </button>
        <button value={4} onClick={(e) => changePage(e.target.value)}>
          4
        </button>
        <button value={5} onClick={(e) => changePage(e.target.value)}>
          5
        </button>
      </div>
    </>
  )
}

export default Home
