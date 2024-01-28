import { Adapter } from  '../lib/adapter.bundle.js';

const css = String.raw;

export class Container extends Adapter {
  static css = css`
    display: block;
    margin: auto;
    max-width: 1000px;
  `;
};