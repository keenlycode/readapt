import React, {
  useRef,
  useState,
} from "react";
import { createRoot } from "react-dom/client";

// import { Adapter } from "@devcapsule/adapter/src/export";
import { Readapt, useCSS } from "readapt/src/readapt";

class Style extends Readapt {};
Style.define('el-style');

function Button() {
  const [count, setCount] = useState(0);
  const style = useRef(null);

  useCSS(style, `
    button {
      cursor: pointer;
      min-width: 4em;
      min-height: 2em;
      padding: 0.5rem;
      ${count % 2 === 0 ? 'background-color: red;' : 'background-color: orange;'};
      ${count % 2 === 0 ? 'color: white;' : 'color: black;'};
      border-radius: 5px;
      font-size: 2em;
    };
  `);

  function buttonClick(event) {
    setCount(count + 1);
  }

  return (
    <el-style ref={style}>
      <button onClick={ (event) => {buttonClick(event)} }>{count}</button>
    </el-style>
  );
}

export default function Content() {
  const name = 'React';
  const style = useRef(null);

  useCSS(style, `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 5px solid;
    h1 {
      width: 100%;
      text-align: center;
    }
  `, { onStates: [] });

  return (
    <el-style ref={style}>
        <h1>Hello {name} World !</h1>
    </el-style>
  );
}

const content = createRoot(document.querySelector("el-content"));
content.render(<Content />);
