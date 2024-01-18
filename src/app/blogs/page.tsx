"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function BlogsPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/')
  }
  return (
    <div>
        <h2>
          <Link href={'/blogs/1'}>Blog 1</Link>
        </h2>
        <h2>Blog 2</h2>
        <h2>Blog 3</h2>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default BlogsPage