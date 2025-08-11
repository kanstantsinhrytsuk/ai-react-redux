import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure the import path is correct

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');
const root = createRoot(container);
root.render(<App />);
