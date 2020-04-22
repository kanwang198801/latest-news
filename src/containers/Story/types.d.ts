export interface StoryType {
    by: string,
    descendants: number,
    id: number,
    kids: [],
    score: number,
    text: "",
    time: number,
    title: string,
    type: string,
    url: string,
}
export interface CommentType {
    by: string,
    id: number,
    kinds: [],
    parent: number,
    text: string,
    time: number,
    type: string
}