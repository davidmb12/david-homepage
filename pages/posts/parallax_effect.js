import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {motion} from 'framer-motion'
import {chakra, shouldForwardProp} from '@chakra-ui/react'


const Post =() =>{

    

    return (
        <Layout title="Parallax Effect Flutter App">
            <Container>
                <Title title="Posts">
                    Parallax Effect Test Flutter App <Badge>2022</Badge>
                </Title>
                <P>
                    A simple parallax effect test made in flutter, built for web.
                </P>
                <br></br>
                <P>
                    Just a simple test for future implementations of parallax effect in flutter UI. 
                    Here is the link to the flutter web app build hosted in vercel and also the link to the github repo,
                    feel free to give it a visit!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Web App</Meta>
                        <Link href='https://parallax-effect-flutter.vercel.app/#/'>
                            Visitar <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Github repo</Meta>
                        <Link href='https://github.com/davidmb12/parallax_effect_flutter'>
                            Visitar <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                            <span> Web, Flutter </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack</Meta>
                            <span> Flutter SDK </span>
                    </ListItem>
                </List>
                
            </Container>
        </Layout>
    )
}
export default Post