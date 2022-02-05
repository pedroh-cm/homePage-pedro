import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Alura Cases">
    <Container>
      <Title>
        Alura Cases <Badge>2022-</Badge>
      </Title>
      <P>
          Landing Page criada com framework Next.js/React.js criada pela empresa Vercel, 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://curso-nextjs-alura-01.vercel.app/">
          https://curso-nextjs-alura-01.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS / Skynexui / Next.js </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/alura-cases.png" alt="alura-cases" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
