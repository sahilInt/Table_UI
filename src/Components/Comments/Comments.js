import React, { useEffect, useState } from 'react'

const Comments = (props) => {

    const [showComment, setShowComment] = useState([]);
    useEffect(() => {
        fetch("API ENDPOINT").then((result) => {
            result.json().then((resp) => {
                console.warn("result", resp.response)
                setShowComment(resp.response)
            })
        })
    }, [])
    console.warn(showComment)

    return (
        <div className='public-discussion-div-two'>
            <div className='public-disc-hexa-svg'>
                <p>DA</p>
            </div>

            {/*
                {
                    showComment.map((item) =>

                        <div className='public-discussion-div-two-sub-div-two'>
                            <div className='public-disc-cmt-div-one'>
                                <h1>{item.username}</h1>
                                <p className='public-disc-days'>{props.days} days ago</p>
                            </div>
                            <div className='public-disc-comment-tag'>
                                <p className='public-disc-auth'>{item.taggeduserone}</p>
                                <p className='public-disc-days'>{item.comments}</p>
                                <p className='public-disc-auth'>{item.taggedusertwo}</p>
                            </div>
                        </div>
                }
            */}

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