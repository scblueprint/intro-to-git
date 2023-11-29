import {FaHandPointUp} from "react-icons/fa6";

export function NewPost() {
	return (
		<div id={"new-post"}>
			<div id="top">
				<img width={75} height={75} src="./slug_icon.png" alt="slug profile picture"/>
				<input type="text" placeholder={"Share something..."}/>
			</div>
			<hr />
			<div id="bottom">
				<FaHandPointUp fontSize={25} />
				<p>Please say something nice. You're online.</p>
			</div>
		</div>
	);
}