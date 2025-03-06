import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function FormikForm() {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Submitting form', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field type="text" name="username" placeholder="Username" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" placeholder="Johnfem@example.com" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikForm;
