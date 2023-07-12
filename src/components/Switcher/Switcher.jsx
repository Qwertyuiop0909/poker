import styles from './switcher.module.scss'

export const Switcher = ({ state, setState }) => {
  function clickSI() {
    setState(false)
  }
  function clickSU() {
    setState(true)
  }
  if (!state) {
    return (
      <div className={styles.switchbuttonwrapper}>
        <button type="button" className={`${styles.switchbutton} ${styles.signinbutton} ${!state ? styles.choosen : ''}`} onClick={() => clickSI()}>
          <span className={styles.switcherspan}>ВХОД</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="272" height="70" viewBox="0 0 272 70" fill="none">
            <path d="M15.3292 1H228.582C232.232 1 235.645 2.8107 237.691 5.83336L268.494 51.3334C273.439 58.638 268.206 68.5 259.385 68.5H12.7105C6.38692 68.5 1.36533 63.1811 1.72868 56.868L4.34738 11.368C4.68235 5.54798 9.4996 1 15.3292 1Z" fill="#242424" />
            <path d="M15.3292 1H228.582C232.232 1 235.645 2.8107 237.691 5.83336L268.494 51.3334C273.439 58.638 268.206 68.5 259.385 68.5H12.7105C6.38692 68.5 1.36533 63.1811 1.72868 56.868L4.34738 11.368C4.68235 5.54798 9.4996 1 15.3292 1Z" fill="url(#paint0_linear_6_2839)" fillOpacity="0.2" />
            <path d="M15.3292 1H228.582C232.232 1 235.645 2.8107 237.691 5.83336L268.494 51.3334C273.439 58.638 268.206 68.5 259.385 68.5H12.7105C6.38692 68.5 1.36533 63.1811 1.72868 56.868L4.34738 11.368C4.68235 5.54798 9.4996 1 15.3292 1Z" fill="url(#paint1_linear_6_2839)" fillOpacity="0.1" />
            <path d="M15.3292 1H228.582C232.232 1 235.645 2.8107 237.691 5.83336L268.494 51.3334C273.439 58.638 268.206 68.5 259.385 68.5H12.7105C6.38692 68.5 1.36533 63.1811 1.72868 56.868L4.34738 11.368C4.68235 5.54798 9.4996 1 15.3292 1Z" stroke="url(#paint2_linear_6_2839)" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear_6_2839" x1="138" y1="0" x2="138" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient id="paint1_linear_6_2839" x1="138" y1="0" x2="138" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_6_2839" x1="138" y1="0" x2="138" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="0.854167" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button type="button" className={`${styles.switchbutton} ${styles.signupbutton} ${state ? 'choosen' : ''}`} onClick={() => clickSU()}>
          <span className={styles.switcherspan}>РЕГИСТРАЦИЯ</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="270" height="75" viewBox="0 0 270 75" fill="none">
            <path d="M270 14C270 6.26801 263.732 0 256 0H46.4161C41.8054 0 37.4903 2.27015 34.8786 6.06983L2.57354 53.0698C-3.81128 62.359 2.83914 75 14.111 75H256C263.732 75 270 68.732 270 61V14Z" fill="#131313" />
            <path d="M270 14C270 6.26801 263.732 0 256 0H46.4161C41.8054 0 37.4903 2.27015 34.8786 6.06983L2.57354 53.0698C-3.81128 62.359 2.83914 75 14.111 75H256C263.732 75 270 68.732 270 61V14Z" fill="url(#paint0_linear_6_2842)" fillOpacity="0.2" />
            <path d="M270 14C270 6.26801 263.732 0 256 0H46.4161C41.8054 0 37.4903 2.27015 34.8786 6.06983L2.57354 53.0698C-3.81128 62.359 2.83914 75 14.111 75H256C263.732 75 270 68.732 270 61V14Z" fill="url(#paint1_linear_6_2842)" fillOpacity="0.1" />
            <path d="M256 1H46.4161C42.1347 1 38.1279 3.108 35.7027 6.63627L3.39764 53.6363C-2.53113 62.2619 3.64429 74 14.111 74H256C263.18 74 269 68.1797 269 61V14C269 6.8203 263.18 1 256 1Z" stroke="url(#paint2_linear_6_2842)" strokeOpacity="0.5" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear_6_2842" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient id="paint1_linear_6_2842" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_6_2842" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="0.854167" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>

    )
  }
  return (
    <div className={styles.switchbuttonwrapper}>
      <button type="button" className={`${styles.switchbutton} ${styles.signinbutton} ${!state ? styles.choosen : ''}`} onClick={() => clickSI()}>
        <span className={styles.switcherspan}>ВХОД</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="259" height="60" viewBox="0 0 259 60" fill="none">
          <path d="M0 12C0 5.37258 5.37258 0 12 0H224.256C228.416 0 232.28 2.15509 234.466 5.69509L256.697 41.6951C261.633 49.6898 255.882 60 246.486 60H12C5.37259 60 0 54.6274 0 48V12Z" fill="#131313" />
          <path d="M0 12C0 5.37258 5.37258 0 12 0H224.256C228.416 0 232.28 2.15509 234.466 5.69509L256.697 41.6951C261.633 49.6898 255.882 60 246.486 60H12C5.37259 60 0 54.6274 0 48V12Z" fill="url(#paint0_linear_6_2718)" fillOpacity="0.2" />
          <path d="M0 12C0 5.37258 5.37258 0 12 0H224.256C228.416 0 232.28 2.15509 234.466 5.69509L256.697 41.6951C261.633 49.6898 255.882 60 246.486 60H12C5.37259 60 0 54.6274 0 48V12Z" fill="url(#paint1_linear_6_2718)" fillOpacity="0.1" />
          <path d="M12 1H224.256C228.07 1 231.611 2.9755 233.615 6.2205L255.846 42.2205C260.371 49.549 255.099 59 246.486 59H12C5.92487 59 1 54.0751 1 48V12C1 5.92487 5.92487 1 12 1Z" stroke="url(#paint2_linear_6_2718)" strokeOpacity="0.2" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_6_2718" x1="134" y1="0" x2="134" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient id="paint1_linear_6_2718" x1="134" y1="0" x2="134" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_6_2718" x1="134" y1="0" x2="134" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="0.854167" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button type="button" className={`${styles.switchbutton} ${styles.signupbutton} ${!state ? styles.choosen : ''}`} onClick={() => clickSU()}>
        <span className={styles.switcherspan}>РЕГИСТРАЦИЯ</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="270" height="75" viewBox="0 0 270 75" fill="none">
          <path d="M256 1H46.4161C42.1347 1 38.1279 3.108 35.7027 6.63627L3.39764 53.6363C-2.53113 62.2619 3.64429 74 14.111 74H256C263.18 74 269 68.1797 269 61V14C269 6.8203 263.18 1 256 1Z" fill="#242424" />
          <path d="M256 1H46.4161C42.1347 1 38.1279 3.108 35.7027 6.63627L3.39764 53.6363C-2.53113 62.2619 3.64429 74 14.111 74H256C263.18 74 269 68.1797 269 61V14C269 6.8203 263.18 1 256 1Z" fill="url(#paint0_linear_6_2721)" fillOpacity="0.2" />
          <path d="M256 1H46.4161C42.1347 1 38.1279 3.108 35.7027 6.63627L3.39764 53.6363C-2.53113 62.2619 3.64429 74 14.111 74H256C263.18 74 269 68.1797 269 61V14C269 6.8203 263.18 1 256 1Z" fill="url(#paint1_linear_6_2721)" fillOpacity="0.1" />
          <path d="M256 1H46.4161C42.1347 1 38.1279 3.108 35.7027 6.63627L3.39764 53.6363C-2.53113 62.2619 3.64429 74 14.111 74H256C263.18 74 269 68.1797 269 61V14C269 6.8203 263.18 1 256 1Z" stroke="url(#paint2_linear_6_2721)" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_6_2721" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient id="paint1_linear_6_2721" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_6_2721" x1="136" y1="0" x2="136" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="0.854167" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>

  )
}
