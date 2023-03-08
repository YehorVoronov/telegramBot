import React from "react";
import "./Header.css"
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";



const Header=(props)=>{
  const {user,onClose} = useTelegram()
 
  return(
    <div className={"header"}>
        <Button onClick={onClose}>close</Button>
        <span className={'username'}>
          {user?.username}
        </span>
    </div>
  )
}

export default Header;