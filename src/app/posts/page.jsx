// import React from 'react'
// 'use client'
import Link from "next/link"
// import { useEffect } from "react"


export const metadata = {
    title: 'Posts',
    description: 'Posts Page'

}


export const getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
}



const Posts = async (props) => {
    let data = await getData()
    console.log(props, 'props--- posts')
    // console.log(data, 'data--- posts')
    // useEffect(() => console.log('useEffect,--------------------'), [])

    return (
        <>
            <div>Posts</div>
            {
                data.map((i) => {
                    return (
                        <div
                            style={{
                                marginBottom: '5px',
                                background: 'grey',
                                cursor: 'pointer'
                            }}
                        >
                            <Link
                                href={`/posts/${i.id}`}
                                // prefetch={false}
                            >
                                <p
                                    style={{
                                        margin: '0'
                                    }}
                                >
                                    {'user =>'} {i.userId}
                                </p>
                                <p
                                    style={{
                                        margin: '0'
                                    }}
                                >
                                    {i.title}
                                </p>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts