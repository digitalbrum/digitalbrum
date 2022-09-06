import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
	color: white;
	font-size: 2rem;
	font-weight: bold;
	margin: 2rem 4rem;
	padding: 1rem 4rem;
	border-radius: 1.6rem;
	border: none;
	cursor: pointer;
  background: none;

	${(props) =>
		props.primary &&
		css`
			background-color: #7820ad;
			background-image: linear-gradient(145deg, #7820ad, #fc0b7b);
		`}

	${(props) => props.secondary && css`
    color: #fc0b7b;
    border: .2rem solid #fc0b7b;
  `}

  ${(props) => props.tertiary && css`
    color: black;
  `}
`;

export default Button;
