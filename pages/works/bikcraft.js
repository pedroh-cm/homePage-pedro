import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bickcraft">
    <Container>
      <Title>
        Bickcraft <Badge>2021-</Badge>
      </Title>
      <P>
        Um site desenvolvido para vendas de bicicletas
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bikecraft-khaki.vercel.app/">
          https://bikecraft-khaki.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML / CSS3 / JS </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bikcraft.jpeg" alt="bikcraft" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
