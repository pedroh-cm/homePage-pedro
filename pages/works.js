import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import tyflex from '../public/images/works/tyflex.jpeg'
import dtmoney from '../public/images/works/dtmoney.jpeg';
import bikcraft from '../public/images/works/bikcraft.jpeg';
import aluraCase from '../public/images/works/alura-cases.png'; 
import telaGameMontyHall from '../public/images/works/page_inicial_jogo_portas.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
          Um aplicativo de anotações Markdown com mais de 100 plugins, multiplataforma e
          suporte a sincronização de dados criptografados
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Aplicativo de recomendação de música para iOS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bikcraft"
            title="bikcraft"
            thumbnail={bikcraft}
          >
            Site para vendas de bike
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dtmoney"
            title="dtmoney"
            thumbnail={dtmoney}
          >
            Aplicativo de controle financeiro
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="alura-cases"
            title="Alura Cases"
            thumbnail={aluraCase}
          >
            
            Landing page criada com Next.js e React.js
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="game-portas"
            title="Game Porta Premiada"
            thumbnail={telaGameMontyHall}
          >
            
            Game page criada com Next.js e React.js
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={tyflex}
            title="Tyflex films"
          >
            você encontra um vasto catálogo com as séries e filmes do momento e também os clássicos que tanto ama.
            Aproveite, com liberdade total, uma infinidade de conteúdo e os principais eventos esportivos, como
            os jogos do seu time do coração e os campeonatos de luta mais disputados do mundo!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
