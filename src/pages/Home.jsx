import { Heading, Box, Image, Center } from '@chakra-ui/react';

  export default function Home() {
    return (
        <Box >
             <Center>
             <Heading as='h1' mt={'10'} size='2xl'>Phonebook manager welcome page</Heading>  
              </Center>           
            <Center>
            <Image mt={'5'}  boxSize='400px' src='https://st.depositphotos.com/1001187/2640/v/600/depositphotos_26401401-stock-illustration-vector-phone-icon.jpg'   alt='Dan Abramov'  />

            </Center>            
        </Box>
      
    );
  }