import React from "react";
//import { Button } from 'antd';
import "./App.css";
import { Layout } from "antd";
import Top from "./components/Top/Top";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import { Divider } from "antd";
import InputText from "./components/InputText/InputText";
import OutputText from "./components/OutputText/OutputText";
//import { useState } from "react";
//import TranslateContext from "./TranslateContext";

const { Footer } = Layout;
//const TranslateContext = createContext();

//const App = () => (
function App() {
  //const [arr, setarr] = useState("ffdfdfdf");
  //setarr("gsgh");

  return (
    <>
     {/*  //<TranslateContext.Provider value={{a:'5555'}}> */}
        <Layout>
          <Top></Top>
          <Divider />
          <SelectLanguage direction="from" ></SelectLanguage>
          <Divider />
          <SelectLanguage direction="to"></SelectLanguage>
          <Divider />
          <InputText placeholder="Print text for translate..."></InputText>
          
          <Divider />
          <OutputText placeholder="Result"></OutputText>
          <Divider />
          <Footer>Footer</Footer>
        </Layout>
      {/* </TranslateContext.Provider> */}
    </>
  );
}

export default App;
