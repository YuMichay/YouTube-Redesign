import { Typography } from "./Typography"

function Video({props}) {
  const {id, title, views, author, time, image} = props;
  return (
    <div className="playlist__video">
          <img src={image} alt={"playlist__video" + id} />
          <Typography type={"p"}>{time}</Typography>
          <Typography type={"h4"}>{title}</Typography>
          <div className="playlist__video-description">
            <Typography type={"p"}>{views}</Typography>
            <Typography type={"p"}>{author}</Typography>
          </div>
    </div>
  )
}

export default Video