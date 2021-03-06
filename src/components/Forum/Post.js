import React from 'react'

export default (props) => {
  return (
    <>
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            <a href={'/forum/'+ props.post.id}>
            {props.post.title}</a>
            ({props.post.content})
          </div>
          {props.post.published && (
          <div className="f6 lh-copy gray">
            Author: {' '}
            {props.post.author
              ? props.post.author.name
              : 'Unknown'}{' '}
          </div>
          )}
        </div>
      </div>
    </>
  ) 
}
