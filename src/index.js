import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Logic from './Logic';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Logic />
  </StrictMode>
);
