import {TagType} from "../constants/tag";
import {Post} from "./post";
import {User} from "./user";

export interface Tag {
    type: TagType
    name: string;

    getRelated: () => Promise<User | Post[]>
}
