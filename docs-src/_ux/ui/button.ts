import { Adapter } from "@devcapsule/adapter";

export class Button extends Adapter {
    static css = `
    display: inline-flex;
    background-color: green;
    min-width: 4rem;
    min-height: 2rem;
    justify-content: center;
    border-radius: 0.25em;
    `
}