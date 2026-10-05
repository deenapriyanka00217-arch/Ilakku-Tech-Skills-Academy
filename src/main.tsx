// Ensure window.fetch has both getter and setter so that any extension or proxy assignment does not throw
if (typeof window !== 'undefined') {
  try {
    let _nativeFetch = window.fetch ? window.fetch.bind(window) : undefined;
    Object.defineProperty(window, 'fetch', {
      get() {
        return _nativeFetch;
      },
      set(fn) {
        _nativeFetch = fn;
      },
      configurable: true,
      enumerable: true
    });
  } catch (_) {}
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
