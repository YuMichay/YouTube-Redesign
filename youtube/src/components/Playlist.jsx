import { playlistCover1, playlistCover2, playlistCover3, playlistCover4 } from "../images";
import { Typography } from "./Typography"
import Video from "./Video";

function Playlist() {
  const playlist = [
    {
      id: 1,
      title: "Baby Monitor Technology",
      views: "123k views",
      author: "Dollie Blair",
      time: "8:00",
      image: playlistCover1,
    },
    {
      id: 2,
      title: "A Good Autoresponder",
      views: "123k views",
      author: "Dollie Blair",
      time: "8:00",
      image: playlistCover2
    },
    {
      id: 3,
      title: "Selecting The Right Hotel",
      views: "123k views",
      author: "Dollie Blair",
      time: "8:00",
      image: playlistCover3
    },
    {
      id: 4,
      title: "Selecting The Right Hotel",
      views: "123k views",
      author: "Dollie Blair",
      time: "8:00",
      image: playlistCover4
    }
  ];

  return (
    <div className="playlist">
      <div className="playlist__header">
        <Typography type={"h2"}>Next</Typography>
        <div className="playlist__header-switch-container">
          <Typography type={"span"}>Autoplay</Typography>
          <label className="playlist__header-switch">
            <input type="checkbox" />
            <span className="playlist__header-slider"></span>
          </label>
        </div>
      </div>
      <div className="playlist__videos">
        {playlist.map((object) => <Video key={object.id} props={object} /> )}
      </div>
    </div>
  )
}

export default Playlist