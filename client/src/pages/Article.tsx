import React from 'react'

const Article = () => {
  return (
    <div className="main-container">
      <div dangerouslySetInnerHTML={{ __html: "content" }} />
    </div>
  )
}

export default Article