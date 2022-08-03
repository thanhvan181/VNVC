import instance from './instance';
// import queryString from 'query-string';


export const getInjectionPacks = (params: any) => {

    const paramString = new URLSearchParams(params).toString();
    const url = `/injectionpack?${paramString}`;
    console.log("URL: ", url)
    return instance.get(url)
}
export const listInjection = () => {
    const url = `/injectionparks`;
    return instance.get(url)
}
export const readone = (id: any) => {
    const url = `/injectionparks/${id}`;
    return instance.get(url)
}
export const addInjection = (injection: any) => {
    const url = `/injectionpark`;
    return instance.post(url, injection)
}
export const removeInjectionPark = (id: any) => {
    const url = `injectionpark/${id}`;
    return instance.delete(url);
}
export const updateInjectionPark = (id: any, injection: any) => {
    const url = `injectionpark/${id}`;
    return instance.put(url, injection)
}

