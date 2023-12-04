import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UnderConstruction from './pages/UnderConstruction'
import './index.css'

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<UnderConstruction />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
