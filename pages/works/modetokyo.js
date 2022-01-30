import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tyflex Films">
    <Container>
      <Title>
        Tyflex.is <Badge>2020</Badge>
      </Title>
      <P>Projeto Desenvolvido junto com comunidade do Discord do Tyflex</P>
      <P>
        Este projeto foi desenvolvido através de uma brincadeira de 5 amigos via Discord <br/>
        Onde em pouco tempo de desenvolvimento o projeto pegou uma repercussão acima do esperado
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS - Android</span> 
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Política Privacidade</Meta>
          <Link href="https://tyflex.is/terms.html">
            A sua privacidade é importante para nós. 
            É política do tyflex respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site tyflex, 
            e outros sites que possuímos e operamos.{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tyflex-01.jpeg" alt="Tyflex" />
      <WorkImage src="/images/works/tyflex-02.jpeg" alt="Tyflex" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
