import React from "react";
import Header from '@/components/template/header/Header';
import K212SectionMain from "@/components/k212-section/K212SectionMain";
import FollowCursor from "@/components/FollowCursur";

const Home = () => {
	return (
		<main className="main">
			<FollowCursor />
			<Header>DepED</Header>
			<K212SectionMain></K212SectionMain>
		</main>
	);
};

export default Home;
