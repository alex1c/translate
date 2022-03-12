import classes from "./OutputText.module.css";
import { Input, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;

function OutputText(props) {
  const [textState, settextState] = useState("");

  function handlerClick() {
    const languageFrom = localStorage.getItem("languageFrom");
    const languageTo = localStorage.getItem("languageTo");
    const text = localStorage.getItem("text");

    console.log("languageFrom", languageFrom);
    console.log("languageTo", languageTo);
    console.log("text", text);
    let textState2;
    //////
    var axios = require("axios").default;

    var options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "x-rapidapi-key": "9352ec2060mshbb3c9c44fb8d69bp1c139djsn9bdf0bfb4f0d",
      },
      data: { q: text, source: languageFrom, target: languageTo },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data['data']['translations']['translatedText']);
        settextState(response.data['data']['translations']['translatedText']);
        textState2 = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    /////
    console.log("textState2 ", textState2);

    let result

     for (var key in textState2) {
      console.log("key", key + " значение: " + textState2[key]);
      for (var key2 in textState2[key]) {
        console.log("textState[key2] ", textState2[key][key2].translatedText);
        result = textState[key][key2].translatedText
      }
    } 
    //settextState(result);
    console.log('result ',result)
  }

  return (
    <>
      <Button type="primary" block onClick={handlerClick}>
        Translate
      </Button>

      <TextArea
        value={textState}
        rows={10}
        placeholder={props.placeholder}
        maxLength={60}
      />
    </>
  );
}

export default OutputText;
