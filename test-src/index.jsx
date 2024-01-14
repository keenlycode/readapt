import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { Readapt, useCSS } from "readapt/src/readapt";

class Style extends Readapt {};
Style.define('el-style');

export default function Content() {
  const name = 'Readapt';
  const style = useRef(null);

  useCSS(style, `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 5px solid blue;
    h1 {
      width: 100%;
      text-align: center;
    }
  `, { onStates: [] });

  return (
    <el-style ref={style}>
        <h1>Hello {name} 🌈 !</h1>
        <el-style css="
            display: flex;
            justify-content: center;
            width: 100%;
            h2 {
              color: blue;
            }">
          <h2>React Adaptive Style for Fun</h2>
        </el-style>
    </el-style>
  );
}

const content = createRoot(document.querySelector("el-content"));
content.render(<Content />);
