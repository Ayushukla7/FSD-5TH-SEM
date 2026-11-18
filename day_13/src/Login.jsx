import './login.css';

function Login() {
  return (
    <main className="login-page">
      <a className="login-back-link" href="/">
        &larr; Back to store
      </a>
      <section className="login-card" aria-labelledby="login-title">
        <p className="login-eyebrow">WELCOME BACK</p>
        <h1 id="login-title">Sign in to your account</h1>
        <p className="login-description">
          Enter your details below to continue shopping.
        </p>

        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.assign('/');
          }}
        >
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <button type="submit">Log in</button>
        </form>

        <p className="login-note">
          This is a demo login page; authentication is not connected yet.
        </p>
      </section>
    </main>
  );
}

export default Login;
