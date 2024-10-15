import React from "react";
import Header from '@/components/template/header/Header';
import ContactSectionMain from "@/components/contact-section/ContactSectionMain";
import FollowCursor from "@/components/FollowCursur";

const Home = () => {
	return (
		<main className="main">
			<FollowCursor />
			<Header>DepED</Header>
			<ContactSectionMain></ContactSectionMain>
		</main>
	);
};

export default Home;
