import { baseStyle } from './_base.style.js';
import { defineUI } from './_base.ui.js';

new EventSource('/esbuild').addEventListener('change', () => location.reload())

baseStyle('./');
defineUI();