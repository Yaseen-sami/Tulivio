import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReduxProvider from '@/store/provider';
import Layout from '@/core/components/Layout';
import AppRoutes from './routes';


export const App: FC = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ReduxProvider>
  );
};


export default App;
