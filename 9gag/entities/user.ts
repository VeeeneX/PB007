import {Post} from "./post";
import {Media} from "./media";

export interface User {
    daysActive: number
    nickname: string

    getComments: () => Promise<Comment[]>
    getPosts: () => Promise<Post[]>
    getAvatar: () => Promise<Media>
}
