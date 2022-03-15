//import React from "react";
import classes from "./SelectLanguage.module.css";
import { useState, useEffect } from "react";

var axios = require("axios").default;

var options = {
    method: "GET",
    url: "https://deep-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "x-rapidapi-key": "9352ec2060mshbb3c9c44fb8d69bp1c139djsn9bdf0bfb4f0d",
    },
};

function SelectLanguage(props) {
    const [appState, setAppState] = useState();

    //дефолтные значения
    useEffect(() => {
        if (props.direction === "from") {
            localStorage.setItem("languageFrom", "ru");
        } else if (props.direction === "to") {
            localStorage.setItem("languageTo", "en");
        }
        localStorage.setItem("text", "Привет мир");
    }, []);

    //получаем данные
    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                //console.log("000 ", response.data);
                console.log(response.data.languages);
                setAppState(
                    response.data.languages.map((el) => ({
                        ...el,
                        cl: "notActive",
                    }))
                );
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    //обработчик клика по одному языку
    function handlerLanguageClick(lang) {
        const arraywithSelectLanguage = appState.map(updateColor);

        function updateColor(val) {
            val.cl = "notActive";
            if (val.name === lang) {
                val.cl = "";

                if (props.direction === "from") {
                    console.log(val.language);
                    localStorage.setItem("languageFrom", val.language);
                } else if (props.direction === "to") {
                    localStorage.setItem("languageTo", val.language);
                }
            }
            return val;
        }

        //помещаем массив с выбранным языком в стейт (заменяем)
        setAppState(arraywithSelectLanguage);
    }

    return (
        <>
            <div>
                {<h1 className={classes.SelectLanguage}>{props.direction}</h1>}
            </div>
            <div className={classes.blocklanguages}>
                {appState &&
                    appState.map((p) => (
                        <div
                            key={p.name}
                            id={p.name}
                            onClick={(e) => handlerLanguageClick(e.target.id)}
                            className={
                                p.cl === "notActive"
                                    ? classes.oneLanguage
                                    : classes.oneLanguageActive
                            }
                        >
                            {" " + p.name + " (" + p.language + ") "}
                        </div>
                    ))}
            </div>
        </>
    );
}

export default SelectLanguage;
