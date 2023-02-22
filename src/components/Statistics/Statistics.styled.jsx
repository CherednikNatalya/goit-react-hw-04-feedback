import styled from 'styled-components';

export const List = styled.ul`
	/* padding-left: 50px; */
`;

export const Item = styled.li`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	color: var(--gray);
	font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 25px;


	&:not(:last-child) {
		margin-bottom: 5px;

		
	}
`;