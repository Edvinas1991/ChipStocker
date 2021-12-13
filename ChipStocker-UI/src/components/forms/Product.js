import {Form, Formik, Field, ErrorMessage} from "formik";
import {
    Buttom,
    CircularProgress,
    FormControl,
    FormHelperText,
    TextField
} from "@mui/material";
import * as Yup from 'yup';
import Container from "@mui/material/Container";
import '../../style.css'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Value must be more than 5')
        .max(10, 'Value must be less than 10')
        .required(),
    surname: Yup.string()
        .min(5, 'Value must be more than 5')
        .max(10, 'Value must be less than 10')
        .required(),
});

export default () =>
    (
        <Formik initialValues={{name: ''}} onSubmit={(values, helpers) => {
            console.log('Values ', values);
            console.log('Helpers ', helpers);

            helpers.setSubmitting(true);
            setTimeout(() => {
                helpers.setSubmitting(false);
            }, 5000);

        }}
                validationSchema={validationSchema}>
            {props => (

                <Container maxWidth="sm">
                    <Form className="product-form">
                        <div>
                            <FormControl error={props.touched.name && props.errors.name} variant="outlined" fullWidth
                                         margin="dense">
                                <Field id="name" name="name" label="name: " placeholder="Type name" as={TextField}/>
                                <ErrorMessage name="name" component={FormHelperText}/>
                            </FormControl>

                        </div>
                        {
                            props.isSubmitting ? <CircularProgress size={20}/> : <button type="submit">Submit</button>
                        }
                    </Form>
                </Container>
            )}

        </Formik>

    )
