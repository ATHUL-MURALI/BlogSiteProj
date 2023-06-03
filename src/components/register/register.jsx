import { useState } from "react";
import "./register.css"; // Import the CSS file

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:2345/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <div>
      <div>
        <section className="Backgrounds">
          <div className="container py-1 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-12">
                <div className="card card-forms">
                  <div className="row g-0">
                    <form className="register" onSubmit={register}>
                      <div className="card-body p-md-1 text-black">
                        <div className="d-flex justify-content-center pt-3">
                          <h1 className="fw-Bolder mb-3 pb-3 headings">Register</h1>
                        </div>
                        <br />
                        <br />
                        <div className="form-outlines mb-2">
                          <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                            className="form-control form-control-lgs"
                          />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                        <br />
                        <br />
                        <div className="d-flex justify-content-center pt-3">
                          <button type="submit" className="btn btn-secondarys btn-lg">
                            Register
                          </button>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center pt-3">
                          <p className="text-centers">
                            If already registered, please&nbsp;
                            <a href="/login">log in</a>.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

