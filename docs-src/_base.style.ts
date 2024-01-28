import { theme } from './ux/color.js';
import { fontFluid } from './ux/fn.js';

export const baseStyle = (toBase) => {
  const style = new CSSStyleSheet();
  document.adoptedStyleSheets.push(style);
  style.replaceSync(`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    @font-face {
      font-family: 'Sansita Swashed';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(${toBase}ux/font/Sansita_Swashed/SansitaSwashed-VariableFont_wght.ttf) format('truetype');
    }

    html {
      ${fontFluid()}
    }

    body {
      margin: 0;
      background-color: ${theme.yellow};
    }
    
    h1, h2, h3 {
      margin: 0;
      padding: 0;
      padding-bottom: 0.25rem;
      line-height: 2.5;
      font-family: 'Sansita Swashed'
    }
  `)
}