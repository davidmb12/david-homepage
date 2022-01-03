import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =() =>{
    return (
        <Layout title="Caracol App">
            <Container>
                <Title>
                    Caracol App <Badge>2021</Badge>
                </Title>
                <P>
                    A fully functional multiprupose mobile app made in Flutter, specifically designed and approved by "Caracol Museo de Ciencias", available in Google PlayStore
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> PlayStore</Meta>
                        <Link href='https://l.facebook.com/l.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.caracoldev.museocaracolapp%26fbclid%3DIwAR21wYjcvoxs372YrueKwFOBYAzj7Zg_xcYoIUc7VlH0pd09w123Q-ussk0&h=AT39lAL9ZDyVMYyqUpuiRtOPI-ChSKI4YV3dsYnDeVENPDIqjiJXett7ZBULl_EPFc1PMcv7W3eZOs4ca_BEUuRW-IG0gNR9QHY6ww_8kXGak8S67NGgANRqUxUcpNW-dtv0GHuqtFBa94UQzsjmxA'>
                            Descargar <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform</Meta>
                            <span> Android </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack</Meta>
                            <span> Flutter, Firebase </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/contents/thumbMuseoCaracolApp.png"></WorkImage>
            </Container>
        </Layout>
    )
}
export default Work