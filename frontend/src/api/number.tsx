import instance from './instance';

export const create = (numbers: any) => {
    const url = `/number`;
    
    return instance.post(url, numbers)
}

