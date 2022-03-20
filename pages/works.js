import { Container, Heading, SimpleGrid, List, ListItem, Link, Button, Icon } from '@chakra-ui/react'
import {IoLogoGithub}  from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <p>Em breve - aguarde 🚀</p>
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
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
