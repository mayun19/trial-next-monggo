import Layout from "../components/Layout";
import styles from "../styles/blog.module.css";

type Post = {
	id: number;
	title: string;
	body: string;
};

type BlogProps = {
	dataBlog: Post[];
};
export default function Blog(props: BlogProps) {
	const { dataBlog } = props;
	return (
		<Layout pageTitle="Blog">
			<h3>Blog Page</h3>
			{dataBlog.map((blog) => {
				return (
					<div className={styles.card} key={blog.id}>
						<h4> {blog.title} </h4>
						<p> {blog.body} </p>
					</div>
				);
			})}
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const dataBlog = await res.json();
	return {
		props: {
			dataBlog: dataBlog,
		},
	};
}
