/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './signinform.module.scss'
import google from './icons/Google.png'
import facebook from './icons/Facebook.png'
import apple from './icons/Apple.png'
import yandex from './icons/Yandex.png'

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form className={styles.signinform} onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Электронная почта или никнейм:</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChpassword}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {/* {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null} */}

      <label htmlFor="password">Пароль:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {/* {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null} */}

      <label className={styles.checkbox}>
        <input type="checkbox" name="toggle" />
        Запомнить меня
      </label>

      <div className={styles.verification} />

      <a href="#">
        Восстановить пароль
      </a>

      <div className={styles.bottomformwrapper}>
        <button type="submit" className={styles.submitbutton}>Продолжить</button>
        <div>
          Вход с помощью:
        </div>
        <hr />
        <div className={styles.bottombuttons}>
          <button type="button" id={styles.guestbutton}>
            <div />
            Гостевой аккаунт(только просмотр)
          </button>
          <button type="button">
            <img className={styles.leftimg} src={google} alt="google" />
            Google
          </button>
          <button type="button">
            <div />
            Apple
            <img className={styles.rightimg} src={apple} alt="google" />
          </button>
          <button type="button">
            <img className={styles.leftimg} src={facebook} alt="google" />
            Facebook
          </button>
          <button type="button">
            <div />
            Yandex
            <img className={styles.rightimg} src={yandex} alt="google" />
          </button>
        </div>
      </div>
    </form>
  )
}
