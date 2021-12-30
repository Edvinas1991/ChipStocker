import React, { Component } from 'react';
import {Translation} from "react-i18next";

const About = () => {

    return (
        <>
            <Translation>
                {(t) =>
                    <>
                        <div>{t('electronics')}</div>
                    </>
                }
            </Translation>
        </>
    )
}

export default About;