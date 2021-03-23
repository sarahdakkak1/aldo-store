import React from "react";
import WebSockets from "./WebSockets";
import Header from './components/Header';


const App = () => {
  return (
    <>
    <Header />
      <WebSockets />
    </>
  );
};

export default App;