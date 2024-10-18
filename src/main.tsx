import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import WebApp from '@twa-dev/sdk';
import eruda from 'eruda'

eruda.init();

WebApp.ready();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
