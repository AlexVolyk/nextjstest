'use client'



import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'

const MyChakraProvide = ({ children }) => {
    return (
        <ChakraProvider>
            <Container
                maxW={'lg'}
            >

                {children}
            </Container>
        </ChakraProvider>
    )
}

export default MyChakraProvide