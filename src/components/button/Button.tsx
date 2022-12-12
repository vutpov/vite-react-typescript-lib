//@ts-nocheck

import React from 'react'
import styles from './Button.module.less'
import { ReactComponent as HouseSVG } from '@/svg/house-solid.svg'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={styles.button + ' ' + props.className}>
      <HouseSVG />
      {props.children}
    </button>
  )
}

export default Button
