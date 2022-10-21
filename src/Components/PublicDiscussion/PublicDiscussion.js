import React, { useEffect, useState } from 'react'
import "./PublicDiscussion.css"
import Edit from "../../SVG/menu.svg"
import Hexa from "../../SVG/hexagon.svg"
import Comments from '../Comments/Comments'
import {
    FaBold, FaBars, FaRegSmileBeam, FaCaretRight
} from "react-icons/fa";


const PublicDiscussion = () => {

    // const [showComment,setShowComment]=useState([]);
    // useEffect(() => {
    //     fetch("API ENDPOINT").then((result)=> {
    //         result.json().then((resp) => {
    //             console.warn("result",resp.response)
    //             setShowComment(resp.response)
    //         })
    //     })
    // },[])
    // console.warn(showComment)



    return (
        <div className='ppms-main-scr-div-six-for-main'>
            <div className='public-discussion-div-one'><p>Public Discussion</p></div>
            <div className='public-discussion-div-two-main'>
                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <div className='public-disc-hexa-svg'>
                        <p>AS</p>
                    </div>

                    <div className='public-discussion-div-two-sub-div-two'>
                        <div><input className='public-disc-comment-input' placeholder='Add a Comment. Use @ to mention a person, or # to link an entity' /></div>
                        <div className='public-disc-comment-svg-tag'>
                            <div><FaBold style={{ cursor: "pointer" }} /></div>
                            <div><FaBars style={{ cursor: "pointer" }} /></div>
                            <div><FaRegSmileBeam style={{ cursor: "pointer" }} /></div>
                            <div><p style={{ cursor: "pointer" }}>@</p></div>
                            <div><p style={{ cursor: "pointer" }}>#</p></div>
                        </div>
                    </div>
                </div>
                <div className='enter-comment-div'>
                    <FaCaretRight style={{ height: "60px", width: "60px", color: "rgb(58,68,115)", cursor: "pointer" }} />
                </div>
            </div>


            <Comments user="Oron Mochly" days="9" commenter="@ Doron Azron" comment="Need towait for launching and follow up" secondcommentor="@Rony Forshtat" />
            <Comments user="Doron Azron" days="9" commenter="" comment="Waiting for launching!" secondcommentor="" />
            <Comments user="Doron Azron" days="9" commenter="" comment="Nice!" secondcommentor="" />
        </div>
    )
}

export default PublicDiscussion
