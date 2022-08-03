import instance from './instance';

export const listSub = () => {
    const url = `/subcategory`;
    return instance.get(url)
}
