import { useFormik } from "formik";
import { object, string } from "yup";

export default function Contact() {
  const validationSchema = object({
    name: string()
      .required("Name is required.")
      .min(3, "Name must be at least 3 characters.")
      .max(25, "Name must be at most 25 characters."),

    email: string()
      .required("Email is required.")
      .email("Please enter a valid email address."),

    password: string()
      .required("Password is required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters, include one letter, one number, and one special character."
      ),

    age: string()
      .required("Age is required.")
      .matches(
        /^([1-9][0-9]{0,1}|1[01][0-9]|110)$/,
        "Age must be a valid number between 1 and 110."
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema,
  });

  return (
    <div className="container pt-28 flex items-center justify-center flex-col gap-4">
      <h1 className="text-5xl font-bold text-slate-700 pt-5">
        conatct section
      </h1>
      <div className="flex gap-5 items-center justify-center">
        <div className="bg-slate-700 h-1 w-20"></div>
        <i className="fa-solid fa-star text-slate-700"></i>
        <div className="bg-slate-700 h-1 w-20"></div>
      </div>
      <form className="w-7/12 space-y-7 pt-20 pb-28">
        <div className="name relative">
        <div
            className={`absolute left-2 text-primary  transform transition-all duration-500 -z-10 ${
              formik.values.name ? " opacity-100 -translate-y-7" : "translate-y-4 opacity-0 "
            }`}
          >
            userName :
          </div>
          <input
            type="text"
            className="form-control "
            placeholder="userName"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="name"
          />

          {formik.errors.name && formik.touched.name && (
            <p className="text-red-700">* {formik.errors.name}</p>
          )}
        </div>
        <div className="age relative z-10">
        <div
            className={`absolute left-2 text-primary  transform transition-all duration-500 -z-10 ${
              formik.values.age ? " opacity-100 -translate-y-7" : "translate-y-4 opacity-0 "
            }`}
          >
            userAge :
          </div>
          <input
            type="text"
            className="form-control "
            placeholder="userAge"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="age"
          />{" "}
          {formik.errors.age && formik.touched.age && (
            <p className="text-red-700">* {formik.errors.age}</p>
          )}
        </div>
        <div className="email relative">
        <div
            className={`absolute left-2 text-primary  transform transition-all duration-500 -z-10 ${
              formik.values.email ? " opacity-100 -translate-y-7" : "translate-y-4 opacity-0 "
            }`}
          >
            userEmail :
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="userEmail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-700">* {formik.errors.email}</p>
          )}
        </div>
        <div className="password relative">
        <div
            className={`absolute left-2 text-primary  transform transition-all duration-500 -z-10 ${
              formik.values.password ? " opacity-100 -translate-y-7" : "translate-y-4 opacity-0 "
            }`}
          >
            userPassword :
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="userPassword"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-700">* {formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-white p-2 px-3 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
