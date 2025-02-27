import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react'
import { BsPlusSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          bgGradient="linear(to-r, #00FFFF, #007BFF)"
          bgClip='text'
          fontSize={{ base: '22px', sm: '28px' }}
          fontWeight='extrabold'
        >
          <Link to={'/'}>Product Store 🛒</Link>
        </Text>

        <HStack spacing='2' alignItems={'center'}>
          <Link to={'/create'}>
            <Button>
              <BsPlusSquare></BsPlusSquare>
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}
export default navbar
