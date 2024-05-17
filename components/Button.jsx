import React from 'react'

function Button({title,style}) {
  return (
    <Button className={`text-[15px] py-2 px-5 cursor-pointer font-semibold ${style}`}>{title}</Button>
  )
}

export default Button