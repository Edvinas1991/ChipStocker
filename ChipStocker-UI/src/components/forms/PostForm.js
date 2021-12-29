import {Form, Formik, Field, ErrorMessage} from "formik";
import {Button, CircularProgress, FormControl, FormHelperText, TextField} from "@mui/material";
import * as Yup from 'yup';
import Container from "@mui/material/Container";
import '../../style.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {addPost} from "../../api/postApi";
import {useState} from "react";

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required(),
    category: Yup.string()
        .required(),
    body: Yup.string()
        .required()
});

export default () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <h3>Post form</h3>
            <Formik initialValues={{
                title: '',
                category: '',
                body: '',
                author:'Admin'

            }} onSubmit={(values, helpers) => {
                console.log('Values ', values);
                console.log('Helpers ', helpers);

                addPost(values)
                    .then(({data}) => setResponse(data))
                    .catch((error) => console.log(error))
                    .finally(() => {
                        helpers.setSubmitting(false);

                    });

            }}
                    validationSchema={validationSchema}>
                {props => (

                    <Container maxWidth="sm">

                        <Form className="product-form">
                            <div>
                                <FormControl error={props.touched.name && props.errors.name} variant="outlined"
                                             fullWidth
                                             margin="dense">
                                    <Field
                                        sx={{mt: "10px"}}
                                        id="title"
                                        name="title"
                                        label="title: "
                                        placeholder="Type title"
                                        as={TextField}/>
                                    <ErrorMessage name="title" component={FormHelperText}/>

                                    <Field
                                        sx={{mt: "20px", mb: "20px"}}
                                        id="category"
                                        name="category"
                                        label="category: "
                                        placeholder="Type category"
                                        as={TextField}/>
                                    <ErrorMessage name="category" component={FormHelperText}/>

                                    <Field

                                        name="body">
                                        {({field}) =>
                                            <ReactQuill style={{height: "200px"}
                                            } value={field.value} onChange={field.onChange(field.name)}
                                                        modules={{
                                                            toolbar: {
                                                                container: [
                                                                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                                    ['bold', 'italic', 'underline'],
                                                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                                    [{ 'align': [] }],
                                                                    ['image'],
                                                                    ['clean'],
                                                                    [{ 'color': [] }]
                                                                ]
                                                            }
                                                        }}
                                                        placeholder="Add post "
                                            />}

                                    </Field>
                                </FormControl>

                            </div>
                            {
                                props.isSubmitting ? <CircularProgress size={20}/> :
                                    <Button
                                        sx={{mt: "60px"}}
                                        variant="outlined"
                                        type="submit">Submit</Button>
                            }
                        </Form>
                    </Container>
                )}
            </Formik>
        </>
    )
}
