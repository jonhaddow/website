import { FluidObject } from "gatsby-image";

export interface AllMdx {
	edges: {
		node: Mdx;
	}[];
}

export interface Mdx {
	id: string;
	body: string;
	frontmatter?: {
		slug: string;
		featuredImage?: FluidImg;
		title: string;
		date: string;
		abstract: string;
	};
	timeToRead: number;
	fields?: {
		editLink?: string;
	};
}

export interface FluidImg {
	childImageSharp?: {
		fluid: FluidObject;
		original?: {
			src: string;
		};
	};
}
