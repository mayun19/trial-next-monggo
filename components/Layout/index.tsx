import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
	children: ReactNode;
	pageTitle: String;
}

export default function Layout(props: LayoutProps) {
	const { children, pageTitle } = props;
	return (
		<div className={styles.container}>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={styles.content}> {children} </div>
			<Footer />
		</div>
	);
}
