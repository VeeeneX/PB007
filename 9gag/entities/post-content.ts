import {Post} from "./post";
import {Media} from "./media";

export interface PostContent {
    description: string;

    getPost: () => Promise<Post>
    getMedia: () => Promise<Media>
}
