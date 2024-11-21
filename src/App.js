import './App.css';
import {Route, Routes } from 'react-router-dom';
import ProductList from './component/productList/ProductList';
import Form from './component/form/form';
const tg = window.Telegram.WebApp

function App() {
  const onClose = () => {
  }
  return (
    <div className="App">
      <header />
      <Routes>
        <Route index element = {<ProductList />} />
        <Route path={'form'} element = {<Form />} />
      </Routes>
    </div>
  );
}

export default App;
