'use client'

import { Button, ButtonGroup, Container, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


    if (typeof window !== "undefined") {
        console.log(localStorage.getItem('token'), 'token---- localStorage')
    }

    const displayCount = () => console.log(count)

    const increase = () => {
        setCount(prev => prev + 1)
        displayCount()
    }
    const decrease = () => {
        setCount(prev => prev - 1)
        displayCount()
    }

    return (
        <>

            <Container
                centerContent
            >
                {/* <Button
                    onClick={() => console.log(count, 'count')}
                >
                    show me the will
                </Button> */}
                <Text
                    marginTop={'30px'}
                    fontSize={'2xl'}
                    textAlign='center'
                >
                    Counter
                </Text>

                <Container
                    alignItems="center"
                    display={'flex'}
                    maxW={'200px'}
                    height={'40px'}
                    // justifyContent={'space-between'}
                    margin={0}
                    marginTop={'30vh'}
                    re

                >
                    <Button
                        onClick={decrease}
                    >
                        -
                    </Button>
                    <Container
                        height={'100%'}
                        width={'100%'}
                    // position={'relative'}
                    >
                        <Text
                            textAlign={'center'}
                            // position={'absolute'}
                            // bottom={'20%'}
                            // top={'50%'}
                            width={'100%'}
                            // left={'calc(50%)'}
                            fontSize={'2xl'}
                        >
                            {count}
                        </Text>
                    </Container>
                    <Button
                        onClick={increase}
                    >
                        +
                    </Button>
                </Container>
            </Container>
        </>
    )
}

export default Counter