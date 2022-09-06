import styled from "styled-components";
import Line from "./Line";

const FooterSection = styled.div`
	width: 100%;
	display: flex;
  
	align-items: center;
	justify-content: center;
	background: black;
  color: white;
  margin-top: 14rem;
`;

const Footer = () => {
	return (
  <FooterSection>
    <Line />
    <h1>Footer</h1>
    <Line />
  </FooterSection>
  );
};

export default Footer;
