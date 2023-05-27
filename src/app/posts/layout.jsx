// import axios from "axios"
import { cookies } from "next/dist/client/components/headers"
import Link from "next/link"
// import {} from 'next/dist/client/components'


export const metadata = {
  title: 'LAYOUT',
  description: 'LAYOUT page',
}

export default async function RootLayout(props) {
  // console.log(props, 'props RootLayout')

  console.log('posts LAYOUT')

  // let data = await getData()



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
  // console.log(props, '-------')
  // console.log(data[3], '-------')

  return (
    // <html lang="en">
    //   <body>
    //   </body>
    // </html>
    <>
        <p>LAYOUT</p>
        {props.children}
    </>
  )
}

