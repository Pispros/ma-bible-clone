'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, Grid, Box, useMediaQuery } from '@chakra-ui/react';
import MainMenu from '@/components/MainMenu/MainMenu';
import { StoreProvider } from 'easy-peasy';
import { easyPeasyStore } from '@/stores';


export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {

  const [isForDesktop] = useMediaQuery('(min-width: 990px)');

  return (
    <StoreProvider store={easyPeasyStore}>
        <CacheProvider>
            <ChakraProvider>
                {
                    isForDesktop ? 
                    <Grid templateColumns="20% 60% 20%" height="100vh" width="100%">                
                        <Box height="100vh" overflowY="auto" overflowX="hidden">
                            <MainMenu/>
                        </Box>
                        <Box height="100vh" overflowY="auto" overflowX="hidden">
                            {children}
                        </Box>
                        <Box height="100vh" overflowY="auto" overflowX="hidden" backgroundColor={'var(--relevant-background)'}>
                            
                        </Box>
                    </Grid>
                    :
                    <Grid templateRows="90vh 10vh" height="100vh">
                        <Box overflowY="auto" overflowX="hidden">
                            {children}
                        </Box>
                        <Box overflow="hidden">
                            <MainMenu/>
                        </Box>
                    </Grid>
                }                
            </ChakraProvider>
        </CacheProvider>
    </StoreProvider>
    
  )
}