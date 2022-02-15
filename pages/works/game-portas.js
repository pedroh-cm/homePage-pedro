import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Game Porta Premiada">
    <Container>
      <Title>
        Game Porta Premiada<Badge>2022-</Badge>
      </Title>
      <P>
          Game Page criada com framework Next.js/React.js aplicando os conceitos fundamentais do Next.js, 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://projeto-portas-next.vercel.app/">
          https://projeto-portas-next.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS / Next.js </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/jogo_porta.png" alt="Tela Jogo Monty Hall" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
