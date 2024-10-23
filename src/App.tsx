import '@@assets/css/global.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '@@GlobalStyle';
import Router from '@@router/router';
import { store } from '@@store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle>
          <Router />
        </GlobalStyle>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
