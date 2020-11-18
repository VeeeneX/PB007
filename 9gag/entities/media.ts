export interface Media {
    url: string;

    getFile: () => Promise<ArrayBuffer>
}
