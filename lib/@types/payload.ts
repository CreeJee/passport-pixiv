export type PixivPhoto = {
    type: string,
    value: string
}
export type PixivProfileResponse = {
    id: string,
    displayName: string
    username: string;
    photos: PixivPhoto[]
}