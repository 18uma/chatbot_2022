import React from 'react'
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import NoProfile from '../assets/img/no-profile.png';
import Torahack from '../assets/img/torahack.png';


const Chat = (props) => {
    const isQuestion = (props.type === 'question')
    const classes = isQuestion ? 'p-chat__raw' : 'p-chat__reverse'
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Torahack} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}

            </ListItemAvatar>
            <div className={"p-chat__bubble"}>{props.text}</div>
        </ListItem>
    )
}

export default Chat