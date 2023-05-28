'use client'

import { Container } from '@chakra-ui/react'
import React from 'react'

const MyContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MyContainer