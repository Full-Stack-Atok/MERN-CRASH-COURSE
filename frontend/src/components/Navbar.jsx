import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon, IoSunny } from 'react-icons/io5'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW='1140px' px={4}>
      <Flex
        h={16}
        alignItems='center'
        justifyContent='space-between'
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          bgGradient='linear(to-r, #00FFFF, #007BFF)'
          bgClip='text'
          fontSize={{ base: '22px', sm: '28px' }}
          fontWeight='extrabold'
        >
          <Link to='/'>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems='center'>
          <Link to='/create'>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <IoMoon size={20} />
            ) : (
              <IoSunny size={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
