import '../styles/globals.css'
import '../components/style/header.css'
import 'remixicon/fonts/remixicon.css'
import '../components/style/list_element.css'
import '../components/style/footer.css'
import '../components/style/bodylist.css'
import '../components/style/responsive.css'
import { ThemeProvider } from 'next-themes';



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
