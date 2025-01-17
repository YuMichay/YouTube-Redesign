export const ProgressBar = ({barClass, progressClass}) => {
  return (
    <div className={barClass}>
      <div className={progressClass}></div>
    </div>
  )
}