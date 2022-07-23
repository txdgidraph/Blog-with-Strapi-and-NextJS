import React from 'react'
import ReactMarkdown from 'react-markdown'

const BlogPreview = ({name, count}) => {
  return (
    <div>
        <ReactMarkdown>
            {name.substring(0,count)}
        </ReactMarkdown>
    </div>
  )
}

export default BlogPreview