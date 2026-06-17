import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import useAuth from '../contexts/useAuth';
import learnIcon from '../assets/learn.svg';
import './Login.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  function validateFields(currentEmail, currentPassword) {
    const nextErrors = {
      email: '',
      password: '',
    };

    if (!currentEmail.trim()) {
      nextErrors.email = 'O campo de email \u00e9 obrigat\u00f3rio.';
    } else if (!emailRegex.test(currentEmail)) {
      nextErrors.email = 'Informe um email v\u00e1lido.';
    }

    if (!currentPassword.trim()) {
      nextErrors.password = 'O campo de senha \u00e9 obrigat\u00f3rio.';
    } else if (currentPassword.length < 6) {
      nextErrors.password = 'A senha deve ter no m\u00ednimo 6 caracteres.';
    }

    return nextErrors;
  }

  function updateValidation(nextEmail, nextPassword) {
    if (!submitted) {
      return;
    }

    setErrors(validateFields(nextEmail, nextPassword));
  }

  function handleEmailChange(event) {
    const nextEmail = event.target.value;
    setEmail(nextEmail);
    updateValidation(nextEmail, password);
  }

  function handlePasswordChange(event) {
    const nextPassword = event.target.value;
    setPassword(nextPassword);
    updateValidation(email, nextPassword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validateFields(email, password);
    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      return;
    }

    login({
      email,
      nome: email.split('@')[0],
    });
    navigate('/dashboard');
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <img className="login-logo" src={learnIcon} alt="Icone do Capelo" />
        <h1>Aluno Online</h1>

        <div className="login-fields">
          <EmailInput value={email} onChange={handleEmailChange} error={errors.email} />
          <PasswordInput value={password} onChange={handlePasswordChange} error={errors.password} />
        </div>

        <button className="login-button" type="submit">
          Entrar
        </button>

      </form>

      <footer className="login-footer">&copy; 2026. Todos os direitos reservados.</footer>
    </main>
  );
}

export default Login;
