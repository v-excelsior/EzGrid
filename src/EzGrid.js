import React from 'react'
import './styles.scss'

import { Format } from './helpers/format'

const getClasses = (props) => {
  const classes = ['ez-grid-basic']

  if (props.template) {
    classes.push('ez-grid-template')
  }

  return classes.join(' ')
}

const getTemplate = (template) => template ? Format.Template.standard(template) : undefined

const getAreas = (template) => [...new Set(template.flat())]

export function EzGrid(props) {
  const { template, gap } = props

  const classes = getClasses(props)
  const gridAreas = getAreas(template)
  const gridTemplate = getTemplate(template)

  return (
    <div className={ classes } style={ { gridTemplate, gap } }>
      { props.children.map((el, i) => {
        return React.createElement(el.type, {
          ...el.props,
          key  : i,
          style: { ...el.props.style, gridArea: gridAreas[i] }
        })
      }) }
    </div>
  )
}