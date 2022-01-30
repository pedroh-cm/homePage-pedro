import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub}  from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Olá, eu sou desenvolvedor Front End Engineer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pedro Henrique C M
          </Heading>
          <p>Front end developer (JavaScript | React.js | Next.js)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ph.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Me chamo Pedro Henrique Carlos Morinelli, tenho 21 anos.
        Sou novo nessa jornada de desenvolvimento web, atualmente estou me dedicando a ser Front-end Developer Engineer. 
        Procuro estar sempre a par das novidades para criar interfaces seguindo conceitos modernos, responsivos e clean, focado na usabilidade do usuário.
        Estou em constante aprendizado, participando de eventos e sempre programando e desenvolvendo algo. <br/>
        Atualmente faço parte do time de Desenvolvimento da Cobasi Labs, onde desenvolvo aplicações voltada para o e-commerce com a utilização da VTEX
        {' '}.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
            Nasceu em Guarulhos - SP - Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
            Entrou pro time do Cobasi Labs
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
            Graduação em Análise e Desenvolvimento de Sistemas - FIAP
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
            Front End Cobasi Labs 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://www.braziljs.org/" target="_blank">
            JavaScript
          </Link>
          , Skateboard, Basketball
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/pedroh-cm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @pedroh-cm
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
