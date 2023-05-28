'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";


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
            {/* <div>NavBar</div> */}
            {/* <ul> */}
            <Container
                centerContent
            >

                <Tabs position="relative" variant="unstyled">
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <TabList>
                        {
                            paths.map((i) => {
                                return (
                                    <Tab
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
                                    </Tab>
                                )
                            })
                        }
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                        scale={'2'}
                    />
                </Tabs>
            </Container>

            {/* </ul>F */}
        </>
    )
}

export default NavBar