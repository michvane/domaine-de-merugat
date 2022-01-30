import React, { PureComponent, SelectHTMLAttributes } from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {

}

const Select: React.FC<SelectProps> = () => {
  return <select></select>
}

export default Select
