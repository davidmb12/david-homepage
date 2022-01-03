import { Container,Heading,SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCaracolApp from '../public/images/contents/thumbMuseoCaracolApp.png' 
import thumbCaracolAppAr from '../public/images/contents/caracolAppAr.png'
import Paragraph from '../components/paragraph'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="caracol_app" title="Caracol App" thumbnail={thumbCaracolApp}>
            </WorkGridItem>  
          </Section>
          <Section>
            <WorkGridItem id="caracol_app_ar" title="Caracol App AR" thumbnail={thumbCaracolAppAr}>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
