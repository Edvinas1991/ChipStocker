import {Form, Formik} from 'formik';
import {Button, CircularProgress, Paper} from '@mui/material';
import * as Yup from 'yup';
import TextFieldInput from "./TextFieldInput";
import Container from "@mui/material/Container";
import {Translation} from "react-i18next";

import '../../style.css'

const validationSchema = Yup.object().shape({
    vardas: Yup.string()
        .required(),
    pavarde: Yup.string()
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required("Password is required"),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
});
export default () => (

    <Translation>
        {(t) =>

            <Formik initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
                repassword: ''
            }}
                    onSubmit={(values, helpers) => {
                        helpers.setSubmitting(true);
                        setTimeout(() => {
                            helpers.setSubmitting(false);
                        }, 5000);
                    }}
                    validationSchema={validationSchema}>
                {props => (
                    <Container maxWidth="sm">
                        <Form className="product-form">
                            <TextFieldInput
                                error={props.touched.vardas && !!props.errors.name}
                                fieldName="name" label={t('name')}
                                placeholder="Iveskit varda..."/>
                            <TextFieldInput error={props.touched.surname && !!props.errors.surname}
                                            fieldName="surname" label={t('surname')}
                                            placeholder="Iveskit pavarde..."/>
                            <TextFieldInput error={props.touched.email && !!props.errors.email}
                                            fieldName="email" label={t('email')}
                                            placeholder="Iveskit email..."/>
                            <TextFieldInput error={props.touched.password && !!props.errors.password}
                                            fieldName="password" label={t('password')}
                                            placeholder="Type password..."
                                            type="password"/>
                            <TextFieldInput error={props.touched.repassword && !!props.errors.repassword}
                                            fieldName="repassword" label={t('repeat_passoword')}
                                            placeholder="Repeat password..."
                                            type="password"/>
                            {
                                props.isSubmitting ?
                                    <CircularProgress/> :
                                    <Button type="submit">{t('submit_button')}  </Button>
                            }
                        </Form>
                    </Container>
                )}
            </Formik>
        }
    </Translation>
)