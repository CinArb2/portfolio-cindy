import { createContext, useState } from "react";

const CursorContext = createContext()

const CursorProvider = ({ children }) => {
  const [grow, setGrow] = useState(false)
  const [light, setLight] = useState(false)

  const handleMouseEnter = () => {
    setGrow(true)
  }

  const handleMouseLeaving = () => {
    setGrow(false)
  }

  const handleLightCoursor = () => {
    setLight(true)
  }

  const handleDarkCoursor = () => {
     setLight(false)
  }

  const data = {
    grow,
    light,
    handleMouseEnter,
    handleMouseLeaving,
    handleLightCoursor,
    handleDarkCoursor
  }

  return (
    <CursorContext.Provider value={data}>
      {children}
    </CursorContext.Provider>
  )
}

export { CursorProvider };
export default CursorContext;