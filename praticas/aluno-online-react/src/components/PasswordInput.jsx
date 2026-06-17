import './PasswordInput.css';

function PasswordInput({ value, onChange, error }) {
  return (
    <div className="login-input-group">
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        name="password"
        type="password"
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'password-error' : undefined}
      />
      {error && (
        <span className="login-input-error" id="password-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default PasswordInput;
