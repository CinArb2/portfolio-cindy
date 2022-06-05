import { createContext, useState } from "react";

const LoaderContext = createContext()

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const data = {loading, setLoading }

  return (
    <LoaderContext.Provider value={data}>
      {children}
    </LoaderContext.Provider>
  )
}

export { LoaderProvider };
export default LoaderContext;