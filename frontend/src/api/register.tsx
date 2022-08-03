import instance from './instance';

export const list = () => {
    const url = `/register`;
    return instance.get(url)
}
export const create = (data: any) => {
    const url = `/register`;
    return instance.post(url, data);
}
export const resgiterdetails = (id:any) => {
    const url = `/regiterdetail${id}`;
    return instance.get(url)
}
export const listResgister = (id:any) => {
    const url = `/register/${id}`;
    return instance.get(url)
}