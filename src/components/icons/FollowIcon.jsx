import React from 'react'

export const FollowIcon = ({ styles, handleClick }) => {
  return (
    <svg
      onClick={handleClick}
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      preserveAspectRatio='xMidYMid slice'
      viewBox='0 0 60 60'
      style={styles}
    >
      <defs>
        <clipPath id='__lottie_element_2'>
          <path d='M0 0H60V60H0z' />
        </clipPath>
      </defs>
      <g clipPath='url(#__lottie_element_2)'>
        <g display='block'>
          <path
            fill='#FF2B54'
            d='M24 0c0 13.255-10.745 24-24 24S-24 13.255-24 0s10.745-24 24-24S24-13.255 24 0z'
            transform='translate(30 30)'
          />
          <path
            fill='none'
            d='M24 0c0 13.255-10.745 24-24 24S-24 13.255-24 0s10.745-24 24-24S24-13.255 24 0z'
            transform='translate(30 30)'
          />
        </g>
        <g display='block'>
          <path
            fill='#FF2B54'
            d='M0-9V9'
            transform='translate(30 30.125)'
          />
          <path
            fill='none'
            stroke='#FFF'
            strokeLinecap='round'
            strokeWidth='4'
            d='M0-9V9'
            transform='translate(30 30.125)'
          />
        </g>
        <g
          fill='none'
          stroke='#FFF'
          strokeLinecap='round'
          strokeWidth='4'
          display='block'
        >
          <path
            d='M-.125-9V9'
            transform='rotate(90 -.063 30.063) scale(.92974 1.00419)'
          />
          <path
            strokeLinejoin='round'
            d='M-.125-9V9'
            transform='rotate(90 -.063 30.063) scale(.92974 1.00419)'
          />
        </g>
      </g>
    </svg>
  )
}
