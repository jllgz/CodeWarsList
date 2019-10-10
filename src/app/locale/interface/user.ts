import { Challenge } from '../interface/challenge';
export interface User {
    id: number;
    username: string;
    name: string;
    clan: string;
    rank: string;
    honor: number;
    leadership: number;
    languages: string[];
    challenges: Challenge[];
}
