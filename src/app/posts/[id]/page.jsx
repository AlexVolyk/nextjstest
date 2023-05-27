import React from 'react'

export const getData = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?id=' + id)

    return response.json()
}


export async function generateMetadata(d) {
    let data = await getData(d.params.id)
    data = data[0]

    console.log(d,'dddddddddd')
    return {
        title: data.title,
    };
}



const PostsId = async (props) => {
    let data = await getData(props.params.id)
    data = data[0]
    console.log(props, 'props---- PostsId')
    console.log(data, 'data---- PostsId')


    return (
        <>
            <div>PostsId</div>
            <div>
                <p>
                    id {data.id}
                </p>
                <p>
                    user {data.userId}
                </p>
                <p>
                    title {data.title}
                </p>
                <p>
                    body {data.body}
                </p>
            </div>
        </>
    )
}

export default PostsId











export const getServerSideProps = (context) => {
    console.log(context, 'contextcontextcontextcontextcontext')
    return {
        props: {

        }
    }
}