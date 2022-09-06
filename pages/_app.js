import '../styles/globals.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Container } from '@mui/system';



function MyApp({ Component, pageProps }) {
  return(
    <Container style={{backgroundColor: '#fff'}}>
    <ResponsiveAppBar/>
    <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
