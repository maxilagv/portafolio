import React, { forwardRef } from 'react'
import Magnetic from './Magnetic'

type CommonProps = {
  variant?: 'primary' | 'ghost'
  className?: string
  magnetic?: boolean
  children: React.ReactNode
}

function addRipple(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement
  const circle = document.createElement('span')
  circle.className = 'ripple'
  const rect = el.getBoundingClientRect()
  circle.style.left = `${e.clientX - rect.left}px`
  circle.style.top = `${e.clientY - rect.top}px`
  el.appendChild(circle)
  circle.addEventListener('animationend', () => circle.remove())
}

export const Button = forwardRef<HTMLButtonElement, CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(function Button(
  { variant = 'primary', className = '', magnetic = false, children, ...rest },
  ref,
) {
  const content = (
    <button ref={ref} {...rest} onClick={(e) => { rest.onClick?.(e); addRipple(e as any) }} className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`}>
      {children}
    </button>
  )
  return magnetic ? <Magnetic>{content}</Magnetic> : content
})

export const LinkButton = forwardRef<HTMLAnchorElement, CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(function LinkButton(
  { variant = 'primary', className = '', magnetic = false, children, ...rest },
  ref,
) {
  const content = (
    <a ref={ref} {...rest} onClick={(e) => { rest.onClick?.(e); addRipple(e as any) }} className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`}>
      {children}
    </a>
  )
  return magnetic ? <Magnetic>{content}</Magnetic> : content
})

