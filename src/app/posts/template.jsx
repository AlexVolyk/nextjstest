
'use client'
import React from 'react'
import { useEffect } from 'react';

export default function Template(props) {
    console.log('TemplateTemplateTemplateTemplateTemplateTemplateTemplateTemplateTemplate')
    console.log('posts TAMPLATE')

    useEffect(() => console.log('useEffect,--------------------', props, 'params'), [])

    return <div>{props.children}</div>;
}
