'use client'
import { Text } from '@chakra-ui/react'
import React from 'react'

const MyText = ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default MyText