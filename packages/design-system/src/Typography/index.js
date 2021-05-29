import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import style from './typography.module.scss'

const variantToTags = {
  body1: 'p',
  body2: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
}

const Typography = (props) => {
  const { children, variant, className, color, weight } = props
  const attr = {
    className: classNames(style.root, className),
    style: {
      ...(weight && { fontWeight: weight }),
    },
  }

  if (['body1', 'body2', 'subtitle1', 'subtitle2'].includes(variant)) {
    attr.className = classNames(attr.className, style[variant])
  }

  if (['primary', 'secondary'].includes(color)) {
    attr.className = classNames(attr.className, style[color])
  } else {
    color && (attr.style = { color })
  }

  return React.createElement(variantToTags[variant] || variant, {
    ...attr,
    children,
  })
}

Typography.propTypes = {
  className: T.string,
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
  variant: T.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'h7',
    'body1',
    'body2',
    'subtitle1',
    'subtitle2',
  ]),
  color: T.string,
  weight: T.oneOfType([T.string, T.number]),
}

Typography.defaultProps = {
  variant: 'h1',
}

export default Typography
