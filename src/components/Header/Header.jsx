import { HeaderButtons } from '../HeaderButtons/HeaderButtons'
import styles from './header.module.scss'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.topborder} />
    <div className={styles.logowrapper}>
      <div className={styles.logo}>ЛОГО</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="424" height="114" viewBox="0 0 424 114" fill="none">
        <g filter="url(#filter0_d_6_2798)">
          <path d="M21.7597 1.94106C18.7407 -3.39199 22.5934 -10 28.7216 -10H395.278C401.407 -10 405.259 -3.39197 402.24 1.94107L354.689 85.9411C353.269 88.4494 350.609 90 347.727 90H76.2734C73.391 90 70.7314 88.4494 69.3115 85.9411L21.7597 1.94106Z" fill="#1A1A1A" />
          <path d="M21.7597 1.94106C18.7407 -3.39199 22.5934 -10 28.7216 -10H395.278C401.407 -10 405.259 -3.39197 402.24 1.94107L354.689 85.9411C353.269 88.4494 350.609 90 347.727 90H76.2734C73.391 90 70.7314 88.4494 69.3115 85.9411L21.7597 1.94106Z" fill="url(#paint0_linear_6_2798)" fillOpacity="0.4" />
          <path d="M21.7597 1.94106C18.7407 -3.39199 22.5934 -10 28.7216 -10H395.278C401.407 -10 405.259 -3.39197 402.24 1.94107L354.689 85.9411C353.269 88.4494 350.609 90 347.727 90H76.2734C73.391 90 70.7314 88.4494 69.3115 85.9411L21.7597 1.94106Z" fill="url(#paint1_linear_6_2798)" fillOpacity="0.1" />
        </g>
        <defs>
          <filter id="filter0_d_6_2798" x="0.709961" y="-26" width="422.58" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2798" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_2798" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2798" x1="212" y1="-10" x2="212" y2="99.7166" gradientUnits="userSpaceOnUse">
            <stop offset="0.494792" stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint1_linear_6_2798" x1="212" y1="-10" x2="212" y2="99.7166" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.52" />
            <stop offset="0.526042" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <HeaderButtons />
  </header>
)
