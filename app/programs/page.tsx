import React from "react";
import Header from '@/components/template/header/Header';
import ProgramSectionMain from "@/components/program-section/ProgramSectionMain";
import FollowCursor from "@/components/FollowCursur";

const Home = () => {
	return (
		<main className="main">
			<FollowCursor />
			<Header>DepED</Header>
			<ProgramSectionMain></ProgramSectionMain>
		</main>
	);
};

export default Home;
