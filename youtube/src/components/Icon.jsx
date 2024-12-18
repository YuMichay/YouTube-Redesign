export const Icon = ({type, iconClass, extraClass, source, alternative, iconWidth, iconHeight, link, text}) => {
  switch(type) {
    case 'icon':
      return (
      <button className={iconClass}>
        <img src={source} alt={alternative} width={iconWidth} height={iconHeight} />
      </button>)
    case 'bell':
      return (
      <button className={iconClass}>
        <img src={source} alt={alternative} width={iconWidth} height={iconHeight} />
        <div className={extraClass}>3</div>
      </button>)
    case 'menu':
      return (
      <li className={extraClass}><a href={link}>
        <div className={iconClass}>
          <img src={source} alt={alternative} />
        </div>{text}</a></li>)
    case 'profile':
    case 'logo':
      return (
      <button className={iconClass}>
        <img src={source} alt={alternative} />
      </button>)
  }
}