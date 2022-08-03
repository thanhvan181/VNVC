import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { searchSanpham } from '../features/Website/ProductClient/ProductClientSlide';



const Search = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<any> = (data: any) => {
        console.log("datasearch", data);

        dispatch(searchSanpham(data));
    };
    return (
        <div>
            <form action="#" className="search" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <input
                        id="search"
                        {...register("q")}
                        name="q"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        required
                       
                    />
                    <label className="visually-hidden" htmlFor="search"></label>
                   
                    <button className='search'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Search
