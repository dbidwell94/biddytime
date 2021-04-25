import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import store from "./state";

if ((module as any).hot) {
  (module as any).hot.accept();
}

const theme = {
  breakpoints: {
    smallScreen: "1024px",
    desktop: "1200px",
    tablet: "768px",
    mobile: "480px",
  },
};

export type ITheme = typeof theme;

const GlobalStyle = createGlobalStyle`
html {
  width: 100vw;
  font-size: 62.5%;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 100%;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.75rem;
}

h3 {
  font-size: 2.5rem;
}

h4,
h5,
h6,
p,
a,
strong {
  font-size: 2.25rem;
}

`;

function Index() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

if (typeof global.document !== "undefined") {
  const rootNode = document.getElementById("root");

  if (rootNode?.hasChildNodes()) {
    ReactDOM.hydrate(<Index />, rootNode);
  } else {
    ReactDOM.render(<Index />, rootNode);
  }
}
