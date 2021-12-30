import * as React from 'react';

import MenuItem from "@mui/material/MenuItem";
import {Select} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export default () => {
    const {i18n} = useTranslation();

    useEffect(() => {
       setlanguage(i18n.language);
    }, []);

    const onChangeLanguage = (e) => {
        setlanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }
    const [language, setlanguage] = React.useState('');

    return (
        <Select
            sx={{minWidth: "130px"}}
            size={"small"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            onChange={onChangeLanguage}
            label="Language">
            <MenuItem value="en" selected={i18n === "en"}>EN</MenuItem>
            <MenuItem value="lt" selected={i18n === "lt"}>LT</MenuItem>
        </Select>
    )
}
