import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage,WorkVideo, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =() =>{
    return (
        <Layout title="Frost Freak">
            <Container>
                <Title title="Works">
                    Frost Freak <Badge>2020</Badge>
                </Title>
                <P>
                    An FPS demo game made in Unity, available in itchio
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Itch.io</Meta>
                        <Link href='https://davmb12.itch.io/frost-freak'>
                            Play <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Meta> Platform</Meta>
                            <span> Windows </span>
                    </ListItem>

                    <ListItem>
                        <Meta> Stack</Meta>
                            <span> Unity Game Engine </span>
                    </ListItem>
                    
                </List>
            
                <h2>Quick demo video</h2>
                <WorkVideo src='https://player.vimeo.com/video/839843236?'></WorkVideo>
            </Container>
        </Layout>
    )
}
export default Work