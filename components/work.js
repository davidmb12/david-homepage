import NextLink from 'next/link'
import {Heading,Box, Image,Link,Badge} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import {ChevronRightIcon} from '@chakra-ui/icons'
import ReactPlayer from 'react-player'
export const Title = ({children,title}) => (
    <Box>
        <NextLink href={`/${title.toLowerCase()}`}>
            <Link>{title}</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon/>
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>

)

export const WorkImage =({src,alt}) =>(
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}></Image>
)
const VIDEO_STYLES = { 
    videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative',marginTop: '1em'}, 
    videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }

export const WorkVideo = ({src,alt})=>(
    <div style={VIDEO_STYLES.videoIframeContainer}>
        <iframe
          title="vimeo-player"
          src={src}
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
          style={VIDEO_STYLES.videoIframe}
        >
        </iframe>
  </div>

)

export const Meta=({children}) =>(
    <Badge colorScheme="messenger" mr={2} >
        {children}
    </Badge>
)