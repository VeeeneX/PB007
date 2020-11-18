import {PostType} from "../constants/post";
import { Comment } from "./comment";
import {User} from "./user";
import {Tag} from "./tag";
import { PostMedia} from "./media";

export interface Post {
    type: PostType
    content: string;

    getLikeCount: () => Promise<number>
    getComments: () => Promise<Comment[]>
    getAuthor: () => Promise<User>
    getTags: () => Promise<Tag[]>
    getMedia: () => Promise<PostMedia[]>
}
