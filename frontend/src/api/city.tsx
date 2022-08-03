import instance from './instance';

export const create = (city: any) => {
    const url = `/city`;
    
    return instance.post(url, city)
}
export const listCity = () => {
    const url = `/city`;
   
    return instance.get(url)
}