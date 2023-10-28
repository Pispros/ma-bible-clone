'use client';

import { Box } from '@chakra-ui/react';
import './Header.scss';
import { ChevronLeftIcon } from '@chakra-ui/icons'


const Header = ({ title, titleIcon,  icons, showBack } : { 
	title?: string;  
	titleIcon?: React.ReactNode;
	icons?: React.ReactNode; 
	showBack?: boolean
})  => 
{
	return(
		<div className="HeaderWrapper">
			<Box
				display="flex"
				flexFlow="row nowrap"
				justifyContent="space-between"
				alignItems="center"
				padding="10px 20px 10px 10px"
				width="100%"
			>
				<Box
					display="flex"
					flexFlow="row nowrap"
					alignItems="center"
				>
					{
						showBack === true &&
						<Box
						className='onlyMobile'
						ml="3"
						>
							<ChevronLeftIcon boxSize={8}/>
						</Box>
					}					
					<Box
						ml="3"
					>
						{ titleIcon }
					</Box>
					<Box
						fontWeight="bold"
						fontSize="2xl"
						ml="2"
					>
						{ title }
					</Box>
				</Box>
				<Box>
					{ icons }
				</Box>
			</Box>
		</div>
	)
}

export default Header