/* import classes from "./InputText.module.css"; */

import { Input } from "antd";

const { TextArea } = Input;

function InputText(props) {
  function handleInput(e) {
    //console.log('e', )
    localStorage.setItem("text", e.target.value.toString());
  }

  return (
    <>
      <TextArea
        //value={"Привет мир"}
        onChange={handleInput}
        showCount={true}
        rows={10}
        placeholder={props.placeholder}
        maxLength={60}
      />
    </>
  );
}

export default InputText;
