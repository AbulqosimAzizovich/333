import React, { useEffect, useState } from "react";
import Axi from "./components/Axi";
import Header from './components/Header';
import Main from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardMD from "./page/CardMd/CardMD";


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/name/:alpha3Code" element={<CardMD />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
