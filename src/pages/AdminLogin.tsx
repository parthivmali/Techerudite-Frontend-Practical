import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { adminLogin } from "../api/auth";
import Button from "../components/Button";

const AdminLogin = () => {
  const navigate = useNavigate();

  // Yup Validation
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Initial Values
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await adminLogin(values);
      localStorage.setItem("token", response.data.token);
      Swal.fire({
        title: "Success!",
        text: "Admin Login Successful!",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/dashboard");
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Login failed",
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
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        {/* Formik Wrapper */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
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

              {/* Submit Button */}
              <Button type="submit" text={isSubmitting ? "Logging in..." : "Login"} />
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:underline mt-2 cursor-pointer"
          >
            Go to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
