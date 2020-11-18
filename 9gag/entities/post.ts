import {User} from "./user";
import {PostType} from "../constants/post";
import {Comment} from "./comment";
import {Section} from "./section";
import {PostContent} from "./post-content";

export interface Post {
    name: string;
    type: PostType;

    getOp: () => Promise<User>
    getSection: () => Promise<Section>
    getContent: () => Promise<PostContent>
    getComments: () => Promise<Comment[]>
    getReactionCount: () => Promise<[number, number]>
}
