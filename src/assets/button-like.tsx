import * as React from "react"

function ButtonLike(props: any) {
  return (
    <svg
      width={24}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.593C6.37 15.054 1 10.296 1 6.191 1 2.4 4.068 1 6.281 1c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447C20.266 1.01 23 2.631 23 6.191c0 4.069-5.136 8.625-11 14.402zM17.726.01C15.523.01 13.28 1.052 12 3.248 10.715 1.042 8.478 0 6.281 0 3.098 0 0 2.187 0 6.191 0 10.852 5.571 15.62 12 22c6.43-6.38 12-11.148 12-15.809C24 2.18 20.905.01 17.726.01z"
        fill={props.fill || "#000"}
      />
    </svg>
  )
}

export default ButtonLike
