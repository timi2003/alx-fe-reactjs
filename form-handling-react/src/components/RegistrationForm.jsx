import { useState } from 'react'


function RegistrationForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       
        if (!username || !password || !password) {
            setError('all fields are required')
            return;
    }
    setError('')
    
    }
    const styles = {
      width: "100%",
      margin: "50",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #ccc",

    }
    const styleText = {
      fontsize: "20px",
      fontfamily: "san-serif",
      fontweight: "bold",
    }
    const button ={
      margin: "20px",
      padding: "10px",
      background: "gray",
      color: "white",
      border: "none",
      borderRadius: "5px",
      width: "160px",
    }
  return (
    <form onSubmit={handleSubmit}>
         {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>welcome to our login page</h1>
    <div>
      <label style={styleText} htmlFor="username">Username</label>
      <input style={styles}
        type="text" 
        name='username'
        value={username} 
        onChange={handleChange}
        placeholder='username' />
    </div>

    <div>
      <label style={styleText} htmlFor="email">Email</label>
      <input style={styles}
        type="email" 
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Johnfem@example' />
    </div>

    <div>
      <label style={styleText} htmlFor="password">Password</label>
      <input style={styles}
        type="password" 
        name='password'
        value={password}
        onChange={handleChange}
        placeholder='password' />
        </div>

        <button style={button} type='submit'>
            Register
        </button>
      </form>
    
  
  );
}

export default RegistrationForm;
