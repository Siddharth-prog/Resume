import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faLinkSlash, faRandom } from '@fortawesome/free-solid-svg-icons'

import './footer.css'


const Footer = () => {
  return (
    <div className='footer-section'>
      <ul>
        <li><a href="https://github.com/Siddharth-prog"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkpJREFUaEPtmVlOA0EMRJOTAScDTgacDDAaS43HdpV7mSEo/CAlvdRz2b3lernxv+uN67/cAc52cKYDjxvMcwOln71vn31s/19mgc8AEJEiWsVWtL1+Nx6CGQGQidtoV4Tbtt0gPQAjEUeQZZAqwMyoRzAliArAEeIVioZgAY4UrxCycj2hnGMAzhBPO4EAIvFisURICxoFKvpe9wcZLxorTScE8BnMLNbq5NLEA22/lzZ2n7DC5Pu3YL5QZwaQpU7Uz+68np6sTRSw0IUMIBpMRCHnelMqm9O6/jNHJAQVrjtYr+qmXwbgrkp/CSCrAWEsAWSRoDeZDkekiLND4c55z4Gz0kdXqmglku+HAajdsSPybZfMhd38VQdWpo9CZBlAAWQROAIgK+ZhgFXLZ5tCaDX6lTVeCp3tAFpEhgCOKOJ/DTBcA+5aPLhs2u6lTdSrAVREK9MIpc9uFYzOQlkUVrmAAkfvxNIQnUmkzcw9gRHvnp6zi0l7JtHbFbpVVcuh8sbkBoy90LR5H10f2XfP9u5beY50tVaulC1ElGJMgTPpaZ3sulJ6tdAK9AqdqQs231uIrkt9dD7X85AI0XTQGoEPUVuf7MxPR5+9nNucZ9IEFTNaprU/dJR9XbAQcGBAwABQc7AAosdbffSFTvXax6yIAwFQ4tkUakWgrZ4NSOm8k7nJTmgvHNFPSux4HoC4Zx1FtTT0wua50QtAp4wlYifMIqE/0j0w7/nbQNJH2pcjvgIA2ryywQwHVuqDY98BYIgWN7h5B74AeFmTMe34xmMAAAAASUVORK5CYII="/>Github</a></li>
        <li><a href="https://www.linkedin.com/in/siddharth-gupta-982344280"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV1JREFUaEPtWVsOAiEM7J5MPZl6MvVkupPQZIMtC2tDIZYffjbQ6UwfWxaafC2T208BwJvBYGBkBs5EdCUi7J7rSUT31Q7sX6skoccAxrPBMP7SCuDt6fZaZ5cYCADGDIrOPsIAAuqWjMOOQO+xTABsjWeje4EwAaAx1iNeAgAkg1ycF5SpJAQQ2zhAlUbB67FMJNTDUO2OAADPQP8vwUXbWgCJ5euU+ipuzPgsSJCbxb16YsKAFMR5HEgXIU4AnAugJJO9ZOAKACDFdjhDUgLhCqAl+LWiOAyAPTa0/xB3ALk8pL4KTGkycgWgFTzJqJZvi3MhSYtHs5Dm1ZrzOH5cGZgegBaY0zAQANYu2DUGgoFgICXjmqyhdaPSjLXmvCHqwDAxIE2JeYrNnpKGsNqUu+Y8UwZa2mLrb03SqLVRLef9H4DpHzimf2Jq0afbt/HM6ub6dHEwEAz86IEPNMOKMSsOYKkAAAAASUVORK5CYII="/>LinkedIn</a></li>
        <li><a href="https://www.instagram.com/?hl=en"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAm5JREFUaEPtWTlOBDEQrH0DDyEmAmJ+gAh4ABkJEYcIyEh4AxK/ADISvsF+gBxoZEsty+2u9s7MMmJGWmkPH13V5T68K8z8Wc3cfiwAtu3BxQNz9cABAHntJwDyvve5SRNfftaUV+iJSugawFVoh/hgAST7UA8LQBgWwzdhmjJIDaKAMABqrGdXv/a4XRmZCREp1sg59NZnAHwV1FHMROlO40uyhCgBYT4egHJBl5FOw/U08cQzKyUPgGZ/DOZ3AJwCOALwDkD2+EyHWAcLk7gWAM2E68pO5s8APKi59wDO02dNXhcALZ9e9vPBtOL7HYALBeANwF76LDLK8839Wx7oBSDzrKhSGnIM4FEBuARwWwFgKqAFgHKh2jyS5DSQEwC7AD4APAFYpzUpCQ8FIGJ8xuzJsoxGVVuHAGAlOjEwaz/XTmUZ0gIxGYAy0bVyRQ2sReIkAEqDPFmIfNhENSgAi6XeRKdDpBVhJgcQKTMY45gxzaZes1vzALVBI0N7YZpan41C/wLA7CQk6mAOY01FZfTq9jArIYvdnn6BDb2DnoGWPCIdW2mUeGeriUwMqGXXXEboUqJ2KfAnSgkLhNfjeFl7YwnpA8pEmEhF6hlfIyVcjVIdUYVmC4jISa5h2EsrvU5XQ0Mt4OjEaylb0ykCt93UtwBQhSILQDZidOsdXPZ3JtH9ruXdC/UkKtZIaxzbL1AAynJhbE9EOjYaQC17ZiCZxfC9vqK/9T+DK1tPQnmfSIzfVEJ5PpN73DNQGjMFkNA1JuuBGhD5zrqBi3ghy0//1UTP7wVAbzD2wAXA2Ax76y8e8Bga+/fZe+Abntu2MfzR5rcAAAAASUVORK5CYII="/>Instagram</a></li>
        
      </ul>
    </div>
  )
}

export default Footer