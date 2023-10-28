'use client';

import './Note.scss'
import { Box, Text, useMediaQuery, Input } from '@chakra-ui/react';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import noteD from '@/assets/icons/active/note.png';

const NoteContentComponent = ({ noteId } : { noteId?: string | string[] | undefined }) => 
{
	const [isForDesktop] = useMediaQuery('(min-width: 990px)');

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
            <svg style={{width: 30, height: 30, cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>
        </Box>
    );
    const desktopTitleIcons = (
        <>
            <Box
                display="flex"
                flexFlow="row nowrap"
                alignItems="center"
            >
            	<svg style={{width: 30, height: 30, cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>
            </Box>
        </>        
    );
	return(
		<div className="NoteWrapper">
			<Header
                title='Titre de la note'
                titleIcon={titleIcon}
                icons={isForDesktop ? desktopTitleIcons : titleIcons}
                showBorder={true}
				showBack={true}
				returnUrl='/note'
            />
		</div>
	)
}

export default NoteContentComponent