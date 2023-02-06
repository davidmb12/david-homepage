import NextLink from 'next/link'
import {Heading,Box, Image,Link,Badge} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import {ChevronRightIcon} from '@chakra-ui/icons'

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

export const Meta=({children}) =>(
    <Badge colorScheme="messenger" mr={2} >
        {children}
    </Badge>
)