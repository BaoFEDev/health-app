import classNames from 'classnames'

export const Icon = ({ name, color, size, className, onClick, disabled }) => {
  const onIconClick = () => {
    if (disabled) return
    if (typeof onClick === 'function') {
      onClick()
    }
  }
  return (
    <span
      onClick={onIconClick}
      className={
        classNames({
          [size || 'text-[24px]']: true,
          'cursor-pointer': typeof onClick === 'function',
          [name]: !!name,
          [className]: !!className,
          '!cursor-default': disabled,
        })
      }
    >
      {Array(20)
        .fill()
        .map((_, index) => (
          <span
            key={index}
            className={classNames({
              [`path${index + 1}`]: true,
              [color]: !!color,
            })}
          />
        ))}
    </span>
  )
}
