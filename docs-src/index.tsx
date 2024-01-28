import { useRef, React } from './ux/lib/react.bundle.js';
import { useCSS } from './ux/lib/readapt.bundle.js';

export function Header() {
  const style = useRef(null);
  useCSS(style, `
  `)
  return (
    <div ref="style">
      hi
    </div>
  )
}

