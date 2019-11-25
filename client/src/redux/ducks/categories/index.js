import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATEGORIES = "rl/GET_CATEGORIES"

const initialState = {
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
const getCats = () => {
  return dispatch => {
    axios.get("/categories").then(resp => {
      dispatch({
        type: GET_CATEGORIES,
        payload: resp.data
      })
      console.log(resp.data)
    })
  }
}

export function useCats() {
  const categories = useSelector(appState => appState.categoryState.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  return { categories }
}
