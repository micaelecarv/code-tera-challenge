import * as React from "react"

function Liked(props: any) {
  return (
    <svg
      width={24}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.62 12 22c6.43-6.38 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
        fill="#E60000"
      />
    </svg>
  )
}

export default Liked
