import {ReactionType} from "../constants/reactions";
import {User} from "./user";

export interface Reaction {
    type: ReactionType

    getAuthor: () => Promise<User>
}
