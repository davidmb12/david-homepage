import NextLink from 'next/link'
import {Container,Box,Heading,Image, Link, Button, SimpleGrid,List,ListItem,Icon,useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection,BioYear } from '../components/bio'
import {GridItem} from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoFacebook
} from 'react-icons/io5'
const Page = () =>{
    return (
        <Layout>
            <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            David Murillo 
                        </Heading>
                        <p> Web Dev / 3D Generalist / Game Dev (Unity & Unreal) </p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/contents/profilePic.jpg"></Image>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title"> Work</Heading>
                    <Paragraph>
                        I&apos;m an indie software developer, primarly focused on digital experiences creation 
                        such as videogames, webpages, augmented and virtual reality apps, and the like.</Paragraph>
                        <Box align="center"  my={4}>
                            <NextLink href="/works">
                                <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme = "teal">
                                    My portfolio
                                </Button>
                            </NextLink>
                        </Box>
                </Section>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Ensenada, Baja California
                    </BioSection>
                    <BioSection>
                    <BioYear>2018</BioYear>
                    1st place in "Expo Ingenieria Cetys Universidad" with a 2D platformer videogame
                    </BioSection>
                    <BioSection>
                    <BioYear>2020</BioYear>
                        Started my self taught Blender learning process
                    </BioSection>

                    
                    <BioSection>
                    <BioYear>2021</BioYear>
                    1st place in "Expo Ingenieria Cetys Universidad" with a 3D first person shooter videogame made in Unity
                    </BioSection>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Music, Gaming, Creative Writing, 3D modeling, Game development, Coffee
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/davidmb12" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as ={IoLogoGithub}></Icon>}>@davidmb12</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/davm.b/?hl=es-la">
                            <Button variant="ghost" colorScheme="pink" leftIcon={<Icon as ={IoLogoInstagram}></Icon>}>@davm.b</Button>
                            </Link>
                        </ListItem>
                       
                    </List>
                    
                </Section>
            </Container> 
        </Layout>
    )
}
export default Page
