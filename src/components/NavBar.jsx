'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavBar = () => {
    const pathname = usePathname()


    const paths = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Posts',
            link: '/posts',
        },
        // {
        //   name: 'Users',
        //   link: '/users',
        // }
    ]



    return (
        <>
            <div>NavBar</div>
            <ul>
                {
                    paths.map((i) => {
                        return (
                            <li
                                key={i.link}
                                style={{
                                    color: pathname == i.link ? 'red' : 'blue'
                                }}
                            >
                                <Link
                                    style={{
                                        color: pathname == i.link ? 'red' : 'blue'
                                    }}
                                    href={i.link}
                                >
                                    {i.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NavBar