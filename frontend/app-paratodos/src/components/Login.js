import React from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [user, setUser] = React.useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post('http://localhost:3000/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            setUser(response.data)

        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor!');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos!');
            }
        }


    };

    const handleLogout = async (event) => {
        event.preventDefault();
        setUser(null);
        setError('');
    };

    return (
        <div className='login-form-wrap'>
            {user == null ? (

                <div>
                    <h2>Login</h2>
                    <form className='login-form'>
                        <input type='email'
                            name='email'
                            placeholder='Digite seu email'
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <input type='password'
                            name='password'
                            placeholder='Digite sua senha'
                            required
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button type='submit'
                            className='btn-login'
                            onClick={(event) => handleLogin(event)}>Login</button>
                    </form>

                    <p>{error}</p>
                </div>
            ) : (

                <div>
                    <h2>Olá, {user.name}</h2>
                    <button type="button" 
                            className="btn-login"
                            onClick={(event) => handleLogout(event)}
                            >Sair</button>
                </div>
        )}
        </div>
    )
}

export default Login;