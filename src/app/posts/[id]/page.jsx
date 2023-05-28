import MyCard from '@/components/MyCard'
import MyCardBody from '@/components/MyCardBody'
import MyContainer from '@/components/MyContainer'
import MyText from '@/components/MyText'
// import { Container } from '@chakra-ui/react'
import React from 'react'
import { ImageResponse } from 'next/server';
import Image from 'next/image'

export const getData = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?id=' + id)

    return response.json()
}


export async function generateMetadata(d) {
    let data = await getData(d.params.id)
    data = data[0]

    // console.log(d, 'dddddddddd')
    return {
        title: data.title,
    };


}

// export function generateImageMetadata({
//     params
// }) {
//     return <Image
//         src={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
//     />
// }




// export function generateImageMetadata() {
//     return [
//         {
//             contentType: 'image/png',
//             size: { width: 48, height: 48 },
//             id: 'small',
//         },
//         {
//             contentType: 'image/png',
//             size: { width: 72, height: 72 },
//             id: 'medium',
//         },
//     ];
// }

export function Icon(props) {
    // console.log(props, 'props--')

    // console.log(props.id, 'props.id--')
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 88,
                    background: '#000',
                    color: '#fafafa',
                }}
            >
                Icon {id}
            </div>
        ),
    );
}


const PostsId = async (props) => {
    let data = await getData(props.params.id)
    data = data[0]
    // console.log(props, 'props---- PostsId')
    // console.log(data, 'data---- PostsId')


    return (
        <>
            {/* <div>PostsId</div> */}
            <MyContainer>
                <MyCard>
                    <MyCardBody>

                        <MyText>
                            id {data.id}
                        </MyText>
                        <MyText>
                            user {data.userId}
                        </MyText>
                        <MyText>
                            title {data.title}
                        </MyText>
                        <MyText>
                            body {data.body}
                        </MyText>
                    </MyCardBody>

                </MyCard>
            </MyContainer>
        </>
    )
}

export default PostsId











// export const getServerSideProps = (context) => {
//     console.log(context, 'contextcontextcontextcontextcontext')
//     return {
//         props: {

//         }
//     }
// }