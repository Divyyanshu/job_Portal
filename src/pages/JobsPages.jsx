import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { RotateLoader } from 'react-spinners';
const JobsPages = () => {

  const initialState = {
    loading: false,
    data: null,
    error: null
  }
  const reducer = (prevState, action) => {
    if (action.type === 'Loading') {
      return { ...prevState, loading: true }
    } else if (action.type === 'Success') {
      return { ...prevState, loading: false, data: action.payload }
    } else if (action.type === 'Error') {
      return { ...prevState, loading: false, error: action.payload }
    }
  }
  const [currentState, dispatch] = useReducer(reducer, initialState)
  // fetch api using useEffect()
  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'Loading' })
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        dispatch({ type: 'Success', payload: data.data })
      }
      catch (error) {
        dispatch({ type: 'Error', payload: error.message })
      }
    }
    fetchData();
  }, [])

  return (
    <div className='flex justify-center m-auto items-center h-screen text-xl'>/
      {currentState.loading ? (
        <RotateLoader />
      ) : currentState.data ? (
        <p>{JSON.stringify(currentState.data)}</p>
      ) : (
        <p className='text-xl font-bold text-red-500'>{currentState.error}</p>
      )}
    </div>
    // shot circuit method
    // <div className='flex flex-col justify-center items-center h-screen'>
    //   {currentState.loading && (
    //     <RotateLoader />
    //   )}
    //   <p>{JSON.stringify(currentState.data)}</p>
    //   <p>{currentState.error}</p>
    // </div>
  )
}

export default JobsPages
