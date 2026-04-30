import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
import { Button, Link, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { useAuthStore } from '@/stores';
import { ErrorText } from '@/components';
import styles from '../auth.module.scss';

type FormValues = {
  nickname: string;
  password: string;
  repeatedPassword: string;
  email: string;
};

export const SignUpForm: FC<{ changeForm: () => void }> = ({ changeForm }) => {
  const { signUp } = useAuthStore();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { nickname: '', password: '', email: '', repeatedPassword: '' },
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmitForm = async (form: FormValues) => {
    const { nickname, password, email } = form;
    try {
      await signUp(nickname, password, email);
      toast.success('Реєстрація пройшла успішно!');
      navigate('/login');
    } catch {}
  };

  return (
    <>
      <h2 className={styles.formTitle}>Реєстрація</h2>
      <p className={styles.formSubtitle}>Заповни форму, щоб створити акаунт</p>

      <form onSubmit={handleSubmit(onSubmitForm)} autoComplete="off">
        <div className={styles.fields}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="signup-nickname">
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
                  id="signup-nickname"
                  variant="outlined"
                  placeholder="Введіть нікнейм"
                  size="small"
                  fullWidth
                  autoComplete="off"
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
            <label className={styles.fieldLabel} htmlFor="signup-email">
              Пошта
            </label>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Поле обов'язкове" }}
              render={({ field }) => (
                <TextField
                  id="signup-email"
                  variant="outlined"
                  placeholder="Введіть email"
                  type="email"
                  size="small"
                  fullWidth
                  autoComplete="off"
                  {...field}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="signup-password">
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
                    id="signup-password"
                    variant="outlined"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Введіть пароль"
                    size="small"
                    fullWidth
                    autoComplete="new-password"
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

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="signup-repeat-password">
              Повторіть пароль
            </label>
            <div className={styles.passwordWrapper}>
              <Controller
                control={control}
                name="repeatedPassword"
                rules={{
                  required: "Поле обов'язкове",
                  validate: (value) => value === getValues('password') || 'Паролі не співпадають',
                }}
                render={({ field }) => (
                  <TextField
                    id="signup-repeat-password"
                    variant="outlined"
                    type={showRepeatPass ? 'text' : 'password'}
                    placeholder="Повторіть пароль"
                    size="small"
                    fullWidth
                    autoComplete="new-password"
                    {...field}
                  />
                )}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowRepeatPass((v) => !v)}
                aria-label={showRepeatPass ? 'Приховати пароль' : 'Показати пароль'}
              >
                {showRepeatPass ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </button>
            </div>
            <ErrorMessage
              errors={errors}
              name="repeatedPassword"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </div>

          <Button type="submit" variant="contained" fullWidth size="large">
            Зареєструватися
          </Button>

          <p className={styles.switchRow}>
            Вже є акаунт?{' '}
            <Link
              onClick={changeForm}
              underline="hover"
              sx={{ color: 'var(--accent)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
            >
              Увійти
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
