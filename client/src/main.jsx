import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux'
import { store ,persistor } from './redux/store.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/Products/ProductPage/ProductPage.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={"loading ..."} persistor={persistor}>
<BrowserRouter>
<Routes>

<Route index element={<App />} />

<Route path={"/products/:productId"} element={<ProductPage  />} />



    </Routes>
    </BrowserRouter>
  </PersistGate>
    </Provider>
  </React.StrictMode>,
)
