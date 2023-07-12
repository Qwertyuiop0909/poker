import styles from './headerbuttons.module.scss'
import flag from './icons/FlagRF.png'

export const HeaderButtons = () => (
  <div className={styles.headerbuttons}>
    <button type="button" className={styles.mainbutton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="64" viewBox="0 0 76 64" fill="none">
        <g filter="url(#filter0_dd_6_2801)">
          <mask id="path-1-outside-1_6_2801" maskUnits="userSpaceOnUse" x="20" y="8" width="36" height="36" fill="black">
            <rect fill="white" x="20" y="8" width="36" height="36" />
            <path d="M44 42C49.5228 42 54 37.5228 54 32L54 20C54 14.4772 49.5228 10 44 10L32 10C26.4772 10 22 14.4772 22 20L22 32C22 37.5228 26.4772 42 32 42L44 42Z" />
          </mask>
          <path d="M44 42C49.5228 42 54 37.5228 54 32L54 20C54 14.4772 49.5228 10 44 10L32 10C26.4772 10 22 14.4772 22 20L22 32C22 37.5228 26.4772 42 32 42L44 42Z" fill="#242222" shapeRendering="crispEdges" />
          <path d="M44 44C50.6274 44 56 38.6274 56 32L56 20C56 13.3726 50.6274 8 44 8L44 12C48.4183 12 52 15.5817 52 20L52 32C52 36.4183 48.4183 40 44 40L44 44ZM32 8C25.3726 8 20 13.3726 20 20L20 32C20 38.6274 25.3726 44 32 44L32 40C27.5817 40 24 36.4183 24 32L24 20C24 15.5817 27.5817 12 32 12L32 8ZM20 32C20 38.6274 25.3726 44 32 44L44 44C50.6274 44 56 38.6274 56 32L52 32C52 36.4183 48.4183 40 44 40L32 40C27.5817 40 24 36.4183 24 32L20 32ZM56 20C56 13.3726 50.6274 8 44 8L32 8C25.3726 8 20 13.3726 20 20L24 20C24 15.5817 27.5817 12 32 12L44 12C48.4183 12 52 15.5817 52 20L56 20Z" fill="url(#paint0_linear_6_2801)" mask="url(#path-1-outside-1_6_2801)" />
        </g>
        <circle cx="38.1552" cy="21.8058" r="4.34951" fill="#D9D9D9" />
        <path d="M38.1552 37.0291C33.1793 37.0291 29.0279 32.1741 33.0993 29.3135C34.5409 28.3006 36.2812 27.7087 38.1552 27.7087C40.0292 27.7087 41.7695 28.3006 43.2111 29.3135C47.2825 32.1741 43.1311 37.0291 38.1552 37.0291Z" fill="#D9D9D9" />
        <defs>
          <filter id="filter0_dd_6_2801" x="0" y="-12" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2801" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_6_2801" result="effect2_dropShadow_6_2801" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_2801" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2801" x1="38.1553" y1="43.7087" x2="38.1552" y2="7.82524" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDFC" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button type="button" className={styles.mainbutton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42,5" viewBox="0 0 76 64" fill="none">
        <g filter="url(#filter0_dd_6_2806)">
          <rect width="32" height="32" rx="10" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 54 42)" fill="#242222" shapeRendering="crispEdges" />
          <rect x="1" y="1" width="34" height="34" rx="11" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 56 44)" stroke="url(#paint0_linear_6_2806)" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <path d="M48.0046 29.6671L47.5226 29.2455C46.8781 28.6816 46.5959 27.8252 46.5959 26.9688C46.5959 26.1125 46.8781 25.256 47.5227 24.6922L48.0046 24.2706C48.1193 24.1702 48.2014 24.0364 48.2399 23.887C48.2785 23.7377 48.2717 23.5799 48.2205 23.4345L48.1996 23.3728C47.7819 22.1773 47.1559 21.0692 46.3522 20.1021L46.3104 20.0523C46.2128 19.9348 46.0827 19.8504 45.9373 19.8101C45.7919 19.7698 45.6379 19.7756 45.4958 19.8266L44.8932 20.0461C44.1 20.335 43.2233 20.1519 42.4959 19.7233C41.783 19.3034 41.2097 18.6497 41.0626 17.8355L40.9352 17.1308C40.9077 16.9788 40.8357 16.8391 40.7288 16.7301C40.6218 16.621 40.485 16.5479 40.3365 16.5203L40.2738 16.5085C39.0669 16.2852 37.7951 16.2852 36.5882 16.5085L36.5256 16.5203C36.377 16.5479 36.2402 16.621 36.1332 16.7301C36.0263 16.8391 35.9543 16.9788 35.9268 17.1308L35.7951 17.8585C35.6491 18.6651 35.0823 19.3149 34.3762 19.7311C33.6507 20.1588 32.7771 20.3403 31.9857 20.0522L31.3663 19.8266C31.2241 19.7752 31.0701 19.7692 30.9246 19.8095C30.7791 19.8498 30.649 19.9345 30.5516 20.0523L30.5099 20.1021C29.7075 21.0702 29.0818 22.1781 28.6624 23.3728L28.6415 23.4345C28.5371 23.7314 28.623 24.064 28.8574 24.2706L29.3699 24.7183C30.0068 25.2746 30.287 26.1208 30.287 26.9665C30.287 27.8121 30.0073 28.659 29.3712 29.2162L28.862 29.6623C28.7474 29.7628 28.6653 29.8966 28.6267 30.0459C28.5882 30.1953 28.595 30.3531 28.6462 30.4984L28.6671 30.5601C29.0872 31.7549 29.7068 32.8593 30.5145 33.8308L30.5563 33.8807C30.6539 33.9981 30.784 34.0826 30.9294 34.1228C31.0748 34.1631 31.2287 34.1574 31.3709 34.1063L31.9938 33.8795C32.783 33.5922 33.6556 33.7757 34.3785 34.2031C35.0857 34.6213 35.6541 35.2701 35.8005 36.0785L35.9314 36.8022C35.9589 36.9541 36.0309 37.0938 36.1379 37.2029C36.2448 37.3119 36.3817 37.3851 36.5302 37.4126L36.5929 37.4245C37.8116 37.649 39.0597 37.649 40.2784 37.4245L40.3411 37.4126C40.4896 37.3851 40.6265 37.3119 40.7334 37.2029C40.8404 37.0938 40.9124 36.9541 40.9399 36.8022L41.0676 36.0954C41.2145 35.2822 41.7865 34.6286 42.4989 34.2097C43.2276 33.7811 44.1053 33.5982 44.8996 33.8875L45.5004 34.1063C45.6425 34.1578 45.7966 34.1637 45.9421 34.1234C46.0876 34.0831 46.2177 33.9985 46.315 33.8807L46.3568 33.8308C47.1645 32.8546 47.7842 31.7549 48.2042 30.5601L48.2251 30.4984C48.3249 30.2039 48.239 29.8737 48.0046 29.6671ZM38.4357 30.9069C36.1821 30.9069 34.3555 29.0376 34.3555 26.7313C34.3555 24.425 36.1821 22.5557 38.4357 22.5557C40.6892 22.5557 42.5158 24.425 42.5158 26.7313C42.5158 29.0376 40.6892 30.9069 38.4357 30.9069Z" fill="#D9D9D9" />
        <def>
          <filter id="filter0_dd_6_2806" x="0" y="-12" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2806" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_6_2806" result="effect2_dropShadow_6_2806" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_2806" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2806" x1="-1.70874" y1="15.8447" x2="34.1748" y2="15.8448" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDFC" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </def>
      </svg>
    </button>
    <button type="button" className={styles.mainbutton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42,5" viewBox="0 0 76 64" fill="none">
        <g filter="url(#filter0_dd_6_2809)">
          <rect width="32" height="32" rx="10" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 54 42)" fill="#242222" shapeRendering="crispEdges" />
          <rect x="1" y="1" width="34" height="34" rx="11" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 56 44)" stroke="url(#paint0_linear_6_2809)" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <path d="M29.4028 27.3165V24.4411C29.4028 23.31 30.3198 22.393 31.4509 22.393C32.4356 22.393 33.3987 22.105 34.2218 21.5646L34.7853 21.1946C37.6464 19.3157 41.4496 21.3681 41.4496 24.7911V26.4032V27.0962C41.4496 30.503 37.6346 32.5182 34.8207 30.5979L34.2552 30.212C33.421 29.6428 32.4345 29.3382 31.4246 29.3382C30.308 29.3382 29.4028 28.4331 29.4028 27.3165Z" stroke="#D9D9D9" strokeWidth="3" />
        <path d="M44.7197 30.5778C46.7565 30.5778 48.4076 28.5283 48.4076 26.0001C48.4076 23.4719 46.7565 21.4223 44.7197 21.4223" stroke="#D9D9D9" strokeWidth="3" />
        <defs>
          <filter id="filter0_dd_6_2809" x="0" y="-12" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2809" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_6_2809" result="effect2_dropShadow_6_2809" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_2809" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2809" x1="-1.70874" y1="15.8447" x2="34.1748" y2="15.8448" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDFC" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button type="button" className={styles.mainbutton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42,5" viewBox="0 0 76 64" fill="none">
        <g filter="url(#filter0_dd_6_2814)">
          <rect width="32" height="32" rx="10" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 54 42)" fill="#242222" shapeRendering="crispEdges" />
          <rect x="1" y="1" width="34" height="34" rx="11" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 56 44)" stroke="url(#paint0_linear_6_2814)" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <rect x="33.7876" y="21.9548" width="8.51241" height="8.6545" rx="4.25621" stroke="#D9D9D9" strokeWidth="3" />
        <path d="M42.6587 17.1456V17.1456C45.086 17.1456 47.0537 19.1133 47.0537 21.5406V21.5949" stroke="#D9D9D9" strokeWidth="3" />
        <path d="M42.6587 35.165V35.165C45.086 35.165 47.0537 33.1973 47.0537 30.7701V30.7158" stroke="#D9D9D9" strokeWidth="3" />
        <path d="M33.4292 17.1456V17.1456C31.0019 17.1456 29.0342 19.1133 29.0342 21.5406V21.5949" stroke="#D9D9D9" strokeWidth="3" />
        <path d="M33.4292 35.165V35.165C31.0019 35.165 29.0342 33.1973 29.0342 30.7701V30.7158" stroke="#D9D9D9" strokeWidth="3" />
        <defs>
          <filter id="filter0_dd_6_2814" x="0" y="-12" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2814" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_6_2814" result="effect2_dropShadow_6_2814" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_2814" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2814" x1="-1.70874" y1="15.8447" x2="34.1748" y2="15.8448" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDFC" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button type="button" className={styles.mainbutton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42,5" viewBox="0 0 76 64" fill="none">
        <g filter="url(#filter0_dd_6_2822)">
          <rect width="32" height="32" rx="10" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 54 42)" fill="#242222" shapeRendering="crispEdges" />
          <rect x="1" y="1" width="34" height="34" rx="11" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 56 44)" stroke="url(#paint0_linear_6_2822)" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <path d="M38.1467 36.0989C37.2594 36.0989 36.54 35.3796 36.54 34.4922V24.1474C36.54 23.2601 37.2594 22.5408 38.1467 22.5408C39.034 22.5408 39.7534 23.2601 39.7534 24.1474V34.4922C39.7534 35.3796 39.034 36.0989 38.1467 36.0989ZM38.1556 19.6844C37.6467 19.6844 37.2087 19.5167 36.8419 19.1812C36.475 18.8399 36.2915 18.4309 36.2915 17.9543C36.2915 17.4718 36.475 17.0628 36.8419 16.7274C37.2087 16.386 37.6467 16.2154 38.1556 16.2154C38.6704 16.2154 39.1083 16.386 39.4693 16.7274C39.8362 17.0628 40.0197 17.4718 40.0197 17.9543C40.0197 18.4309 39.8362 18.8399 39.4693 19.1812C39.1083 19.5167 38.6704 19.6844 38.1556 19.6844Z" fill="#D9D9D9" />
        <defs>
          <filter id="filter0_dd_6_2822" x="0" y="-12" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_2822" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_6_2822" result="effect2_dropShadow_6_2822" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6_2822" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_6_2822" x1="-1.70874" y1="15.8447" x2="34.1748" y2="15.8448" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDFC" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button type="button" className={styles.langbutton}>
      ЯЗЫК
      <img src={flag} alt="Flag" />
    </button>
    <button type="button" className={styles.signinbutton}>ВХОД</button>
  </div>
)
