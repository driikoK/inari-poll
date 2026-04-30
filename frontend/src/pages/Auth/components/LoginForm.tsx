import { ErrorText } from '@/components';
import { useAuthStore } from '@/stores';
import { ErrorMessage } from '@hookform/error-message';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button, Link, TextField } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from '../auth.module.scss';

type LoginFormValues = {
  nickname: string;
  password: string;
};

export const LoginForm: FunctionComponent<{ changeForm: () => void }> = ({ changeForm }) => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [showPass, setShowPass] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { nickname: '', password: '' },
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const onSubmitForm = async (form: LoginFormValues) => {
    try {
      await login(form.nickname, form.password);
      navigate('/home');
    } catch {}
  };

  return (
    <>
      <h2 className={styles.formTitle}>Увійти</h2>
      <p className={styles.formSubtitle}>Введи свій нікнейм і пароль</p>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.fields}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="login-nickname">
              Нікнейм
            </label>
            <Controller
              control={control}
              name="nickname"
              rules={{
                required: "Поле обов'язкове",
                minLength: { value: 3, message: 'Мінімум 3 символи' },
              }}
              render={({ field }) => (
                <TextField
                  id="login-nickname"
                  variant="outlined"
                  placeholder="Введіть нікнейм"
                  size="small"
                  fullWidth
                  {...field}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="nickname"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="login-password">
              Пароль
            </label>
            <div className={styles.passwordWrapper}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Поле обов'язкове",
                  minLength: { value: 3, message: 'Мінімум 3 символи' },
                }}
                render={({ field }) => (
                  <TextField
                    id="login-password"
                    variant="outlined"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Введіть пароль"
                    size="small"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? 'Приховати пароль' : 'Показати пароль'}
              >
                {showPass ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </button>
            </div>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </div>

          <p className={styles.forgotRow}>
            <Link
              href="/forgot-password"
              underline="hover"
              sx={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}
            >
              Забули пароль?
            </Link>
          </p>

          <Button type="submit" variant="contained" fullWidth size="large">
            Увійти
          </Button>

          <p className={styles.switchRow}>
            Немає акаунту?{' '}
            <Link
              onClick={changeForm}
              underline="hover"
              sx={{ color: 'var(--accent)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
            >
              Зареєструватись
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
