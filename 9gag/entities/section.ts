import {Post} from "./post";

export interface Section {
    name: string;

    getFresh: () => Promise<Post[]>
    getHot: () => Promise<Post[]>
}
