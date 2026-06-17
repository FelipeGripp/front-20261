import './EmailInput.css';

function EmailInput({ value, onChange, error }) {
  return (
    <div className="login-input-group">
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'email-error' : undefined}
      />
      {error && (
        <span className="login-input-error" id="email-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default EmailInput;
