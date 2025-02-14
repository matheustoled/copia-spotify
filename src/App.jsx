import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </> //Tag vazia em React é chamada de fragment
  );
}

export default App;
