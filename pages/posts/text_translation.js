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
                    Text translation App <Badge>2022</Badge>
                </Title>
                <P>
                    A very simple text translation app made in flutter.
                </P>
                <br></br>
                <P>
                    Just a simple test for future implementations of text translation using text recognition capabilities of the Mlkit google package. 
                    The user is able to select the translate-to language. Note: The app offers a plain simple word translation.
                </P>
                <List ml={4} my={4}>
                    
                    <ListItem>
                        <Meta> Github repo</Meta>
                        <Link href='https://github.com/davidmb12/text_from_image'>
                            Visit <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                            <span> Android </span>
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