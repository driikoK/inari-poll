import { FC, useState } from 'react';
import { SignUpForm, LoginForm } from './components';
import styles from './auth.module.scss';

const Auth: FC = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const changeForm = () => setShowSignUpForm((prev) => !prev);

  return (
    <div className={styles.page}>
      <aside className={styles.decorPanel}>
        <span className={styles.decorGlowTop} aria-hidden="true" />
        <span className={styles.decorGlowBottom} aria-hidden="true" />
        <img src="/fox.jpg" className={styles.decorImage} alt="Inari fox" />
        <h1 className={styles.decorTitle}>
          {showSignUpForm ? 'Приєднуйся' : 'Ласкаво просимо'}
          <br />
          <span className={styles.decorTitleAccent}>до Inari 🦊</span>
        </h1>
        <p className={styles.decorSubtitle}>
          {showSignUpForm
            ? 'Створи акаунт і стань частиною команди.'
            : 'Система обліку крихт. Увійди, щоб продовжити.'}
        </p>
      </aside>

      <main className={styles.formPanel}>
        <div className={styles.formWrapper}>
          {showSignUpForm ? (
            <SignUpForm changeForm={changeForm} />
          ) : (
            <LoginForm changeForm={changeForm} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Auth;
