import './base.style.js';
import './base.ui.js';

new EventSource('/esbuild').addEventListener('change', () => location.reload())