'use client';

import { Box, Text, useMediaQuery, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import './styles.scss';
import Header from '@/components/Header/Header';
import noteD from '@/assets/icons/active/note.png';
import add from '@/assets/icons/add.png';
import empty from '@/assets/img/empty.png';
import Image from 'next/image';
import { SearchIcon } from '@chakra-ui/icons';
import { useStoreState } from 'easy-peasy';
import { NoteInterface } from '@/interfaces/note.type';


const notePage = () => {
    const [isForDesktop] = useMediaQuery('(min-width: 990px)');
    const notes: Array<NoteInterface> = useStoreState((state: any) => state.notes);


    const titleIcon = (
        <Image
            src={noteD}
            alt='Title icon'
        />
    );
    const titleIcons = (
        <Box
            display="flex"
            flexFlow="row nowrap"
            alignItems="center"
        >
            <SearchIcon boxSize={5} />
            <Box
                ml="4"
                padding="2"
                backgroundColor={"var(--item-background)"}
                borderRadius="50%"
                width="40px"
                height="40px" 
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={add}
                    alt="Add Icon"
                />
            </Box>
        </Box>
    );
    const desktopTitleIcons = (
        <>
            <Box
                display="flex"
                flexFlow="row nowrap"
                alignItems="center"
            >
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='var(--divider-desktop-color-background)' />
                    </InputLeftElement>
                    <Input backgroundColor="var(--item-background)" type='text' placeholder='Rechercher' />
                </InputGroup>
            </Box>
            <Box
                className='shadow'
                position="fixed"
                bottom="5"
                right="20%"
                padding="3"
                backgroundColor="var(--body-background)"
                fontWeight="bold"
                borderRadius="50%"
                width="43px"
                height="43px" 
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
            >
                <Image
                    src={add}
                    alt="Add Icon"
                />
            </Box>
        </>        
    );
    return (
        <Box className='noteWrapper'>
            <Header
                title='Notes'
                titleIcon={titleIcon}
                icons={isForDesktop ? desktopTitleIcons : titleIcons}
            />
            {
                notes.length > 0 ?
                <></>
                :
                <>
                    <Box 
                        height="40vh"
                        display="flex"
                        flexFlow="column"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Image
                            src={empty}
                            alt="Empty notes"
                        />
                        <br />
                        <Text textAlign="center" color="var(--text-second-color)">
                            Aucune note rédigée <br /> pour le moment
                        </Text>
                    </Box>
                </>
            }
        </Box>
    );
}

export default notePage;