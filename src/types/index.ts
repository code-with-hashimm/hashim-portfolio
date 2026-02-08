export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}
