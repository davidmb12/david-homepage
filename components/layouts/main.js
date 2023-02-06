import Head from "next/head";
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import {Box,Container} from '@chakra-ui/react'
import Taza from '../taza'

const Main = ({children,router})=>{
    return (
        <Box as="main" pb={8}>
            <Head> 
                <meta name="viewport" content= "width=device-width, initial-scale=1"></meta>
                <link rel="icon" type="image/png" href="/images/contents/coffee-dark.png" />

                <title> David Murillo - Homepage </title>
            </Head>

            <Navbar path={router.asPath}>      
            </Navbar>
            <Container maxWidth="container.md" pt={20}>
                <NoSsr>
                    <Taza/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main