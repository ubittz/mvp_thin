import { SVGAttributes } from 'react';

import { COLORS } from '@@constants/colors';

interface GNBIconProps extends SVGAttributes<SVGSVGElement> {
  isFill?: boolean;
}

export function KakaotalkIcon() {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='28' cy='28' r='28' fill='#FEE500' />
      <path
        d='M28 20C29.9888 20 31.8283 20.3429 33.5184 21.0286C35.2085 21.7143 36.5447 22.6467 37.5268 23.8258C38.5089 25.0049 39 26.291 39 27.6842C39 29.0774 38.5089 30.3654 37.5268 31.5481C36.5447 32.7309 35.2106 33.6651 33.5245 34.3508C31.8385 35.0365 29.997 35.3794 28 35.3794C27.3698 35.3794 26.7191 35.3394 26.048 35.2596C23.1343 37.0519 21.5833 37.9589 21.3951 37.9806C21.3051 38.0097 21.2191 38.006 21.1373 37.9698C21.1045 37.948 21.08 37.919 21.0636 37.8827C21.0472 37.8464 21.0391 37.8138 21.0391 37.7847V37.7412C21.0882 37.4582 21.4606 36.2791 22.1563 34.2039C20.5766 33.5073 19.3224 32.5839 18.3934 31.4338C17.4645 30.2837 17 29.0339 17 27.6842C17 26.291 17.4911 25.0049 18.4732 23.8258C19.4554 22.6467 20.7915 21.7143 22.4816 21.0286C24.1717 20.3429 26.0112 20 28 20Z'
        fill='#181600'
      />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='28' cy='28' r='28' fill='#010101' />
      <path
        d='M34.0494 27.3193C34.0399 25.5643 34.8337 24.2396 36.4405 23.2641C35.5414 21.9777 34.1833 21.2699 32.39 21.1312C30.6923 20.9973 28.8369 22.1211 28.1578 22.1211C27.4405 22.1211 25.7954 21.1791 24.5043 21.1791C21.8358 21.2221 19 23.3071 19 27.5489C19 28.8018 19.2295 30.0962 19.6886 31.432C20.3007 33.187 22.5101 37.491 24.8151 37.4192C26.0202 37.3905 26.8714 36.5632 28.44 36.5632C29.9607 36.5632 30.7497 37.4192 32.0935 37.4192C34.4176 37.3858 36.4166 33.474 37 31.7141C33.882 30.246 34.0494 27.4102 34.0494 27.3193ZM31.3427 19.4671C32.6482 17.9176 32.5287 16.5069 32.4904 16C31.3379 16.067 30.0037 16.7843 29.2434 17.669C28.4065 18.6158 27.9139 19.7875 28.0191 21.1073C29.2673 21.203 30.4054 20.5622 31.3427 19.4671Z'
        fill='white'
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29 57C44.464 57 57 44.464 57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29C1 44.464 13.536 57 29 57Z'
        fill='white'
        stroke='#E6E6E6'
      />
      <path
        d='M39.9157 28.8728C39.9157 27.9892 39.8447 27.3444 39.6909 26.6758H29.6953V30.6638H35.5625C35.4443 31.6549 34.8055 33.1474 33.386 34.1504L33.3661 34.2839L36.5265 36.7553L36.7455 36.7773C38.7564 34.9027 39.9157 32.1444 39.9157 28.8728Z'
        fill='#4285F4'
      />
      <path
        d='M29.6252 39.2734C32.513 39.2734 34.9373 38.3252 36.7081 36.6898L33.333 34.0825C32.4298 34.7106 31.2176 35.1491 29.6252 35.1491C26.7968 35.1491 24.3962 33.2885 23.5405 30.7168L23.415 30.7274L20.1135 33.2754L20.0703 33.3951C21.8291 36.8794 25.4419 39.2734 29.6252 39.2734Z'
        fill='#34A853'
      />
      <path
        d='M23.6348 30.7725C23.4079 30.1089 23.2765 29.3979 23.2765 28.6633C23.2765 27.9286 23.4079 27.2176 23.6229 26.5541L23.6169 26.4128L20.2567 23.8242L20.1467 23.8761C19.4181 25.3217 19 26.9451 19 28.6633C19 30.3814 19.4181 32.0047 20.1467 33.4504L23.6348 30.7725Z'
        fill='#FBBC05'
      />
      <path
        d='M29.6524 22.1242C31.6665 22.1242 33.0251 22.9893 33.7998 23.7123L36.827 20.7732C34.9678 19.0548 32.5484 18 29.6524 18C25.4572 18 21.8342 20.3939 20.0703 23.8782L23.5384 26.5566C24.4085 23.9849 26.8159 22.1242 29.6524 22.1242Z'
        fill='#EB4335'
      />
    </svg>
  );
}

export function NaverIcon() {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='28' cy='28' r='28' fill='#5CA847' />
      <path d='M18 20V37H24.9643V28.4948L31.0246 37H38V20H31.0246V28.4948L24.9643 20H18Z' fill='white' />
    </svg>
  );
}

export function LeftArrowIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11 5L5 12M5 12L11 19M5 12H19' stroke='#0C0C0E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function LogoIcon() {
  return (
    <svg width='98' height='36' viewBox='0 0 98 36' fill='none' xmlns='http://www.w3.org/2000/svg' xlinkHref='http://www.w3.org/1999/xlink'>
      <rect width='98' height='36' fill='url(#pattern0_42040_130)' />
      <defs>
        <pattern id='pattern0_42040_130' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_42040_130' transform='matrix(0.00212766 0 0 0.00579196 0 -0.00390071)' />
        </pattern>
        <image
          id='image0_42040_130'
          width='470'
          height='174'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAACuCAYAAACLHCxCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDk0NUEwNzk4MkVCMTFFRjg4QURDMEJEQjFERkJDMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDk0NUEwN0E4MkVCMTFFRjg4QURDMEJEQjFERkJDMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTQ1QTA3NzgyRUIxMUVGODhBREMwQkRCMURGQkMwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OTQ1QTA3ODgyRUIxMUVGODhBREMwQkRCMURGQkMwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgv4c9sAADWiSURBVHja7J0HnFTV2f/vuW3ubEUQ6aACsUSaNbxooqKGIFhiINhAzWsjSsKbV+NryxqNMbEDKogKovjqWvK3xBg1gkoSfEUFW1CkRUEBBbZOue1/nnPvmZ1dgd1lZ3fuLL8vn8OdtjPnnvY7zynPYb7vKwAAAADIDSqSAAAAAICwAgAAABBWAAAAAMIKAAAAAAgrAAAAAGEFAAAAIKwAAAAAgLACAAAAEFYAAAAg2ui5+BLGGFISANCu+L5PDQ0Fn7c5cBkH2rOswWIFAHQ+ZsyY0XfUUUedyB+eZ6jGNMMwruaCeh0P/9O/f/9ps2bNOveII444Yd68eT1D0QUgOsrc1gAAAG1lyZIlpaNH/+CIww8/dLqmKJVxXV0R09TNVsxIa6pCyukbuuqrTDz2+GtJ/nwTf/weD0/uN6Dff3fv3mX4ggULipGaIJ+6CGEFAOSVO++8s9dp48dPZEx5kYulQwJaYsV8U2U+F1gR6DUSV11jvhRZ09DENWbqQnDpyt9L8NeeGjRo31NnzLi5O1IXQFgBAHsMkydP7tO/b+8buBAu56FaWKGhkFIoMg1x5Varb7CG1+kxiS5d44buZ/8NfTYU5K0xVV3+vSMPu/yxx+b2QGoDCCsAoFNz2mk/GsgvL1gxI2ONktVp6ZqvZ4kqiSSJpXwtW2DpdSnA9Hfy81J0w8/ZZUXx544acdTBSHUAYQUAdMYGS50wYcIQxpSVmsZsOaxLQc0STQpkjca1QGgpmOFViKze+D2DB0tVG71Pz83gu7glzBYPHjx4OHIAQFgBAJ2K008fN1JV2TJppWYvSKLn2UO9WiiSMcbEVQqnfC7FVj6nq9lEYM3QsqVhZsMwlh457MjvIBcAhBUA0CnglmqfeMx8l0RODuPSEC4Jqa60b9ACAXdjGvvr4/PnD0RugPYUVpYLYYSDiPzx61//unzTpk3xoqKiPMeknocgDtwy8H/4wx9uHzt2bAo5BIhXXqksH3PixLt1TZ3sup7w7lBSXKTU1tUrHdF6UBPl8R/VuGlsWdbM6vrENOQK2JWwtqm8QVgLG50pT1mx2EmJZGMN83L8O2oLvlfXVVEgXddPWPH4tEQi8QRyCBC99ul2zubN39zHda2EBM6KmUo6nVao+VH5i57XviNf9O2Grim24ypxK1btu97lten0o7zt8pA7INfCiqHgAqdfn14vynmp7CDmq3IYmvte2l9I82V05aHuxz8+7VzkDiAuuuii/rqifCqHf7NX9MqtNB0xFEzDzsUxU87jvnXF1Kk9kTugPXRRRxIWOGFPv2n/xs95QZNDHOHPsqbWqsY/45C1Kp5bpoW8AcK/bzweP6u0tGS/6ppahRun3EJVeTkJDEWHXztivCtmGkoqbYvHNBzsev4Rz73y0k/507uRSyDXwFdwgbP33t2UKAzEp9NOKLCqYpq68tjjjyNzgLJ48eI+yWRyHBdVrShuCVElMY3FTEXXguaHhoLbv3zaQtRpKNgNOqNs9ao15998M7wzAQgraEJNTW2qJdYpWZptCb7SODR937JMxeNGiON4QmSLi2GxAkWZOHHi9/jlKCtmsvpEMmOpJlPpzDRSR0wniTlWw8g8Ly6KK5qm9lm6dAn2tgIIK2iSgWrLFl+wdg7JZJo3XBpvrALrw07amHwHSlFR0QjGmE5CmhE4XRPWIy1YIqvV66CS4vGeH/0u/WZdfYIEveyF517EvlYAYQVNeuIRWtNIDVdmdaeGvAGKsnXr1kObduwcx83M2bsdNMca/JbbSMR5WTV1Qxu1cePGIuQUgLACAAqCrl277h+FnQNkpYqtPSxYMCUaP/7Ett3vX3311WXIKQBhBR2OtDZ2VZBUPwxILsCpqKgoWr9+fSRES2yDUILV7bQqmALtvzdNvfe/li8vRW4BCCsAIPJ8/fXXXbh4admLhvIFrQQmMfXDx3J1suu6TC8u7obcAhBWEFnLNVOwXKTVnk6co+s6s207EvEhgZc7e2jbDT2kfdeely5GboFcEikHEStWrCg+/PDDB19yySVs5syZ4jXygVtfX5+ziiUr+aABgxSTd6Tr+HPqT4tX+X9GEX/GX6PP0Wtd+O8fOHTo1meeeWY9igsALSeZTIp6FIvFFDeVf7fRqVRa+AwOHUSIvbS25/JGEH5yQCcW1quuumqI4zgvzZ49m5mmKXq6/Dm95WtMzTavmxpNza6O8HxP0fzA162u6cra9Z8phs6F1rHFNfBx6wZeYTzyJ1okFjds2rhR+WTNWvJ5e1FnsDZz/V3YUwN2YbGmeH3yU1xU893QSD/BNMdqaEEdpy1A1B7wFiaB3AKdVli5kOqMsXISUxI6gwugnU4rukpHFXttasQZ/0ffS1e5SlE+pysJKi1vkAcKJJKBlazx3x46dFh82fJ3CypjaRGRdDuoQv1AHqitrd3O65VL27Dy3rZwUZVuDbMf67pKkduK3AI5bX+jFBnL0hXfo31tvpgL8V0n2A7pucq3ff/sfvA8N7S4vv2a6zqN9tzR6+++H31RzY5ztrhmi6rfDiH792kPqxBzNfen64DC4957763lndYa6rRGoX6QW0OyXEVdoDMzRefa2zx16tQq5BbotMLa1OJSlJYvlumAelkwtEdkSTA9nA4IWsmAAQNWR2EfayxcmSwFNW071DH0i+LW6ycOHVqNnAJ7hLACAAofbrF+FIV4JG07PPe1YSzFNHS3LpH8vx5Dh9YjpwCEFQBQEHAh+7uqqg4tXWB5HPGgqSVXHrGoBKM63Hrdfvsf/rCCMYZVCADCCgAoDK688sr3XNddruR5AbkXujOkK82z0qqNlONuqUkkPkIuAQgrAKBgmD59+roRI0Y87jGhZXmzWq2YmXHAHw4Hu3369p5fUVHxFXIJQFhBYzCMBSLOsGHD/swYq5YL4LJDR1Ef7lk1LVNxgsVUn9x66+2VyB0AYQUAFBzz589fqfj+7/nDmnzGo6jIEucGc6qP+f6oGZMmDd6A3AEQVgBAQfLgvIfnlRSX/JUOmaHVuWQ0isBbIBoj1uhYN6VhIlZVG8zZlgwf09+ZpiGu2d9FfyuviUSSrq5hapU/+clP5zN2uI2cARBWsIMWxcfuUhB5pkyZ8s1D8x+ezh9+RI7vTVNX4vEYOVRTYjFDnDRDPnxpYVGwLcbPCKrXgskO0mHypCT8APPvilsx4V1JLlrS+feSqPPw2hVXTL952rRpKeQKgLACAAqaM84444t99+v/SzNmLE+lHaU+kRICm0rZYv7T5ipI7gZpW4wfCipd6ZDy5pACKv82kUwFvr+ZItyV2rbrWXHr3Wuvu+5XN91021rkBoCwgl3lYBqJAAqFNWv+/bdBg/a/jAvqxwqNBIfuDumiaSwQQpZ1GDl/j6zZlliscisN/Q1ZrPR35Ps7zdWWX5b//OcXnXfjjTd+gFwAEFawS5jvY54IFBQffrjyH/PnL5jYteterySTaUfXVSXbTz8JpOsFB2IYht4iF530N2TZOo4rhpLJYiV830/GTP3diht+e96tt96NPasAwgoA6ISdQcb8s84666O5c2ddykVzBhe/OrJWxaHjoUAKkeQWJ/n0zV7ItDPk52kulUSZrF1utSaGDjnkuntn33369ddf/wE8LIGOAif8AgDywhlnnL1mzpw5Vz333HNPf7Ly4zM3bd70vfqa+n25QHY1WjKx2lisheHKLdYtlmWtL4rHFo0YfuiTf33ttff4ezhsCXQsfrhUri0hV4wbN+ZoWh1Pq/G54kcmqKryaFTz7zv7DVig8TgaTULO04C1LF/oM7xJrDM17RzULtAa5s6d2/fkk394QpFl3sDL9HpDV724oftaC8qnyZSN/Pr77x5wwHGPzJnTC6kJ8qmLkbVYs72y4KDuQiuUiuIyFwkBWsWFF174Bb9QeHXGjBk3v/nmmwMNw+jnO35P3lx1X79+bdnbb7+jDxw40DnssBHVKdv+Smdss+b7a78zZMj63/zmNzYN95578cVITACLdUcWa9MAi7VwLFYe6jRNgcUKANgjdRGLlwAAAIAcAmEFAAAAIKwAAAAAhBUAAACAsAIAAAAAwppTNGwvBwAAUIjCmkw6imFomefkJ9THHtaCgLKJXM+J8y/JGbqmIVEAABDWfOMkEnS8k2iYqYFOp52MwILoo+u6cKZOJ5Wc/7P/RIIAACCs+Wbx3/8eCqkmfH+SuGYLLIguJu/80EHTBIlr3159kCgAgD3TyIhSZIYNO1hZ+a9PM0JKJ14EDXV44jGILF547hd1iuiMzeq66nb5nWXLlhnbtm0rKi/X44mEajhOnamqGr+qhu/7mqZ5akOcNJ8xx+WFx/E83TYMlyu/5ZhmOl1fr6b499ROnDgRvhcBaGOdrKmpKa6uri4yOVdcMS2+eXOVkU6ntXg8LhpxcjVZVVXllpbG3LFjT3POOuvHdixW7mzdutUpKyvjH00nTjrpnwnGKjrFipZICetHH32s+DxZTVPPiCsdJcVY3qMGWW8GOrKLTvei8zAZc3kemjn77vPOO69LPG6eaNvO8JEjj+zv2F45f7mMhxgPlq6rcc/3Yywoz9mTu+Ry2vGZkvZcP+X7SpK/RmZ1goe6mGl8c8op477o27fPCs9jb8yePXszchKAFsEuvfTSIb7vjj3h+OMOrKqu2TteZJUn6pNx3n6X8k6uxTvbem1NFaM2nPe1qddrf7Ml4cx76KE0D3ROrs0/l07bLtXHal1Tt0+efM7nZWWlHycS6b89+OCDWws2daLkK5hztMYzgNa/UIhbpm8amnicT1/BhqI8EtX8i4qvYFNl4hSSMO/qfltx3W75Cp4xY0ZZSUnJceXl5Vd069btEcMw6BzN7TQjYOiqG56e42eXkx35lm4aZDkS96CxzHNexlz6bh5qDY39u6ys+NWysqJZxZY1+Zorrzx80aJFmOAHezyVlZUlJxx77NFcNK8pjluVvL58yUPCihkOnUIk62JxkZWpl/y9oO3m9Y2uXEgzj6ltl58risdkfaTvcXndTvNQW1Ic39ilvPS1kqL4rK5du/7suuuuG0XxKARdZLkQxvfff7/4lltu+Q/eQ+nCeyUKBdd1RZDPuakvrBj5Hj0nTP58yZIlypYtW5TaROJAnqC/5Y2p+IzjBKMCtBgmzycqvnHkUUfNNCyLvf7668IkKikpV8acPEbcE92L1oZVsDRMQt9TVVWllJWVOfPmzXuesZYdD0PCunrt+nPVdjax5WlDOztpiFYEiwOmg6Hg+quvuebi66+veLSFhZide+65Az/88MOTly9fPpr//dFUlihp6P1YLKZ4rq14vDzQMZ007CwXuNGwM1nLLYWsai/rHuRgiMa/l+b1bW5x03xxmh4oykYe3jz+xNHvdu/eYzEX+g9nzpyZQjPbOu6///7vvvbaawfJui/qPS/viURC+eSTT5SPPvqI6g+T75100kk+b0jFY/pMPB4P2pJMXvE656ZF27Fly1bl5ZdfprGtXY9rZbVDJ598Mq+/JUrfvn3X3H777e/k6j7nzJlzIL/PIfJAdYoz3SddeTllL730krJ169ZMG9hwP/S8uW9v5gPU/vCPDBo0SBl+2PAgzdKueHnfgQM/qaioeH937mn8+PEHrlmzZvSqT1ae5Lvuf/C47k31RBxAz4IFi/Q4bsWUZDKVaXvoPbovqkZ06Lz4XNpu1C7R61R/6TOUeUZQ775VT1WdPuN5xcXFW1Kp1FJePpbxjvfiAw44YBm/r2R7CWveLdZnn312EE/s93jiUWzI5Bc9EVMPeiwaU8VVCXsodOXNmG9oeuY98Tm1sWUhezksAmeyijioQdyKrHgQR34PMv50bW3ghSpzpTQJ06+KF5ziQrNYtdBqlRbrr//7v5q1WOfOndvj6KOPPoE/fJr/TVKWG1l2qHxkygb1hmOmuMY0VVzlOZ1GC08/os9R0MLHlq5lvkcG+m75Gbof+TiMx6fjx44989FHHz2YN6IGJLPF3MTLuEvlnOoMCU92OyDzXV55x1rkPb1PV/E3ZAGZsUblQ9ZJUYf4Z3YVWFi/6O9kO1RUVPRALm+Sdw6voT4oxZ/iRL8TM8xMW5HdhtBV3o9sB3fZVrTk/vh30nfJ35Chf79+d7bmPh588MHSnj17Hsf18ykavqV2WdYDGYpMI1P/ZH2k+iLbAnmOLtUxWfey6xgFPasOZ3+v/Kysn3p4b0rYzsr84+WJOr7/PXv27INffPHFWJQs1pwI60vPvjSI3+h72Zmp7SCwJtemDVrThpoSWGZWVEJ2Y54dd20n97yrkJ0ehq7Ka6uEdeCA/nOFYLSzsLYkXWRF4PGpu+7qq3cqrIsWLbJ6du/+I0PX3tA1tpmFaciyKqTW5DvNMOjhNcYayoWlqnLIPvN69uezP9vG+/P4tZ5X/o/5dfakSZP68fIPgW2GE0444UYa0JAds9Zec9k5lJ0/UWc0NcfCevY1NKDClPaJf0vKqGwvqd7INmr06OPvaqGYGOefffbBPP5Pc4NmAxmN0sCJQtu7k/KR5Nd/Gaoy/6qrrtqX34MeBWHNyXYbz/C4taly015TjDBoYdBZEMjsN3jIvmYHGs6TTgZ0XRNDAzQUIIYXtWjsCvIzQ7fBMAcXhmDBDo+7toN7yg46axyapocYlxeLf7zWRioSe5Eov4LR08ZDrU0/NmrUqONOOP64Zzd/veUZx3GP8V2/uxHmP+WyHAoqicdFOjnhMJGX9TvyccwwFI0+E65IpjJI6UjOKbysz7k5mO4QQ1UaxUiJp9P2QUVx6+InH398hcnYAwcOGjQS8rlzFi9eLKYQ5DRCa6+5IvO9SuNrzuqAz61HP+v7/Y5tm+TQrB/WRSr24jW1+dWfBxyw/+FcTB+av3Dh0ng89uN02ulNt1RSEo9MOdpJ+Yjx64G8CZhy+x9ueSuma3NGjhw5JO9xzcm3pEgAPR7cbwXHDwIJ5K4CzZ2ZwtOSn2mgs4Ur7wmVVThJOCiOjtMw79Hc/VHj3ig0fd/1FdPkQqEXppdJ0SHieUh5Rte66urs3p96/vnndx869JDL333n7Tn8dk+MxUxazZvpHWph+tJcDT2qTSR4ufHFvAt9t/DCxQKxpPpE7yVtW1xFupGpwN+hHLFdV3yGiYZGy8l8Mwl4IpXKeJSqTySpvO7F4zN5zZrVjxx00AE3Tp06tSdt+YGUNsZxHBbRqHWq1f4kpDytG4Q+TPVEKu3vxCpTL7/88u6HHHLwrz79ZM0jtu2ew+tkqZwrpe2OdTWJgvB7yzu61C7v47reBW/9858Ljxg+/Bfcgt2L1m/kIz65WfEYox49y/Tsd6cMC4uFizMLfeLRRS5SiYZwkDXkiviREMittSpZnyzca9uMxbPr7+eCwIXC9Qq1UvuZfKR7nXXfrMx7+3Tr9pNt27f9D+9ADOXJpRYXx5W6uoTYVkWr0oI/9cXfJcJKTQJLj8mCZaLjEiyWIOH2RCeuQYylYwrZGaPRhGQqHeQR7/yooZvFtiCtXlp0oquBiFMjpgWLtgau+vTTaz9Z+ckZ995776yKiorZPMDDtGxkaO2AAycv7do+sawRPuFalGVG0ix9x329SZMmja184ok/8IcHU120w9GipnXF0GnkKNp9EOroMiWziHLIivdX3Pnu8uVnVFV9PZ2//E6H50euvzB7CK41WDEzY/mxLCvQDxvLfEMWqiy4qhj2Zpk4NieqsluRHTLpFa4xL3SfyDJtqOcoOhy8u/HojBllA3r3vKK6avvdvKAN5/VTpcHUBBdVndbVp51MB4XqLdNVUXZoFWA9tw7psc4rPKVPjFulcqRADJtnjRLIhkUKH4mq7Mz4itKmFdvZFqtlmiJONDoj3DeG90xxC+ZWlIMMXb1lxl133PrQQw/1Q3OfsViRCB0EyzJUpEHQtEGurKyM9+jR46fP/b9n7+HF+iD6CPXoaS0zrbwv4XXYpBVLbiDStlMYjRONXMn2gNdPSopRC+cvXNijR7dTyYlFwQmrXVvbZnNbWhhShOgxfSkNK9pO/p3jyCHOjFVGphdrPOTS1mEcxljBVmhKGwrUc1SFK0q/+3nTpl2/YeNXv+Pp1TMjgKoaVgIzGK7N6lRJN5au2zBSkU47Lu+Ffs2t+ZX8pXc0jf2DqewfvK1Yzn9vHf/bOrGIgQtd8LvB2AmJnR52yHJRfshiTabTwlqlUQqykoV1rLJGFrPjeKXbq6p/OW3aZQ9ee+21g9HUN+Q5aEdBDddt+GGHU3QG1WD72Gdr12aUkVbPnnPWWdO3bNp8XzKV7E99VLllTdZDqsNu1tCZWiDNktyuxUS7IeqkWpdIHFC9tWremDFjzuvQ9jAXX1LSrZvNc24jv6HybMt1h12ppi+HWW4ampK2Xcs09F4sbLh8JTJiU5ty3C2mQetMueVKc8de0C/x6E6ZxoXAa1FPMtuCzX5AhZsKBr/f2u9+97tesDevgKwS18tUZm7Bm2nH+wXPy55p2zGYyEeeVjyNPF7RDd3IWJVUFerDxzxZPUM3a9J2emtZefm/Bw0a9CpPi+euvvrqGp4uadNxXMc03ZqaGsWyLJ1WMb7yyivxOffOOWblp/86O27FByWSiX1UpppJbg37YeJaMUuxU23b7mbSPjxuednhQik1nKqgRowaJLLKuP3NiwKj+XK1rrb+hDtuv+1/991331+tW7fudTT9oD0JFj82tDJi0STtj/UcZevWrwNL9Z57Ss4/9+xpvKJdzWj3Wni4CU23UCdR1kla6yKHhWWnP/LWalacZYedOvrUQeD3t1fy669/36N7d+u3N900++KLL7YLQljLy8s33nrbrVO5MFit/Vu5+SjFrYHHn3zy0Pfff38hpYsWrpSVw355ZvG5kyf/avDgway0tFRJ1aS4RUQxT4l460VFvhK6DXC0YKGG7uqZ4kivxTK9Kn2HxZR/k0gLZlne9OnTk3feeWdBVWwza3O3pqk6F9r+VNCpcIsV3z65PJROGGzxmISWOitcSGkFOe+c+U9f+LMLntpv8OAP+vXrt27ixInpd955R1mwYEFzP08b4BfUbd9+yMx77z2F6+90/t1luqaHQ8NJpa2DwSSqaqioclM7tTgkqtkNUpLuWRcVmiUSycO++GL97BEjhlzw3nsf/BPNP2gvPLEa2c+M2gTTJMG6hB49erHtNZ8p/3nFFb+sq6+/kretxVJQZdtK5TlLiDJOHeRoTNSNVhlnJbTYWbjolToMtlhnoXbbsuXra2+4/gZyW/pEh/R0ouLScNyYMUdrEdqzWgguDQf2739fVPaxZu/nlS4Os1+PG2b4ntzvKvaubuzds/esY4455ge33nprcQ7Ksz5u3Lij9+3X/2VdFb2czH7h7DhlO5xoiYOJ3U1XMuB5eO+BBx44ZA8eCr6Rp4UbhbosywDlOS+Xc3N5n5PPOedq/r2eluf99dmOGqjulcTjM8uKrbMtXdue7XwhTINMemhN9r9mO3GQrkTlvlbp0IdcFEo3hfK1bHej8r28533oNIN37ddeeOGF/9HeuojJj5aM3SOVmh95MI3McLAeugdsupCCVj3HrbjYhsWtSVqa9szlU6desPGrjZe9+eabr19xxRV1bY0H/13nhRdeWHLyKeMvdD1vMVnEZB0HK4ODHr0ZDoGlQkuznYe6KBmGX3bZZZdXVlZiKw5ot0Imy7Jo3KUl63nkDvQ79XXJ63ndKCfLNpiu8YLFd6FVR49p9EUu0uSf8Xi9/YZ/xd80TX2If+HvfE+5il9/zX/rel7F7+Yfe9R1/cU8fGWaukcnW9FMCYWSkiKxXYe2EeoR2UJILRJPg/7zHnjohiuvvLL3HmSxjgstVraDkEePHyos1pb2mkvj1rc8J4lecIN7QsfU9T8NHz581KpVq2LtmTZ//vOfv8Mvb/PeqpftNi3bu1NHePaiXr5hGKlYLDaH3MXBYoXF2hF1UWvwYGfz+/aky0BZ/skilelBlmVojX5jGsb84447buzChQv3+vzzz+O0loH2Z9Oe0DCoNDLEg0nvr169unz06NFDjxk16peGbiyiQy2+5cIxIulRYsXp6haZ1ryKigq9vXQRwgphzak7NemCkCqv3sR9o6kbvMKpCx9++OFuHZE21AjwBuLH/GG9pnzb36ne1B9pOw9F8XhsPfjgg0+FsEJY23tIeEcC29T9qKwPJLbU4eXhzf0H7H/GjBkzdrvDu2DBgn169eh1F+9Ib5XDweQvOe/TeUzl9xnzpb4YqraO3+cIDAWDaDee4VBrxq2hF7iopGHXwIOWWlu+V5d7X3jxhUunTJnyTYcM/TDmL1q06Jni4uJnxRB1uCWnYbhayflWLraDIKYTPHHSyV4rV66c+cc//nFP24bDUEM6NqEZC0PWe/G4KVbhi4kZKv+6cP3pJ9L2V+Vdym54orLy2DXr1zw9bdq03T7BafLkyZs3frVxep+efcfypys0VXNpcWIUSKVTYjiYBso9z+0/fdovL6M9ve3SHqIoomHIFXLvMQlpthvKlOOmGLcOHnjggevGjh1b3dHx4sL6FBfUWrEKkjV2TRm0MR2TvfTbvMPR45577pkA14egI8oby3Qk6Qi+QOBiMUNJpWzFtl2qATUTJp7xi/vvf+C2iRMnujn6XX/dhnVLf1NRcYnn+ytMbrHmOy2C3SXBFiS6xswYbZg7a/as2UdAWEGkRVUU4LAQS7/BXMycXr17XvfYY49dceqpp9bkI26vvPLKS4MGD3oxsKSla0Ivq3e/+8K6I+t0R9CBFOG5veaGDRv+59BDDx2FUgNyJhxZVqqsj3KaTngpUxpOdCVRJUxTW33yuHE/rqx8upKLaiLXcaqoqFh62umnTeBNwMdRSCFxgIfnCXEl65VjbavaNoXmjCGsILKQmMpDE6gA29xS7dqly+y77ppxf656w7vDsGHD6oaOGP66XA2cfbg50RGHPIiV0FxcPVe4ZCz595p1P82Xg3DQmS1UllkRHKyhCURXHqROPoFDAU4f8/0f3PH888+3q/OSZ555Zk15afnNHlO25DVtwn+0d95xHfGYHNUsX/He6EOHDj2qcwur7gS+hlmDV10WBpBnizT0abxL8SBHECw4so1f/fIuXf/8yOOP/4aLalW+46+qxuvkvIHuQbQxGlMcP3BSzlpgke7KUmguZCqa5wgfrCSutbVV4zkjULJAboQjGI3xQl/rrGkZDl90XHGASJKp2rxXX33tPtqe1t5x21a97bH99h8402eqqHsqFzRRB9Xg5Cl9F77gW9LutNRi9RUvK23oXAib0mXAio8+mJhrqxUWK8gJwakyqrDMaN8o7ym/8eDsB68cM2bM1ijEr7S09FPD0FcFR8mpYn9dsOfO75Bumy5ORQr3DdIJHK7X+68vvnDR2rVrLZQe0N6dYqaowq0oKUpJScmfZs2adX1HxmH06NEPuL63mdoG6XmNPJhln+OcN3xl3A033JDTeghhBTlBnE8r/QVrmnLooYf+8/RJp6+OSvzuv/9+Xp+dJ2mxsnQwTos4OmoshJz40wk54bFWIpl4XE5ctOj5UpQe0O7i6gcHh7iuu37OnDk/v/TSSzd35O/z39wUi8WeEfEIh2RJYC0rFoXTywb94x9v/ADCCiIJnaFKPpSpwowZc1Lk4nf7bbe9p2ksJQ+tp0UczQ0F58xipUMWwsUkNBctjrNT2YD77pt/PEoO6BBx9bzU/vvvP/uss87a3tG/zUXd69q167PcUt0cHLupicMx6Mxlz8v/0cUffvjR+ZWVlWanFFYs5ihsqJKEq+0iSfeePbe5rl8bjwdb18SQsDhft/2LnZPVeJBlLxyee762bNm7U9qyIR+AFgmbIg6PWHLttdc+RNth8hGHxx57bPGgwYP/IZ0o0OEYYT3Ie/p8uXHT/ppm94LFCmQORmL3NR1wHlhjuvAHnEymI5dUmqZt5Z3lqtra+uD0Cyfwk9oRRxM2OIoI/RWbprRe9yu3rAEoyHnSmz3lRnkZHzly5MMXXHBB3lbnHnfcccl999v3b+L4SB6Ki4ozncz8tw2s179Xb+gLYQXSzI+EgtHhyA2WayIjHFHCMIxabjjWk3Nw0RkoshrNDbdrNvFg8TQRDtB92qyfFJ0RLu7dFj71FIQVtHMz4X8+derUvB/yHNNiS+XjuvrgzI2OqH/N4bp+96uvvTZnjvkhrCBnXX9NrHaVK/y8yMWxqqqqzjC0BK0IpunOVCoYtpb7W9ubZDpN4h64f6TnySQNR+/18ssvQ1hBe2J7in/bmWeeuTnfETloyEGrmMI+U4MVyh1W91pgseqO6+RsYQiEFeQM6dWIRXSErbS0tM623YSq0r5W0UsVMZUHtLd3x4MCHVXnh64fw+03tK5pIFwcdoDVpiiNDg1hnWgkOOMbmDV4YdLFNIcoZ5vPmTRpWb7mVrO55ZZbanmMnqbmgo50zD6gPM8WK1M1daySo+kBCCvYk6jtsU/3elpHJMQtbITyPcfD40JO+SGsYPc7tb4UWCbLVOZs1ZhlbDjsqKM+jkI8efzcW37/+xWe7yWyXst7vGghYzrt9JgwYUJOhoMhrGCPgdwqDh0+tJ7cutFKYLkaON/L/Xkl7KN88QWEFbS1gxY6m1cyZZuswX59+304ffr07VGJZ3lZ16/otCs69YaGgqMwxxqOZLDS0tL+nU5YozBUATo3xUXFtbbtiGHgqPSYeUwGbInFIKygje1ng+UqoTn9vn36VEUpnnWpus3cYq2ledaGNRn5hdoDslqrq6tzsuUGFivYo0jbTl3WNFtUZtnKNE1DXQS7TdN5SrneITxRKVKTydwqJKFPkoc22n4WhTlW0SnxPPb222/3hLAC0EpMXaunniljDQtZIrBBvXjKhAlwbQh2G+GAX54vnNVHo9ccx41UXDds2PA1Ga7koS1qrF+/vg+EFYDWNkBcR8kxhDxSi0WkL+/H4wchd8Bulx9peVGjrgYuM8kQFEGN1urniooK2vS+iZzJBB2B/M+CBG2BSKdyCCsArUTX9dS3KlQE4sV8f1/kDtjthjwsxOGQZkO54i94UYyvqm2k+VVakd8R2912Gg+/Id1oy42masWdTli3bdsmblALnZRTiJkmTmMthIqtsjDPgn+e40Uynr7telpY8NUWWKzZZ6q2bwIqe6EUgd2FhnxprlKuDJYIF5oRjO+hIw5dT+0EnTSlsoZ93k3PkqU6quagAjatx9m/JX9DTA95fnzRokV626tzhHjrrbcUWSaED1clmHwH0UfOU9JKPzq1Iu04SJRWYGhaHKkAdnvEQwkE9dtOMBRFj6J70Zixik7CEkPWqpr3tJMizlMwtmXLFqNTCSu1xbTHkObAaHMzJTrZPTHDQM2JODSko7Lg3Ec6tcLUdSRKK+AdEZxwA3ZfHAIPS42ttNAKSyQS0bOwU97nNGRNohaFfaxZmCUlJZ1LWKktTqedwB0Xb6ilH8mUbaPmRByqHNmLa2NFFhKlFfDOI3oiYPeFys+2XBvEll7/8ssvo9cRMNk3tmP7EdxlpnPBb/Nqqkjd1VFHjRI+XMWRXryhdsLhRF3FGqvI95iVYPieDjA2dEP518crkSitaRg9rzPfHpZJdJDVKtc6iMY9bDe/+mpT5OJ69913p3RNd6id16K1allLp9NtFpxIKVZpaalC7Ytcfi17Yb6PelkILScN37ueq9D+tD/96WkkSiv46KOPkQigTR3bnbWVyWT0hoK7du3KjSfHoZHJiLXvzLKsNutipIaf5LQc9d7VcM5AFQILYS0EqOepqbroKafTKSRIK1i9eg0SAey+hURHNnp+oxW1sh2NIpZvUaPuSgMqQhaeqiWTbU61yC1eIu9b4jgvFjhJpytktTB6zFSxyVpNcVE1TcyxtgbDxBQraEP9y9o31rCQUL4Zwam0eHBsn+NGV/w7lcUaiGr22Z7hhDzqzk6JgpMDP5NXQUzS6SQyphW4nXuOFbR3+XG9TBtAlmrUB/l8X2wOclUlOk5acmr2okgCAAAAEFYQwnwGTwwAAABhBbnCU5Qojrli5B406v8hCQCEFQAAAAAQVgAAAADCCgAAAEBYAQAAAABh7YR42P+4W0RtNY0Kf9gAQFgBAJ1a6wEAEFYAAAAAwgoAAABAWAEAAAAAYQUAAAAgrAAAAACEFQAAAICwArDnELVTArDXBgAIKwAAANCZ+rcQVgAAAADCCgAAAEBYAQAAAABhBQAAACCsAAAA9hA67WJ4CGuhl0zGHKQCAABAWHdIMukohqFxsVBEoLXYTGUKThzdOZ7iJenqNwmgsECeAdB50KMUGcMwHNt295zxArTJAAAAi7V9hVVJaRpTVB4rNVRT1/OhHAAAACCsu0Mq5dV4nu97nqJ4foO1qmuYCgYAAABhbTXHHnvsN/zisCZjv74PmxUAAACEtdX87Gen2JrKvtS4hUpDwVJfXQ/CCgAAAMLaarp3Pzjtuv5Sx/HEUDDJqWHoSKfCA+vNAAAQ1ohgx+Kxv6uq4sqWWVUjEUUdRQUAAEDBCStjzL/jjts+8X1lG1mrmsqUZCqdWSGcL3h8ihctWgRxhUkNEx8AUHAWq+I4qfW6rm+lx7FYTApuvhOp2xdffNEdxQUAAEDBCavvm2tt2/mMHtcnksJqzffiJf7rPV/5y1/6obgAAAAoOGGdNm1a6qjvHT6HjFeyUw3DiEK0eix84gkIKwAAgMITVmLkyGFLDF39F9mpNMdqxcx8R8lyXXcwigsAAICCFNa6Oq1GY9qrMdMQ/vfT6XTe4xS34kNQXAAAABSksN5///32qFGjXkul7SoRyQhsueHifhSKCwAAgIIUVuLMKVNe7bJXl8f4Q89x83twnOrzSHjufmPGjJmEIgNAJ2lkANjTyvz555+fvOHGm25Vdf0zIasaU+hAOY8p4urzmDNdDc5s3cVuHKbkZo+gqenqq3995dxXKivLUWx2UJDCRKaziPK9Pao1+H7HnLvX3Dm5rodTh8Ge1maonfbkskh3Jn/+859/3rdfv9t4S13lun6mIbSsYDETuT40DV3piN04juuQth8x5bJfYkgYAABAYQort3y811577ZE+ffo8Tc9JUA1DU5LJtEIdfDq7NW07bbIUWhwX/s/x3L3r6qp/XVFRgdEtAAAAhSesxH777Zc8/vjjr1eZ8jwXVM+2XSGosZihkBUbM40OcXlIw5tWzGK1dbXfX/rmmxf6vg9xBQAAUHjCSixYsGDDT047/Toupp9yffNJUFMpW8ytJtK24nTAULDne4pt2/RQW/T66786ZezYYyNh1XsKJucAAADC2nqe+NOfVow/5bTTfF9ZYZq6TztwaL6Vhob583b/fUPnFrLnKrqmM8dxBr/wl7/MPumkkw7jlquWV2FlrBbFGEQZ9PwAhDXCVFZWfjZu/PgzS0tK/+J5YnGw4vEH6bQjVgt77Tgk7Dh2ILBcyMOh54FLlrzx+MiRR06aN2+ehaIEdqsC+kFQlE67QBIACGuU4daZ+/zzz69cOP/hy7i2Pa3rqkPDwjTn2t6IQ9d1TUkkU2IVMhdYNZVMDnpr6dsPXnzRf957zTVXfu+OO+6Io0gBAMCeTUGeMXrS+PHr/vnWW1PHjv3RVzXVVZNt2+0irUla3ETQ+KymqQo5l6AtOY7jNNqWI/a3smBREp2e05w0M2G1upnPebYrvyPGXz/35t/98UT+O/8aMWLoHFV13j766BNTF110kV1SUtLIEuEWdostE1VVGQ/Jfv36JXb2Gc91xX26eXaiQXcV7Blmiu/D+GotVF6dztp7p3mbPO/T1Xmn2HbCtkENyqhw6OZ2jjSWW8epHvp+w/598dj3Ihpn1mnHafTCLESMsuObVatWXTlu3Ji/rFq1+mZedoZxUVW5FSuGh32xHUcTwkpbcqgyqaHzAl3XlVTaDgudL4Z226gFlI59+e/0/eD9D0ZzK7rm3Xc+3njPrBlbuWingqEBtiMjWGo2rxB+o9d13aDhZ7ZP9x7P8qczdtpomcE94qDswsZ1Ou9MpMc7tfkeGiNRpREnahvkMZRyb3ynSGO/wREOtWfUmZGdbZW3g4qDmW4IawsZPHgwidZLd9999+oH586d8sGHH57nuUpvMkBpsRGtGCYLioTUDedISUhJVMtKS5S6ujpRyXx/970zhfNjmaHilOOqlmWWu65bTtazFHrWjKGqhb1O6gyIys/ja3JLdPvWLSt3+XeqpugRsFhB2+jatSvbvHVrp7w30zIVJ5n/gzR4ncwIkErq04l6o01vhSxyjBvlcZSmM9zEL37xi1UrPvjgutPGnT7J973/5S/VUyUicaXiZXORIouVhoRpSIiora3N9FwNve0Le6meCgHlV3JgQaJKq5XJQm6JNUzxouhQz5rEVQ6V7NV1r133xO20+F1Q2PTo0b3TtoPpZDrv9xa3Yo1Eleq+53euepM9HNxoxsmDxMJi3e1CJYaHl6xYseK9Sy655DbXdk9d9s6y8fy1IUXxIiOVqOeVKZjFIoGl4WFyLkE9O3qci84rVVaLfyftdxWF23Yylbm5ok2CSvEha5qGcagjQK+lUqld/l0yXEyFoeDCZtWqz861dO04nufCWZjsXEl7RJbdvNWvZgpw9733VuLFcSWdSiubNm2SbTkLp1n6KnkuolRPRN0P6xgRM2O+nUx1ivLji849EyNy0n+6xtsRat86WwcCwpoHhg0bVscv71G446Y75v7hrpsnbP7669G8mTqav9aFKjoJKQ2fygqWixovO4VpIYzBfC5ZqvQ74v1mrEr6LC2wovjR4e7SknadXa+uqNpWlYs5YpBnHMftxbOwl67pYuoimUo2Lh957jk19/O8jilWjZnpVFInkcozdTajUD79TDo3dK4TnURUs5HWuOjou17g0hUWa8fnQ2e+uf+69r82fLVly93//vzziadPmHDIgH37T+dl7P942VvnuF6Si55PFUzNgU9EElD6Lj+0XGVZpuFcWlwkLNhdBBoKpr8zDEMpiluiMaLhbHL+v0tLl38mgqKKmtxKtLADRvktRdU0TLKqxDoBud81X6El5Z86hGRpU22iTmuUTjmiTqpYixAKfSiwnWagJ+i8+GIImIUdfZltRSXFqGCwWHPc0w6GiGm7ygYe7lpw332PKcXF/c+fPHmg7XojVc87w/WV3tyiVcnBhDh7tcm1RUoSDimr4RYe+RoN51KFbs5ipa08NPwbWNF2prGKxWJKfcre6d/16tVD2fDlJrH4qS3x36U1zr79uOnvsPAKSd1NizVc2a1xi1Wsaqeyw60/uQSFFUD8qfzK0SCKP72mh1ve8h1/qoeqHnReGHVibVcZOGh/5dPP1uT0d4SjGl9pVB87qJ3LWKpyXRY9LS6KK/v07KF8luP7zGV6qTs5ujHX6Zf9fTv7vVy1X7qyhzH50ks308gVD8t45X9y4sSJV/IGrHc8Hh+ybt26/Zcve3eQo3j7OLbdy7LivZOJRFdN1cp4Y6fuqn0LdJMX7kbH6bDQqvSbbRpp+I8WWZF1QpWE5kV8Rnvvmpkf0QwxoSJ7qJ7y7WvLTEy/WfvTb/KSPMu0YVU1UwzTUNLpdCT2Lu7UeuGWYNpOixXVFE9Kdz+0EKWY0XvkwlLJvJ5u1kSX9VJlSqO5dbKWnGbyUQ07Y7IDJjtnTJGdtGjPk0mLSS7ik6/R42BASG22Y7pr4fCb+fvmyjfVESbqgxfmBXVIc8ljjz+uMFVXfM8Jzoz2g45Sc6NOuSDYi89E2c0e+a2pTyju519GrrxMmTKFTgsL2glqv3bQVmS3X7lY49zc2cumGQvWtBS33cLf44S1SS+P8o1azHVhENCxcEceeWS3N954o+/MmTO78sa2C/PVMtX3u/KMifNGoojaS18ct660dkkx27HFaivlZV3EamUqZPS4uno7v5a+WVtfv9Mv4x2CDyzLmiHnjnba52q2XPpteFfJ7A9OJBLi+qMf/ejvzz//fBTzfCkX1UVcLHvzfBV9ex5f33PFIQuMhuJJ5KjSx83AkVYymVA0fdfCQPtQLSsWfj5Fi2R8gzeqNm9U7bQt9iU3l37N9LcLvLa1etaJNRbu3WtYPWpP+TfpRoznS5JpejCHzYU83aVLlyW05S5XjBw58q2lS5fO5GLh83opOpjUYaDfbG+L3edthlzw1rAnnimlJaVK1726Lvps7WeRKg2XXHJJLW9fZ/Nyb9GUl2bozatiW9KnmfdpZJDKAr+uqqqqqm9zOwMvOQAAAEAeu5EAAAAAgLACAAAAEFYAAAAAwgoAAABAWAEAAAAAYQUAAAAgrAAAAACEFQAAAAAQVgAAAKBj+f8CDAB6ywi1iDp8/QAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
}

export function SearchIcon({ color, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z'
        stroke={color ?? '#93979F'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M20 20L16 16' stroke={color ?? '#93979F'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

const gnbColorGenerator = (fill: boolean) => (fill ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_200);

export function GNBHomeIcon({ isFill = false, ...props }: GNBIconProps) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      {isFill && <ellipse cx='21.3333' cy='9.33333' rx='5.33333' ry='5.33333' fill='#FAF5D6' />}
      <path
        d='M5.33203 12L15.9987 4L26.6654 12V26.6667H5.33203V12Z'
        stroke={gnbColorGenerator(isFill)}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M12 21.334H20' stroke={gnbColorGenerator(isFill)} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function GNBSearchIcon({ isFill = false, ...props }: GNBIconProps) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14.6654 24.0007C19.82 24.0007 23.9987 19.822 23.9987 14.6673C23.9987 9.51266 19.82 5.33398 14.6654 5.33398C9.51071 5.33398 5.33203 9.51266 5.33203 14.6673C5.33203 19.822 9.51071 24.0007 14.6654 24.0007Z'
        stroke={gnbColorGenerator(isFill)}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M26.6654 26.6673L21.332 21.334' stroke={gnbColorGenerator(isFill)} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function GNBMessageIcon({ isFill = false, ...props }: GNBIconProps) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M28 15.3334C28.0046 17.0932 27.5934 18.8292 26.8 20.4C25.8592 22.2824 24.413 23.8656 22.6233 24.9724C20.8335 26.0792 18.771 26.6659 16.6667 26.6667C14.9068 26.6713 13.1708 26.2601 11.6 25.4667L4 28L6.53333 20.4C5.73991 18.8292 5.32875 17.0932 5.33333 15.3334C5.33415 13.229 5.92082 11.1665 7.02763 9.37677C8.13444 7.58704 9.71767 6.14079 11.6 5.20004C13.1708 4.40661 14.9068 3.99545 16.6667 4.00004H17.3333C20.1125 4.15336 22.7374 5.32639 24.7055 7.29452C26.6737 9.26265 27.8467 11.8876 28 14.6667V15.3334Z'
        stroke={gnbColorGenerator(isFill)}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function GNBMyPageIcon({ isFill = false, ...props }: GNBIconProps) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z'
        stroke={gnbColorGenerator(isFill)}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.668 18.666C10.668 18.666 12.668 21.3327 16.0013 21.3327C19.3346 21.3327 21.3346 18.666 21.3346 18.666'
        stroke={gnbColorGenerator(isFill)}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function UserIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width='22' height='25' viewBox='0 0 22 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_42005_3986)'>
        <path
          d='M10.8865 11.8451C13.864 11.8451 16.2778 9.43681 16.2778 6.46601C16.2778 3.49522 13.864 1.08691 10.8865 1.08691C7.9089 1.08691 5.49512 3.49522 5.49512 6.46601C5.49512 9.43681 7.9089 11.8451 10.8865 11.8451Z'
          fill='#E4E5E7'
          stroke='#E4E5E7'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.18196 24.0434C2.09858 24.0434 1.21973 23.2494 1.21973 22.2706C1.21973 17.0031 5.56923 12.6953 10.8871 12.6953C16.2049 12.6953 20.5544 17.0062 20.5544 22.2706C20.5544 23.2494 19.6756 24.0434 18.5922 24.0434H3.18196Z'
          fill='#E4E5E7'
          stroke='#E4E5E7'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_42005_3986'>
          <rect width='21.2522' height='23.9652' fill='white' transform='translate(0.260742 0.130371)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function RightArrowIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M10 6L16 12L10 18' stroke='#303236' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.18202 3.33301C6.86638 3.33301 6.57782 3.51134 6.43666 3.79366L5.83366 4.99967H3.51884C2.49609 4.99967 1.66699 5.87023 1.66699 6.94412V14.7219C1.66699 15.7958 2.49609 16.6663 3.51884 16.6663H16.4818C17.5046 16.6663 18.3337 15.7958 18.3337 14.7219V6.94412C18.3337 5.87023 17.5046 4.99967 16.4818 4.99967H14.167L13.564 3.79366C13.4228 3.51134 13.1343 3.33301 12.8186 3.33301H7.18202Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <ellipse cx='10.0003' cy='10.8333' rx='3.33333' ry='3.33333' stroke='white' strokeWidth='1.5' />
    </svg>
  );
}

export function MessageIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function DownArrowIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M18 10L12 16L6 10' stroke='#93979F' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
