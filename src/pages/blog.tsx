import React from "react";

import {
	Card,
	Layout,
	NavBar,
	Header,
	SEO,
	SearchCard,
	Title,
} from "../components";

import styles from "./blog.module.css";
import { Link } from "gatsby";

const Blog: React.FC = () => (
	<Layout>
		<SEO title="Blog" />
		<Header>
			<NavBar showProfileImage />
			<Title title="Blog" />
		</Header>
		<main>
			<SearchCard />
			<ul className={styles.postList}>
				<li className={styles.postListItem}>
					<Link className={styles.postLink} to="/blog1">
						<Card className={styles.postCard}>
							<h3 className={styles.postTitle}>Blog Title</h3>
							<span className={styles.postDetail}>
								<time dateTime="2020-04-11">11th April 2020</time> - 11 mins
							</span>
							<p className={styles.postDescription}>Blog description</p>
							<img
								className={styles.postImage}
								src="https://via.placeholder.com/1500"
								alt=""
							/>
						</Card>
					</Link>
				</li>
				<li className={styles.postListItem}>
					<Link className={styles.postLink} to="/blog1">
						<Card className={styles.postCard}>
							<h3 className={styles.postTitle}>Blog Title</h3>
							<span className={styles.postDetail}>
								<time dateTime="2020-04-11">11th April 2020</time> - 11 mins
							</span>
							<p className={styles.postDescription}>Blog description</p>
							<img
								className={styles.postImage}
								src="https://via.placeholder.com/1500"
								alt=""
							/>
						</Card>
					</Link>
				</li>
				<li className={styles.postListItem}>
					<Link className={styles.postLink} to="/blog1">
						<Card className={styles.postCard}>
							<h3 className={styles.postTitle}>Blog Title</h3>
							<span className={styles.postDetail}>
								<time dateTime="2020-04-11">11th April 2020</time> - 11 mins
							</span>
							<p className={styles.postDescription}>Blog description</p>
							<img
								className={styles.postImage}
								src="https://via.placeholder.com/1500"
								alt=""
							/>
						</Card>
					</Link>
				</li>
				<li className={styles.postListItem}>
					<Link className={styles.postLink} to="/blog1">
						<Card className={styles.postCard}>
							<h3 className={styles.postTitle}>Blog Title</h3>
							<span className={styles.postDetail}>
								<time dateTime="2020-04-11">11th April 2020</time> - 11 mins
							</span>
							<p className={styles.postDescription}>Blog description</p>
							<img
								className={styles.postImage}
								src="https://via.placeholder.com/1500"
								alt=""
							/>
						</Card>
					</Link>
				</li>
				<li className={styles.postListItem}>
					<Link className={styles.postLink} to="/blog1">
						<Card className={styles.postCard}>
							<h3 className={styles.postTitle}>Blog Title</h3>
							<span className={styles.postDetail}>
								<time dateTime="2020-04-11">11th April 2020</time> - 11 mins
							</span>
							<p className={styles.postDescription}>Blog description</p>
							<img
								className={styles.postImage}
								src="https://via.placeholder.com/1500"
								alt=""
							/>
						</Card>
					</Link>
				</li>
			</ul>
		</main>
	</Layout>
);

export default Blog;
