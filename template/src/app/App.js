import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'app/routes'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'

function App() {
  return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<GlobalStyle/>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</div>
		</ThemeProvider>
  );
}

export default App;
