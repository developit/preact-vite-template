import { lazy, Router } from 'preact-iso';
import { Header } from './components/header';
// Statically-imported routes are loaded with your main bundle:
import { Home } from './routes/home';
// ... whereas dynamically imported routes are loaded on-demand:
const About = lazy(() => import('./routes/about'));
const Profile = lazy(() => import('./routes/profile'));

export function App() {
	return (
		<div class="app">
			<Header />
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Profile path="/profile/:user?" />
			</Router>
		</div>
	);
}
