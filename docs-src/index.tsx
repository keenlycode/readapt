import { useRef, createRoot, React } from './ux/lib/react.bundle.js';
import { useCSS, Readapt } from './ux/lib/readapt.bundle.js';

class Style extends Readapt {};
Style.define('el-style');

function Header() {
  const style = useRef(null);
  useCSS(style, `
  `)
  return (
    <div ref={style}>
      hi
    </div>
  )
}

const container = document.querySelector('#header');
console.log(container);
const root = createRoot(container);
root.render(<Header />);