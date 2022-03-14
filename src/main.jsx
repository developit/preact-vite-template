import { hydrate, LocationProvider } from 'preact-iso';
import { App } from './app';

hydrate(
	<LocationProvider>
		<App />
	</LocationProvider>,
	document.body
);
