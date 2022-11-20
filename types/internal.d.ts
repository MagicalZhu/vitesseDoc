declare module 'internal' {
	export interface BlogType {
		path: string
		title: string
		date: string
	}
	export interface Social {
		icon: string;
		link: string;
		name?: string;
		size?: string;
	}
  export interface Board {
		title: string;
		boardContent: string;
		time: string;
		labels?: string[];
    comments: number,
    linkUrl: string,
    author: string,
    authorHome: string
	}
}
