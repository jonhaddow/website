import React from "react";
import { Layout, Header, NavBar, Title, Card } from "../components";

const About: React.FC = () => {
	return (
		<Layout>
			<Header>
				<NavBar />
				<Title title="About" />
			</Header>
			<Card></Card>
		</Layout>
	);
};

export default About;
