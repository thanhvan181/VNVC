import instance from './instance';

export const upload = () => {
    const url = `/upload`;
    return instance.get(url)
}
export const deleteFile = (fileName: any) => {
    const url = `/upload/${fileName}`;

    return instance.delete(url)
}