import { DependencyList, MutableRefObject, useEffect } from 'react';

interface useCSSOption {
    onStates?: DependencyList | undefined;
}

export function useCSS(
    style: MutableRefObject<any>,
    css: string | (() => string),
    option: useCSSOption = {onStates: undefined}) {

  useEffect(() => {
    if (typeof css === 'function') {
        style.current.css = css();
    } else if (typeof css === 'string') {
        style.current.css = css;
    }
  }, option.onStates);
}