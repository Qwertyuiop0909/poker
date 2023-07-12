import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import styles from './main.module.scss'
import { Switcher } from '../Switcher/Switcher'

export const Main = () => {
  const [state, setState] = useState(false)
  return (
    <div className={styles.mainwrapper}>
      <Switcher state={state} setState={setState} />
      <Outlet />
    </div>
  )
}
