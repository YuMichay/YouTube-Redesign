import { fullIcon, nextIcon, pauseIcon, settingsIcon, sizeIcon, subIcon, videoCover, volumeIcon } from "../images"
import { Icon } from "./Icon"
import { ProgressBar } from "./ProgressBar"
import { Typography } from "./Typography"

function Player() {
  return (
    <div className="player__container">
      <img src={videoCover} alt="video cover" />
      <div className="player__controls-container">
        <div className="player__time">
          <Typography type="p">1:34</Typography>
          <Typography type="p">19:00</Typography>
        </div>
        <ProgressBar barClass="player__progress-bar" progressClass="player__progress" />
        <div className="player__controls">
          <div className="player__controls-video">
            <Icon type="icon" iconClass="player__controls-video-pause" source={pauseIcon} alternative="pause" iconWidth="22px" iconHeight="24px" />
            <Icon type="icon" iconClass="player__controls-video-next" source={nextIcon} alternative="next" iconWidth="27px" iconHeight="18px" />
            <div className="player__controls-video-volume-container">
              <Icon type="icon" iconClass="player__controls-video-volume" source={volumeIcon} alternative="volume" iconWidth="24px" iconHeight="24px" />
              <ProgressBar barClass="player__controls-video-volume-bar" progressClass="player__controls-video-volume-value" />
            </div>
          </div>
          <div className="player__controls-view">
            <Icon type="icon" iconClass="player__controls-view-sub" source={subIcon} alternative="subtitles" iconWidth="27px" iconHeight="18px" />
            <Icon type="icon" iconClass="player__controls-view-settings" source={settingsIcon} alternative="video settings" iconWidth="27px" iconHeight="27px" />
            <Icon type="icon" iconClass="player__controls-view-size" source={sizeIcon} alternative="size" iconWidth="30px" iconHeight="21px" />
            <Icon type="icon" iconClass="player__controls-view-full" source={fullIcon} alternative="full screen" iconWidth="33px" iconHeight="24px" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Player