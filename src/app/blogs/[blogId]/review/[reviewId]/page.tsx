import React from 'react';
import { notFound } from 'next/navigation';

function BlogReview({ params } : {
    params: {
        blogId: string,
        reviewId: string
    }
}) {

    if (parseInt(params.reviewId) > 100) {
        notFound();
    }

  return (
    <div>Blog review {params.reviewId} of blog {params.blogId} </div>
  )
}

export default BlogReview