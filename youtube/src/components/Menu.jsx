import { homeIcon, subsIcon, trendingIcon } from "../images"
import { Icon } from "./Icon"

function Menu () {
  return (
    <aside>
      <nav className="menu__nav">
        <ul>
          <Icon type="menu" iconClass="menu__nav-container" extraClass="menu__nav-main" source={homeIcon} alternative="home icon" link="./home.html" text="Home" />
          <Icon type="menu" iconClass="menu__nav-container" extraClass="menu__nav-main" source={trendingIcon} alternative="trending icon" link="#" text="Trending" />
          <Icon type="menu" iconClass="menu__nav-container" extraClass="menu__nav-main" source={subsIcon} alternative="subscriptions icon" link="#" text="Subscriptions" />
          <Icon type="menu" iconClass="menu__nav-container" extraClass="menu__nav-main" source={subsIcon} alternative="library icon" link="#" text="Library" />
        </ul>
      </nav>
    </aside>
  )
}

export default Menu