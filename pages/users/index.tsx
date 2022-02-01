import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Users(props: { dataUsers: Array<any> }) {
	const router = useRouter();
	console.log(props.dataUsers);
	return (
		<Layout pageTitle="Users">
			<h5>Users Page</h5>
			{props.dataUsers.map((user: any) => {
				return (
					<div key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
						<p> {user.email} </p>
						<p> {user.name} </p>
					</div>
				);
			})}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const dataUsers = await res.json();
	return {
		props: {
			dataUsers,
		},
	};
}
