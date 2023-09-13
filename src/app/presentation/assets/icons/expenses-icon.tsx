import { memo } from 'react'

const ExpensesIcon = () => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.073 9.75789C24.9916 10.1821 27 12.7137 27 18.2558V18.4337C27 24.5505 24.5544 27 18.4472 27H9.55281C3.44561 27 1 24.5505 1 18.4337V18.2558C1 12.7547 2.98108 10.2232 7.81766 9.77158M14.0068 18.1053V2.53263M18.5838 5.58421L14.0068 1L9.42985 5.58421'
        stroke='#146f9d'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default memo(ExpensesIcon)
