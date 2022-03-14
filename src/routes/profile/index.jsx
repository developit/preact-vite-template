import { useRoute } from 'preact-iso';
import styles from './style.module.css';

export default function Profile({ user = 'me' }) {
	const route = useRoute();
	console.log(route.params, route.query);

	const name = user[0].toUpperCase() + user.slice(1);

	return (
		<main class={styles.profile}>
			<h1 class={styles.title}>{user == 'me' ? 'My' : `${name}'s`} Profile</h1>
			<p>This is a page all about {name}.</p>
		</main>
	);
}
