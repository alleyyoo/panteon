import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(routes);

function App() {
  const { darkAlgorithm } = theme;

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: { colorPrimary: '#e26d0a' },
          algorithm: darkAlgorithm
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
