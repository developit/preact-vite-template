import './style.css';
import { useState, useEffect } from 'preact/hooks';

export default function About() {
	const [time, setTime] = useState(new Date());

	// after the first render, start a timer to update the current time:
	useEffect(() => {
		let timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// stop the timer when the component is unmounted:
		return () => clearTimeout(timer);
	}, []);

	return (
		<main class="about">
			<h1>About</h1>
			<time>{time.toString()}</time>
		</main>
	);
}
