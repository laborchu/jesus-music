import * as React from "react";


// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class VideoItem extends React.Component<undefined, undefined> {
	render() {
		return <h1>Hello froms!</h1>;
	}
}