import { Container, Heading, SimpleGrid, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h1" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1]} mb={6}>
          <Heading as="h2" fontSize={20} mb={4} variant="section-title" lineHeight={1.8}>TypeScript: por trás do superset de JavaScript</Heading>
          <Text mb={4}>Um conjunto de ferramentas JavaScript que adicionou tipagem e novos recursos na linguagem</Text>
          <Text mb={4}>Faz algum tempo já que estamos encantados com o TypeScript e já inserimos a tecnologia em nossa programação diária.</Text>
          <Text mb={5}>Entre iniciantes ainda existe muitas dúvidas sobre o que significa, na prática, TypeScript e quais são suas diferenças com o JavaScript.</Text>
          <Text mb={4}>Os que já estão mais adaptados com ele, no entanto, podem não saber de detalhes, ou curiosidades, relevantes sobre a trajetória do TS dentro do mercado de trabalho.</Text>
          <Text>O conteúdo de hoje vai se aproximar de uma conversa mais técnica para tentar responder algumas perguntas e compreender, afinal, quais foram os impactos do TypeScript em nossos códigos.</Text>
        </SimpleGrid>

        <SimpleGrid columns={[1]}>
          <Heading as="h2" fontSize={20} mb={4} variant="section-title" lineHeight={1.8}>JAMstack: geleia de JavaScript, API e Markup</Heading>
          <Heading as="h3" fontSize={18} mb={4}>O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web?</Heading>
          <Text mb={4}>Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.</Text>
          <Text mb={4}>Criada por Mathias Biilmann, CEO do Netlify, JAMstack é uma filosofia de criação de sites estáticos que insere conceitos e práticas específicas dentro de um ecossistema tecnológico.</Text>
          <Heading fontSize={20} mb={4} variant="section-title">JAM</Heading>
          <UnorderedList>
            <ListItem mb={4}><Text fontWeight="bold" display="inline-block">JavaScript</Text> obviamente, é o componente responsável em popularizar a arquitetura.</ListItem>
            <ListItem mb={4}>A linguagem é amplamente utilizada no mercado de desenvolvimento web.</ListItem>
            <ListItem mb={4}>Em poucas palavras: JavaScript é o que providencia todas as funcionalidades dinâmicas e interativas para o sistema, sem restrições de frameworks (React, Vue, Angular, Svelte e afins).</ListItem>
            <ListItem mb={4}>Todas as funções do servidor, ou banco de dados, são manuseadas por APIs reutilizáveis, acessadas por HTTPS com JS.</ListItem>
            <ListItem><Text fontWeight="bold" display="inline-block">Markup</Text> é o arquivo estático gerado por ferramentas de desenvolvimento de páginas web, como NextJS, Gatsby ou Create-React-App.</ListItem>
          </UnorderedList>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
