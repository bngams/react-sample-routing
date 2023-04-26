import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { myRouter, routes } from './AppRouter';
import Header from './components/layout/Header';

function App() {

  //@ts-ignore
  window.someVar = "1";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
