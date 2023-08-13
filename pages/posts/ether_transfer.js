import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Post =() =>{

    

    return (
        <Layout title="Parallax Effect Flutter App">
            <Container>
                <Title title="Posts">
                    Ethereum transfer web App <Badge>2023</Badge>
                </Title>
                <P>
                    Using this app, the user can transfer ethereum across the world with a few steps using Meta Mask extension.
                </P>
                <br></br>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Web App</Meta>
                        <Link href='https://narvaltransfer.com'>
                            Visit <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Meta> Platform</Meta>
                            <span> Web </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack</Meta>
                            <Badge> React JS + Vite </Badge>
                            <Badge> Tailwindcss </Badge>
                            <Badge> Blockchain </Badge>
                    </ListItem>
                </List>
                
            </Container>
        </Layout>
    )
}
export default Post