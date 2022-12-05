import { Grid, SimpleGrid, Stack } from '@chakra-ui/react'
import Header from '../components/Header/Header'
import ListCard from '../components/Card/ListCard'

const Home = () => {
  return (
    <Stack>
      <Header />
      <Stack>
        <ListCard />
      </Stack>
    </Stack>
  )
}

export default Home