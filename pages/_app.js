import { CursorProvider } from '../context/CursorContext'
import { LoaderProvider } from '../context/LoaderContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LoaderProvider>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
     </LoaderProvider>
      )
}

export default MyApp
