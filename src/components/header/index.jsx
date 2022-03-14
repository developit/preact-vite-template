import style from './style.module.css';
import { useLocation } from 'preact-iso';

export function Header() {
	return (
		<header class={style.header}>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/profile">My Profile</Link>
			<Link href="/profile/alice">Alice's Profile</Link>
		</header>
	);
}

function Link(props) {
	const { path } = useLocation();
	props.current = (props.path || props.href) === path;
	return <a {...props} />;
}
