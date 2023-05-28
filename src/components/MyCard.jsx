'use client'

import { Card } from '@chakra-ui/react'
import React from 'react'

const MyCard = ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    )
}

export default MyCard