import {User} from "./user";
import {Tag} from "./tag";
import {Post} from "./post";

export interface Comment {
    content: string;

    getAuthor: () => Promise<User>
    getTags: () => Promise<Tag[]>
    getLikeCount: () => Promise<number>
    getPost: () => Promise<Post>
}
