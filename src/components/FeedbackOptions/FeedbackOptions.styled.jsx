import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 20px;
`;

export const Button = styled.button`
	display: inline-block;
	padding: 5px 15px;
	background-color: #cfc7c7;
	border-radius: 5px;

	font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 25px;

	@media (any-hover: hover){
	transition: all var(--anim);
		&:hover{
			color: #fff;
			background-color: #2b2929;
		}
	}
	&:active {
			background-color: #4a4848;
		}
`;