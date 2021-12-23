import {
  Link as ChakraLink,
  Text,
  Center,
  Stack,
} from '@chakra-ui/react'

import { Counter } from '../components/Counter'
import { DarkModeSwitch } from '../components/DarkModeSwitch'


const Index = () => (
  <Center height="100vh" pb='3vh'>
    <Stack>
      <Text as='h1'>How many days ?</Text>
      <Counter/>
    </Stack>
    <DarkModeSwitch/>
  </Center>
)

export default Index
