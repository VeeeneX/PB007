import {Post} from "./post";

export interface User {
    nickname: string;
    description: string;
    gender: string;

    getPosts: () => Promise<Post[]>

    getFollowers: () => Promise<User[]>
    getSubscribers: () => Promise<User[]>

    getFollowersCount: () => Promise<number>
    getSubscribersCount: () => Promise<number>
}
