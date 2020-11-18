import {Post} from "./post";
import {User} from "./user";
import {Comment} from "./comment";

/**
 * Like
 */
export interface Reaction {
    getAuthor: () => Promise<User>
    getReactedOn: () => Promise<Post | Comment>;
}
