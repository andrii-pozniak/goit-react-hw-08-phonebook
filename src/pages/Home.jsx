import { Flex, Container, Box, Image } from '@chakra-ui/react';

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

  export default function Home() {
    return (
        <Box >
            <Container w='98%'>
                <Flex w='98%' >
                <div style={styles.container}>
        <h1 style={styles.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
            
          </span>
          
        </h1>
        <img src='/logo512.png'   alt='Dan Abramov'  />
      </div>
               
                </Flex>
               
            </Container>
        </Box>
      
    );
  }