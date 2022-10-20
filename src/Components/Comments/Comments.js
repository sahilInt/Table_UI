import React from 'react'

const Comments = (props) => {
    return (
        <div className='public-discussion-div-two'>
        <div className='public-disc-hexa-svg'>
            <p>DA</p>
        </div>

        <div className='public-discussion-div-two-sub-div-two'>
            <div className='public-disc-cmt-div-one'>
                <h1>{props.user}</h1>
                <p className='public-disc-days'>{props.days} days ago</p>
            </div>
            <div className='public-disc-comment-tag'>
                <p className='public-disc-auth'>{props.commenter}</p>
                <p className='public-disc-days'>{props.comment}</p>
                <p className='public-disc-auth'>{props.secondcommentor}</p>
            </div>
        </div>
    </div>
    )
}

export default Comments