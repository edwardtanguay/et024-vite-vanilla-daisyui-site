import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<main class="container p-6 mx-auto">
	<header>
		<h1 class="text-3xl text-yellow-600">Info Site</h1>
		${getMenu()}
	</header>
	<main>
		${getCurrentPage()}
	</main>
</main>
`;