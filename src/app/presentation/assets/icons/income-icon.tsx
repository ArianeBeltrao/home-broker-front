import { memo } from 'react'

const IncomeIcon = () => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.073 10.2C24.9916 10.6133 27 13.08 27 18.48V18.6533C27 24.6133 24.5544 27 18.4472 27H9.55281C3.44561 27 1 24.6133 1 18.6533V18.48C1 13.12 2.98108 10.6533 7.81766 10.2133M14.0068 1V18.1733M18.5838 15.2L14.0068 19.6667L9.42985 15.2'
        stroke='#146f9d'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default memo(IncomeIcon)
