import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import theme from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
  }
  body {
    background: #f2f2f2;
  }
`

function MyApp({ Component, pageProps }) {
	return (
    <ThemeProvider theme={theme}>
		<Layout>
      <GlobalStyle />
			<Component {...pageProps} />
		</Layout>
    </ThemeProvider>
	);
}

export default MyApp;
