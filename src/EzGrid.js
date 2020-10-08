import React from 'react'
import './styles.scss'

const getOptions = (props) => {
  const { isGreen, isBordered } = props

  const options = ['ez-grid-basic']

  if (isGreen) {
    options.push('green')
  }

  if (isBordered) {
    options.push('border')
  }

  return options.join(' ')
}

const getTemplate = (template) => {
  if (template) {
    const rows = []

    for (let i = 0; i < template.length; i++) {
      rows.push(`"${template[i].join(' ')}" 1fr`)
    }

    return `${rows.join(' ')} / 1fr 1fr 1fr`
  }
}

export function EzGrid(props) {
  const opt = getOptions(props)

  const template = getTemplate(props.template)
  console.log('here', template)
  return (
    <div className={ opt } style={ { display:'grid',gridTemplate: template } }>
      { props.children }
    </div>
  )
}