import store from './redux/store';
import {Provider} from 'react-redux'
import './App.css'
import Data from './components/Data';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './features/apiSlice';

function App() {


  return (
    <>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
      <div className="app">
        <Data />
      </div>
      </ApiProvider>
    </Provider>
    </>
  )
}

export default App
