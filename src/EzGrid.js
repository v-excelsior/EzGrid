import React from 'react'
import './styles.scss'
const getOptions = (props) => {
  const { isGreen, isBordered } = props

  const options = []

  if (isGreen) {
    options.push('green')
  }

  if (isBordered) {
    options.push('border')
  }

  console.log(options.join(' '))
  return options.join(' ')
}

export function EzGrid(props) {
  const opt = getOptions(props)
  console.log(opt)
  return (
    <div className={ opt }>
      Hi { props.children }
    </div>
  )
}