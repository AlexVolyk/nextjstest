// import React from 'react'
'use client'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react"
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
            {/* <div>Posts</div> */}
            <Container
                centerContent
                marginTop={'10'}
            >

                {
                    data.map((i) => {
                        return (
                            // <p>aa</p>
                            <Card
                                key={i.id}
                                maxWidth={'sm'}
                                marginBottom={'10'}
                                backgroundColor={'cyan.200'}
                            >
                                <CardBody>
                                    <LinkBox>
                                        <Image
                                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        />
                                    </LinkBox>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'
                                            textTransform={"capitalize"}>
                                            {i.title}
                                        </Heading>
                                        <Text
                                            color={"grey"}
                                        >
                                            {i.body}
                                        </Text>

                                    </Stack>
                                    <Text
                                        marginTop={'10'}
                                        color={"blue"}
                                        fontSize={'sm'}
                                    >
                                        <LinkOverlay
                                            as={Link}
                                            href={`/posts/${i.id}`}
                                        >
                                            {i.title}
                                        </LinkOverlay>
                                    </Text>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </Container>

        </>
    )
}



export default Posts