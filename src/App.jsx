import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
	return (
		<MainContainer className="text-7xl font-bold">
			<WelcomeText>Welcome</WelcomeText>
			
		</MainContainer>
	);
};

const MainContainer = styled.div`
	width: 30vw;
	height: 80vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(8.5px);
	-webkit-backdrop-filter: blur(8.5px);
	border-radius: 10px;
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`
	margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 20%;
	width: 100%;
`;

const ButtonContainer = styled.div`
	margin: 1rem 0 2rem 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoginWith = styled.h5`
	cursor: pointer;
`;

const HorizontalRule = styled.hr`
	width: 90%;
	height: 0.3rem;
	border-radius: 0.8rem;
	border: none;
	background: linear-gradient(to right, #14163c 0%, #03217b 79%);
	background-color: #ebd0d0;
	margin: 1.5rem 0 1rem 0;
	backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 2rem 0 3rem 0;
	width: 80%;
`;

const ForgotPassword = styled.h4`
	cursor: pointer;
`;

export default App;
