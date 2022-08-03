import instance from './instance';

export const listproduct = (params: any) => {
    const paramString = new URLSearchParams(params).toString();
    if (!paramString) {
        const url = `/products`;
        return instance.get(url)

    }
    const url = `/products?${paramString}`
    return instance.get(url)
}

export const remove = (id: any) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const read = (id: any) => {
    const url = `/product/${id}`;
    return instance.get(url)
}
export const create = (iduser: any, product: any, token: string) => {
    // const config = 

    const url = `/product/${iduser}`;
    return instance.post(url, product, {
        headers: { authtoken: token }
    })
}

export const getproducts = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const getproductsCate = (id: any) => {
    const url = `/products/category/${id}`;
    return instance.get(url)
}
export const getproductsSubcate = (id: any) => {
    const url = `products/subcategory/${id}`;
    return instance.get(url)
}
export const updateproduct = (id: string, product: any) => {
    console.log("UAPI ID: ", id, product)
    const url = `/product/${id}`;
    return instance.put(url, product)

}
export const searchProduct = (params: any) => {
    const paramString = new URLSearchParams(params).toString();
    const url = `/search?${paramString}`
    console.log("SEARch URL: ", url, params)
    return instance.get(url);
}
export const getAll = () => {
    const url = `/productall`;
    return instance.get(url)
}