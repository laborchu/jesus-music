import * as React from "react";
import * as ReactDOM from "react-dom";
import { VideoItem } from "./VideoItem";
let musicJson = require("../json/music.json");
export class VideoContainer extends React.Component<undefined, undefined> {
	componentDidMount() {
	}
	render() {
		return <div className="video-container">
			{
				musicJson.map((music: any,index:any) => {
					return <div className="video-item" key={index}>
						<div className="item-iframe" dangerouslySetInnerHTML={{ __html: music.iframe }} ></div>
						<div className="video-name">{music.name}</div>
					</div>
				})
			}

		</div>
		
	}
}

ReactDOM.render(
	<VideoContainer/>,
	document.getElementById("main")
);