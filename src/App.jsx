import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", JSON.stringify(data, null, 2));
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-90">
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 w-50">
        <h1 className="text-center mb-4">Form Validation</h1>

        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInput"
            placeholder="Enter Your Name"
            {...register("name", {
              required: true,
              maxLength: 14,
              minLength: 2,
            })}
          />
          {errors?.name && (
            <span className="text-danger">Please write a name </span>
          )}
          <span className="text-danger">
            {errors?.name?.type === "maxLength" &&
              " less than 14 characters"}
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          {errors?.email && (
            <span className="text-danger">Please enter a valid email!!</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
          />
          {errors?.password && (
            <span className="text-danger">Please enter a valid password!!</span>
          )}
          <span className="text-danger">
            {errors?.password?.type === "minLength" &&
              "More than 8 characters"}
          </span>
        </div>

        <div className="mb-3">
          <label className="form-label">Radio Buttons</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              {...register("student", { required: true })}
            />
            <label className="form-check-label" htmlFor="radio1">
              Radio-01
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              {...register("student", { required: true })}
            />
            <label className="form-check-label" htmlFor="radio2">
              Radio-02
            </label>
          </div>
          {errors.student && (
            <span className="text-danger">Please select an option!!</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Select</label>
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("select", { required: true })}
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          {errors?.select && (
            <span className="text-danger">Please select an option!!</span>
          )}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
