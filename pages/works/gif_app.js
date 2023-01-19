import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =() =>{
    return (
        <Layout title="Gif App">
            <Container>
                <Title>
                    Gif ReactJS App <Badge>2021</Badge>
                </Title>
                <P>
                    A simple gif app made with ReactJS, using Giphy API for fetching gifs.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> </Meta>
                        <Link href='https://davmb12.itch.io/frost-freak'>
                            Visit <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Meta> Stack</Meta>
                            <span> ReactJS </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/contents/frost-freak.jpg"></WorkImage>
            </Container>
        </Layout>
    )
}
export default Work