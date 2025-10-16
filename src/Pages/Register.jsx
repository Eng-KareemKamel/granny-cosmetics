import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    alert("Registration successful!");
    console.log("registered", data);
  }

  return (
    <div className="container py-5">
      <div className="card mx-auto p-4" style={{ maxWidth: 420 }}>
        <h3 className="mb-3">Create Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" {...register("name", { required: "User must enter any valid name" })} />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Must be example@email.com" }
            })} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be more than 8 chars" }
            })} />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </div>

          <button className="btn btn-dark w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
