import {Form, Formik, Field, ErrorMessage} from "formik";
import {Button, CircularProgress, FormControl, FormHelperText, TextField} from "@mui/material";
import * as Yup from 'yup';
import Container from "@mui/material/Container";
import '../../style.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {addPost, deletePost, getPost, updatePost} from "../../api/postApi";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Translation} from "react-i18next";

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
    const [post, setPost] = useState([]);
    const user = useSelector(state => state.user.user);
    const {postId} = useParams();
    const navigation = useNavigate();
    const [title, setTitle] = useState([""]);
    const [category, setcategory] = useState([""]);
    const [body, setbody] = useState([""]);
    const [id, setId] = useState([null]);


    useEffect(() => {

            if (postId) {
                console.log('cia!!')
                getPost(postId)
                    .then(({data}) => {
                        setPost(JSON.stringify(data));
                    })
                    .catch((error) => console.log(error))
                    .finally(() =>
                        setLoading(false));
                console.log("debug " + post);
            }

        }
        , []);

    return (

        <Translation>
            {(t) =>
                <>
                    <h3>{t('post_form')}</h3>
                    <Formik initialValues={{
                        title: "",
                        category: "",
                        body: "",
                        author: user.username,
                        postId: "",
                        id: ""

                    }} onSubmit={(values, helpers) => {
                        console.log('Values ', values);
                        console.log('Helpers ', helpers);
                        addPost(values)
                            .then(({data}) => setResponse(data))
                            .catch((error) => console.log(error))
                            .finally(() => {
                                helpers.setSubmitting(false);
                                navigation("/");
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
                                                label={t('title')}
                                                placeholder="Type title"
                                                as={TextField}/>
                                            <ErrorMessage name="title" component={FormHelperText}/>

                                            <Field
                                                sx={{mt: "20px", mb: "20px"}}
                                                id="category"
                                                name="category"
                                                label={t('category')}
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
                                                                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                                                                            ['bold', 'italic', 'underline'],
                                                                            [{'list': 'ordered'}, {'list': 'bullet'}],
                                                                            [{'align': []}],
                                                                            ['image'],
                                                                            ['clean'],
                                                                            [{'color': []}]
                                                                        ]
                                                                    }
                                                                }}

                                                    />}

                                            </Field>
                                        </FormControl>

                                    </div>
                                    {
                                        props.isSubmitting ? <CircularProgress size={20}/> :
                                            <Button
                                                sx={{mt: "60px"}}
                                                variant="outlined"
                                                type="submit">{t('submit_button')}</Button>
                                    }
                                </Form>
                            </Container>
                        )}
                    </Formik>
                </>
            }
        </Translation>

    )
}
