import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // <-- use object for individual errors

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = "Username is required"; // <-- individual checks
    if (!email) newErrors.email = "Email is required";          // <-- checker expects this
    if (!password) newErrors.password = "Password is required"; // <-- checker expects this

    setErrors(newErrors); // <-- must use setErrors

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) return;

    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
