import { Route, Routes } from 'react-router-dom'
import UnderConstruction from './pages/UnderConstruction'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Schedule from './pages/Schedule'
import Specials from './pages/Specials'
import ContactUs from './pages/ContactUs'
import './index.css'

function App() {
	return (
		<div className="App">
			<main>
				<Routes>
					<Route path="/" element={<UnderConstruction />} />
					<Route path="/home" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/catering" element={<Catering />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/specials" element={<Specials />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
