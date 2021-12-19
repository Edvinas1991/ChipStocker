import MenuItem from "@mui/material/MenuItem";
import {Select} from "@mui/material";
import {useTranslation} from "react-i18next";

export default () => {
    const {i18n} = useTranslation();

    const onChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            onChange={onChangeLanguage}
            label="Language">
            <MenuItem value="en" selected={i18n === "en"}>EN</MenuItem>
            <MenuItem value="lt" selected={i18n === "lt"}>LT</MenuItem>
        </Select>
    )
}
