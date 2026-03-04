import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import HoursSection from './components/HoursSection'
import Footer from './components/Footer'
import StarField from './components/StarField'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: '#04001a' }}>
      <StarField />
      <Navbar />
      <Hero />
      <Categories />
      <HoursSection />
      <Footer />
    </main>
  )
}