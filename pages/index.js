import Domainsearch from '../components/Domainsearch'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return <>
    <Header/>
    <Domainsearch/>
    <Pricing/>
    <Testimonial/>
    <Services/>
    <Footer/>
  </>
}
