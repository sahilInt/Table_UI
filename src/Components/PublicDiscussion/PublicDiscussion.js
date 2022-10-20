import React from 'react'
import "./PublicDiscussion.css"
import Edit from "../../SVG/menu.svg"

const PublicDiscussion = () => {
    return (
        <div className='ppms-main-scr-div-six-for-main'>
            <div className='public-discussion-div-one'><p>Public Discussion</p></div>
            <div className='public-discussion-div-two'>
                <div className='public-discussion-div-two-sub-div-one'>Image</div>
                <div className='public-discussion-div-two-sub-div-two'> 
                    <div><input className='public-disc-comment-input' placeholder='Add a Comment. Use @ to mention a person, or # to link an entity'/></div>
                    <div className='public-disc-comment-svg-tag'>
                    <div><p>B</p></div>
                    <div><img src={Edit} alt='' className='public-disc-edit-svg'/></div>
                    <div><h1 className='smily-symbol'>☺</h1></div>
                    <div><p>@</p></div>
                    <div><p>#</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicDiscussion
