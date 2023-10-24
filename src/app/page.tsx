'use client';

import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
        router.push('/welcome');
    }, 500);
  }, [])
  
  return (
    <>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </>
  )
}
