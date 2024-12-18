export const Button = ({source, alternative, text}) => {
  return (
    <button>
      <img src={source} alt={alternative} />{text}
    </button>
  )
}