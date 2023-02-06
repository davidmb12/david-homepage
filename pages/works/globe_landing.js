import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =() =>{
    return (
        <Layout title="Globe Landing Three JS Test">
            <Container>
                <Title title="Works">
                    Globe Landing Page<Badge>2022</Badge>
                </Title>
                <P>
                    A simple ReactJS landing page for testing Three JS features.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> </Meta>
                        <Link href='https://globe-landing-hj88zm1xy-davidmb12.vercel.app/'>
                            Visit <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <Meta> Stack</Meta>
                            <span> ReactJS </span>
                            <span> Vite </span>
                            <span> Three JS </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/contents/globe-app-preview.png"></WorkImage>
            </Container>
        </Layout>
    )
}
export default Work