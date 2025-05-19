import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/auth.service";

function Login() {
  const { login } = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });
      console.log("Login successful:", response);
      if (response?.token) {
        localStorage.setItem("token", response.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="login-page">
      <section className="login-form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
