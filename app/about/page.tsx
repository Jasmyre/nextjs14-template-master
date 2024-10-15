import React from "react";
import Header from '@/components/template/header/Header';
import AboutSectionMain from "@/components/about-section/AboutSectionMain";
import FollowCursor from "@/components/FollowCursur";

const Home = () => {
	return (
		<main className="main">
			<FollowCursor />
			<Header>DepED</Header>
			<AboutSectionMain></AboutSectionMain>
		</main>
	);
};

export default Home;
