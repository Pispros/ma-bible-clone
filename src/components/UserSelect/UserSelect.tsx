
import { Box, Grid, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import './UserSelect.scss'
import Image from 'next/image'
import avatar from "@/assets/img/avatar.png";

const UserSelect = () => 
{
	return(
		<div className="UserSelectWrapper">
			<Grid 
				templateColumns="25% 65% 10%" 
				width="90%" 
				ml="5%" 
				height="8vh"
				padding="10px"
				border="solid 1px var(--item-background)"
				borderRadius="xl"
				backgroundColor="var(--body-background)"
			>
				<Box
					display="flex" 
					justifyContent="flex-end" 
					alignItems="center"
				>
					<Box 
						className='avatarContainer'
						padding="2" 
						borderRadius="50%" 
						display="flex" 
						justifyItems="center" 
						alignItems="center"
						backgroundColor="var(--danger-color)"
					>
						<Image
							className='avatarImg'
							src={avatar}
							alt='Théo avatar'
						/>
					</Box>
				</Box>
				<Box ml="2">
					<Text fontSize="md">
						Théophile
					</Text>
					<Text mt="-1" fontSize="sm" color="var(--text-second-color)">
						@theo
					</Text>
				</Box>
				<Box
					display="flex" 
					justifyContent="flex-start" 
					alignItems="center"
					transform="translateX(-10px)"
				>
					<ChevronDownIcon boxSize={6} />
				</Box>
			</Grid>
		</div>
	)
}

export default UserSelect