import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

  

    const handleSubmit = (e) => {
        e.preventDefault();

       
        let newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        }
        if (!password) {
            newErrors.password = "Password is required";
        }
        if (!username) {
            newErrors.username = "Username is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear errors if form is valid
        console.log("Form Submitted", formData);
    };

    const styles = {
        width: "100%",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ccc",
    };

    const styleText = {
        fontSize: "20px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
    };

    const buttonStyle = {
        margin: "20px",
        padding: "10px",
        background: "gray",
        color: "white",
        border: "none",
        borderRadius: "5px",
        width: "160px",
        cursor: "pointer",
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome to our login Page</h1>

            <div>
                <label style={styleText} htmlFor="username">Username</label>
                <input
                    style={styles}
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>

            <div>
                <label style={styleText} htmlFor="email">Email</label>
                <input
                    style={styles}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label style={styleText} htmlFor="password">Password</label>
                <input
                    style={styles}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <button style={buttonStyle} type="submit">
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;
