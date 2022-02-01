import { useRouter } from "next/router";
import Layout from "../../components/Layout";

// interface UserProps {
// 	user: Array<Provider>;
// }

interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
	website: string;
}

export default function UserDetail(props: { user: User }) {
	const router = useRouter();
	const { id } = router.query;
	// console.log(user);

	const { user } = props;

	return (
		<Layout pageTitle={`Detail/${id}`}>
			{/* <p>User Detail {id}</p> */}
			<p> {user.name} </p>
			<p> {user.email} </p>
			<p> {user.phone} </p>
			<p> {user.website} </p>
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const dataUsers = await res.json();
	const paths = dataUsers.map((user: User) => ({
		params: {
			id: `${user.id}`,
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

interface context {
	params: {
		id: string;
	};
}
export async function getStaticProps(context: context) {
	const { id } = context.params;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const user = await res.json();
	return {
		props: {
			user,
		},
	};
}
