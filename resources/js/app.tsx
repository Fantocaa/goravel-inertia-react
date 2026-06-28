import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import '../css/app.css';


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
    return pages[`./Pages/${name}.tsx`] as any;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
