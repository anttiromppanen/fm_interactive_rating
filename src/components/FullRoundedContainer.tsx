import { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  className?: string | undefined,
}

function FullRoundedContainer({ children, className = "" }: Props) {
  return (
    <button
      type="button"
      className={
        `bg-[#1f313f] rounded-full h-11 w-11 flex justify-center items-center sm:h-14 sm:w-14 hover:bg-userMediumGrey group`
        .concat(className)}
    >
      {children}
    </button>
  )
}

FullRoundedContainer.defaultProps = {
  className: undefined,
}

export default FullRoundedContainer