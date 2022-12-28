import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';


import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    const { colorMode } = useColorMode

  return (
    <Box bg={colorMode === 'dark'? 'blue.100':'blue.300'}>
        <Container maxW='container.lg'>
            <Flex justifyContent='space-between' alignItems='center'>            
                <Navigation />
             {isLoggedIn ? <UserMenu /> : <AuthNav />}   
             <ColorModeSwitcher/>  
            </Flex>
             
        </Container>
    </Box>
    
  );
};