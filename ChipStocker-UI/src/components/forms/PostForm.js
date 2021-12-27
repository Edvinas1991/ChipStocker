import {Form, Formik, Field, ErrorMessage} from "formik";
import {
    CircularProgress,
    FormControl,
    FormHelperText,
    TextField
} from "@mui/material";
import * as Yup from 'yup';
import Container from "@mui/material/Container";
import '../../style.css'

import ReactQuill from "react-quill";


const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required(),
    category: Yup.string()
        .required()
});

export default () => {

    return (
        <>
            <h3 >Post form</h3>
            <Formik initialValues={{
                title: '',
                category: '',
                post: ''
            }} onSubmit={(values, helpers) => {
                console.log('Values ', values);
                console.log('Helpers ', helpers);

                // helpers.setSubmitting(true);
                // setTimeout(() => {
                //     helpers.setSubmitting(false);
                // }, 5000);

            }}
                    validationSchema={validationSchema}>
                {props => (

                    <Container maxWidth="sm">
                        <Form className="product-form">
                            <div>
                                <FormControl error={props.touched.name && props.errors.name} variant="outlined"
                                             fullWidth
                                             margin="dense">
                                    <Field id="title" name="title" label="title: " placeholder="Type title"
                                           as={TextField}/>
                                    <ErrorMessage name="title" component={FormHelperText}/>

                                    <Field id="category" name="category" label="category: " placeholder="Type category"
                                           as={TextField}/>
                                    <ErrorMessage name="category" component={FormHelperText}/>

                                    <Field name="post">
                                        {({field}) =>
                                            <ReactQuill style={{height: "200px"}
                                            } value={field.value} onChange={field.onChange(field.name)}/>}

                                    </Field>
                                </FormControl>

                            </div>
                            {
                                props.isSubmitting ? <CircularProgress size={20}/> :
                                    <button type="submit">Submit</button>
                            }
                        </Form>
                    </Container>
                )}

            </Formik>


        </>

    )
}
