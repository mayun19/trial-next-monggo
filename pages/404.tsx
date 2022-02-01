import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Cutom404() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 2000);
	});

	return (
		<div className="container">
			<h1 className="title-nofound ">Oooops...</h1>
			<h1 className="title-nofound ">Page not Found</h1>
		</div>
	);
}
