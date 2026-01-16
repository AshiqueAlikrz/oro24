import ORO24LOGO from "@/assets/png/oro24logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/features/auth/authApi";
import LoginBackgroundImage from "@/assets/images/loginpage-background.jpg";
import { loginUser } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const data = await login(values).unwrap();
        dispatch(loginUser({ token: data.token, user: data.data }));
        toast.success("User Loggined Successfully");
        navigate("/");
      } catch (err) {
        console.error("Login failed:", err);
        toast.error("Error in Login");
      }
    },
  });

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center py-4 sm:py-8" style={{ backgroundImage: `url(${LoginBackgroundImage})` }}>
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <img src={ORO24LOGO} alt="ORO24 Logo" className="w-20 sm:w-24 md:w-32 h-auto" />
      </div>

      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 md:px-8 py-8">
        <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-medium">Sign In</h3>
          <form className="flex flex-col gap-3 sm:gap-4" onSubmit={formik.handleSubmit}>
            <Label htmlFor="email" className="text-sm sm:text-base">
              Email Id
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full bg-white text-sm sm:text-base"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs sm:text-sm">{formik.errors.email}</p>}

            <Label htmlFor="password" className="text-sm sm:text-base">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full bg-white text-sm sm:text-base"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-xs sm:text-sm">{formik.errors.password}</p>}

            <Button type="submit" disabled={isLoading} className="bg-black text-white font-bold py-2.5 sm:py-3 mt-2 sm:mt-4 w-full text-base sm:text-lg md:text-xl">
              {isLoading ? <Spinner /> : "Login"}
            </Button>
            {error && <p className="text-red-500 text-xs sm:text-sm text-center">Login failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
