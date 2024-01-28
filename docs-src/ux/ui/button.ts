import { Adapter } from "../lib/adapter.bundle.js";

export class Button extends Adapter {
    static css = `
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: green;
    min-width: 4em;
    min-height: 2em;
    justify-content: center;
    border-radius: 0.5em;
    `
}