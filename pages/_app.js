import { CursorProvider } from '../context/CursorContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>)
}

export default MyApp
