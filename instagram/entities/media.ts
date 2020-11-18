import {Post} from "./post";

export interface PostMedia {
    url: string;
    order: number;

    getPosts: () => Promise<Post[]>
}
