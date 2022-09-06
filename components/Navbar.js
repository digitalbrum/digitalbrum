import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Line from "./Line";
import Logo from "../public/images/Logo_Icon_1x.png";

const Nav = styled.div`
	width: 100%;
	height: 80px;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	background: black;
`;

const StyledLink = styled.a`
	padding: 0.6rem 2rem;
	margin: 0 2rem;
	cursor: pointer;

	${(props) =>
		props.image &&
		css`
			padding: 0;
		`}
`;

const Navbar = () => {
	return (
		<Nav>
			<Line />
			<Link href="/services">
				<StyledLink>SERVICES</StyledLink>
			</Link>
			<Link href="/work">
				<StyledLink>WORK</StyledLink>
			</Link>
			<Link href="/">
				<StyledLink image>
					<Image src={Logo} alt="Digital Brum Logo" width={400} height={400} />
				</StyledLink>
			</Link>
			<Link href="/about">
				<StyledLink>ABOUT</StyledLink>
			</Link>
			<Link href="/contact">
				<StyledLink>CONTACT</StyledLink>
			</Link>
			<Line />
		</Nav>
	);
};

export default Navbar;
