import { memo } from 'react'

const TransactionIcon = () => {
  return (
    <svg
      width='27'
      height='25'
      viewBox='0 0 27 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.6324 24L26 16.7928H1M8.36765 1L1 8.20724H26'
        stroke='#146f9d'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default memo(TransactionIcon)
