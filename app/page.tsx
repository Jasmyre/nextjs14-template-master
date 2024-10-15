import React from "react";
import Header from '@/components/template/header/Header';
import HeroSectionMain from "@/components/hero-section/HeroSectionMain";

const Home = () => {
	return (
		<main className="main">
			<Header>DepED</Header>
			<HeroSectionMain></HeroSectionMain>
		</main>
	);
};

export default Home;
