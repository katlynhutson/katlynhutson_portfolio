import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import LifeUpdate from './components/LifeUpdate';
import Projects from './components/Projects';
import './style/nav.css';
import './style/home.css';
import './style/projects.css';
import './style/life-update.css';
import './style/about-me.css';

function App() {
	return (
		<div>
			<Nav />

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/life-update' element={<LifeUpdate />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
