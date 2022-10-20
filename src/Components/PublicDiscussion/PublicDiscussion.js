import React from 'react'
import "./PublicDiscussion.css"
import Edit from "../../SVG/menu.svg"
import Hexa from "../../SVG/hexagon.svg"
import Comments from '../Comments/Comments'


const PublicDiscussion = () => {
    return (
        <div className='ppms-main-scr-div-six-for-main'>
            <div className='public-discussion-div-one'><p>Public Discussion</p></div>
            <div className='public-discussion-div-two'>
                <div className='public-disc-hexa-svg'>
                    <p>AS</p>
                </div>

                <div className='public-discussion-div-two-sub-div-two'>
                    <div><input className='public-disc-comment-input' placeholder='Add a Comment. Use @ to mention a person, or # to link an entity' /></div>
                    <div className='public-disc-comment-svg-tag'>
                        <div><p>B</p></div>
                        <div><img src={Edit} alt='' className='public-disc-edit-svg' /></div>
                        <div><h1 className='smily-symbol'>☺</h1></div>
                        <div><p>@</p></div>
                        <div><p>#</p></div>
                    </div>
                </div>
            </div>

            {/*<div className='public-discussion-div-two'>
                <div className='public-disc-hexa-svg'>
                    <p>DA</p>
                </div>

                <div className='public-discussion-div-two-sub-div-two'>
                    <div className='public-disc-cmt-div-one'>
                        <h1>Doron Azron</h1>
                        <p className='public-disc-days'>9 days ago</p>
                    </div>
                    <div className='public-disc-comment-tag'>
                        <p className='public-disc-auth'>@ Moron Mochly</p>
                        <p className='public-disc-days'>We know, This PD hasent approved yet...</p>
                        <p className='public-disc-auth'>@ Moron Mochly</p>
                    </div>
                </div>
    </div>*/}
            <Comments user="Doron Azron" days="9" commenter="@ Moron Mochly" comment="We know, This PD hasent approved yet..." secondcommentor=""/>
            <Comments user="Oron Mochly" days="9" commenter="@ Doron Azron" comment="Need towait for launching and follow up" secondcommentor="@Rony Forshtat"/>
            <Comments user="Doron Azron" days="9" commenter="" comment="Waiting for launching!" secondcommentor=""/>
            <Comments user="Doron Azron" days="9" commenter="" comment="Nice!" secondcommentor=""/>
        </div>
    )
}

export default PublicDiscussion
