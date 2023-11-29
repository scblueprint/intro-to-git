import {FaBell, FaMessage, FaPersonCirclePlus} from "react-icons/fa6";

export function Header() {
  return (
    <header>
      <div id="right-side">
          <img src="./blueprint_logo.png" alt="blueprint logo"/>
          <p>BluePrint</p>
      </div>
        <div id="left-side">
          <FaPersonCirclePlus fontSize={35} className={'icon'} />
          <FaMessage fontSize={35} className={'icon'} />
          <FaBell fontSize={35} className={'icon'} />
          <img width={150} src="./slug_icon.png" alt="icon of sammy the slug"/>
        </div>
    </header>
  );
}