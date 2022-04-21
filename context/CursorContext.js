import { createContext, useState } from "react";

const CursorContext = createContext()

const CursorProvider = ({ children }) => {
  const [grow, setGrow] = useState(false)

  const handleMouseEnter = () => {
    setGrow(true)
  }

  const handleMouseLeaving = () => {
    setGrow(false)
  }

  const data = {
    grow,
    handleMouseEnter,
    handleMouseLeaving
  }

  return (
    <CursorContext.Provider value={data}>
      {children}
    </CursorContext.Provider>
  )
}

export { CursorProvider };
export default CursorContext;