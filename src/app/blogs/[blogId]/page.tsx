import React from 'react';
import { Metadata } from 'next';

type prop = {
  params: {
      blogId: string
  }
}

export const generateMetadata = ({params} : prop) : Metadata => {
  return {
    title: `Blog ${params.blogId}`,
    description: "Welcome to my blog"
  }
}

function BlogDetails({ params } : prop) {
  return (
    <div>Blog details { params.blogId }</div>
  )
}

export default BlogDetails