import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
	return <MainContainer className="text-7xl font-bold"></MainContainer>;
};

const MainContainer = styled.div`
	width: 30vw;
	height: 80vh;
	display: flex;
	align-items: center;
	flex-direction: column;
   background: rgba(255, 255, 255, 0.15);
`;

export default App;
