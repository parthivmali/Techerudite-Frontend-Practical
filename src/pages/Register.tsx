import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { registerUser } from "../api/auth";
import Button from "../components/Button";

const Register = () => {
  const navigate = useNavigate();

  // Yup Validation
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    role: Yup.string().oneOf(["customer", "admin"], "Invalid Role").required("Role is required"),
  });

  // Initial Form Values
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "customer",
  };

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      await registerUser(values);
      Swal.fire({
        title: "Success!",
        text: "Registration successful! Check your email for verification.",
        icon: "success",
        confirmButtonText: "OK",
      });
      resetForm();
      navigate("/admin-login");
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Registration failed",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen min-w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1708724195876-1156245fce21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              {/* First Name */}
              <div className="mb-4">
                <Field type="text" name="first_name" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
                <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <Field type="text" name="last_name" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
                <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div className="mb-4">
                <Field type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password */}
              <div className="mb-4">
                <Field type="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Role Selection */}
              <div className="mb-4">
                <Field as="select" name="role" className="w-full p-2 border border-gray-300 rounded">
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <Button type="submit" text={isSubmitting ? "Registering..." : "Register"} />
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4">
          <p className="text-gray-600">Already have an account?</p>
          <button
            onClick={() => navigate("/admin-login")}
            className="text-blue-500 hover:underline mt-2 cursor-pointer"
          >
            Go to Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default Register;
