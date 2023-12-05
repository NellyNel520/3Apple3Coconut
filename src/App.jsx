import { Route, Routes } from 'react-router-dom'
import UnderConstruction from './pages/UnderConstruction'
import './index.css'

function App() {
	return (
		<div className="App">
			<main>
				<Routes>
					<Route path="/" element={<UnderConstruction />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
