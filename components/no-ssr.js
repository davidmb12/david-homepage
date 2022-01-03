import dynamic from "next/dynamic"
import React from 'react'

//No server side rendering

const NoSsr = (props => <>{props.children}</>)

    export default dynamic (() => Promise.resolve(NoSsr),{
            ssr: false
        }
    )