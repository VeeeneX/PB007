import {User} from "./user";
import {Reaction} from "./reaction";

export interface Comment {
    content: string;

    getAuthor: () => Promise<User>
    getReplies: () => Promise<Comment[]>
    getReactions: () => Promise<Reaction[]>

    isOp: () => Promise<boolean>
}
