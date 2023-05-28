'use client'

import { CardBody } from '@chakra-ui/react'
import React from 'react'

const MyCardBody = ({ children }) => {
    return (
        <CardBody>
            {children}
        </CardBody>
    )
}

export default MyCardBody