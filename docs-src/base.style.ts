const style = new CSSStyleSheet();
document.adoptedStyleSheets.push(style);
style.replaceSync(`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`)