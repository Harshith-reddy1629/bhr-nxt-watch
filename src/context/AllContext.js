import {createContext} from 'react'

const AllContext = createContext({
  lightTheme: '',
  SavedVideosList: [],
  changeTheme: () => {},
  saveItem: () => {},
  unsaveItem: () => {},
})

export default AllContext
