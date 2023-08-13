import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import thumbFlutter from '../public/images/contents/flutter-logo-sharing.png' 
import thumbMlkit from '../public/images/contents/mlkit-entity-extraction-api-1608031678771.jpeg';
import thumbTransfer from '../public/images/contents/thumbTransfer.png';

const Posts = () =>(
    <Layout title="Posts">
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    Posts
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem id="parallax_effect" title="Parallax effect in flutter" thumbnail={thumbFlutter} >
                        </GridItem>
                        <GridItem id="text_translation" title="Text translation app in flutter" thumbnail={thumbMlkit} >
                        </GridItem>
                        <GridItem id="ether_transfer" title="Ethereum Transfer - Blockchain" thumbnail={thumbTransfer} >
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
    </Layout>
)

export default Posts