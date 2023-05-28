// 'use client'

import MyChakraProvide from "@/components/MyChakraProvide"
import NavBar from "@/components/NavBar"
import { cookies } from "next/dist/client/components/headers"


export const metadata = {
  title: 'Home',
  description: 'Home page',
}


export const getData = async () => {
  console.log(cookies().get('token'), 'token---- cookies')
  // console.log(localStorage.getItem('token'), 'token---- localStorage')

  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // let response = axios.get('https://jsonplaceholder.typicode.com/posts').then(data => data.data)

  // console.log('axios request was  being==============')
  return response.json
}


export default async function RootLayout(props) {
  console.log(props, 'props RootLayout')


  // let data = await getData()



  return (
    <html lang="en">
      <body>
        <MyChakraProvide>
          <NavBar />
          {props.children}
        </MyChakraProvide>
      </body>
    </html>
  )
}

