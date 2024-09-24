import { createRoot } from 'react-dom/client';
import ManuscriptCount from './features/manuscriptCount';

function App() {
	return (
		<main>
			<ManuscriptCount />
		</main>
	)
}

const domNode = document.getElementById('root')!
const root = createRoot(domNode);
root.render(<App />);
