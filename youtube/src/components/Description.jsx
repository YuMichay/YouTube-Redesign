import { chevronIcon, dislikeIcon, likeIcon, moreIcon, shareIcon } from "../images"

import { Button } from "./Button"
import { Icon } from "./Icon"
import { Typography } from "./Typography"

function Description() {
  return (
    <div className="description">
      <div className="description__video">
        <div className="description__video-text">
          <Typography type={"h1"}>Dude You Re Getting A Telescope</Typography>
          <Typography type={"p"}>123k views</Typography>
        </div>
        <Icon type="icon" iconClass={"description__video-chevron"} source={chevronIcon} iconWidth="10px" iconHeight="7px" />
        <div className="description__video-buttons">
          <Button source={likeIcon} alternative="like" text="123k" />
          <Button source={dislikeIcon} alternative="dislike" text="435k" />
          <Button source={shareIcon} alternative="share" text="Share" />
          <Icon type="icon" iconClass={"description__video-buttons-menu"} source={moreIcon} alternative="menu" iconWidth="28px" iconHeight="6px" />
        </div>
      </div>
      <div className="description__devision"></div>
      <div className="description__channel">
        <div className="description__channel-header">
          <a href="/channel.html"><img src="./icons/FDLogo.svg" alt="channel logo" /></a>
          <div className="description__channel-header-text">
            <Typography type={"h2"}>Food & Drink</Typography>
            <Typography type={"p"}>Published on 14 Jun 2019</Typography>
            <Typography type={"p"}>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </Typography>
            <Typography type={"p"}>245K subscribed</Typography>
            <button className="description__channel-header-more">Show more</button>
          </div>
          <button className="description__channel-header-subscribe-phone">Subscribe</button>
        </div>
        <button className="description__channel-header-subscribe">Subscribe 2.3m</button>
      </div>
    </div>
  )
}

export default Description