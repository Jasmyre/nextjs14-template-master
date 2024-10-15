import React from "react";
import Header from '@/components/template/header/Header';
import ResourceSectionMain from "@/components/resource-section/ResourceSectionMain";

const Home = () => {
	return (
		<main className="main">
			<Header>DepED</Header>
			<ResourceSectionMain></ResourceSectionMain>
		</main>
	);
};

export default Home;
