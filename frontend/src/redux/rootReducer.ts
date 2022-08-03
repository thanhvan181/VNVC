import { combineReducers } from 'redux'
import CitySlide from '../features/Admin/City/CitySlide';
import CompanySlide from '../features/Admin/Company/CompanySlide';
import InjectionPark from '../features/Admin/InjectionPark/InjectionPark';
import AuthSlide from '../features/Website/Auth/AuthSlide';
import CartSlide from '../features/Website/Cart/CartSlide';
import CategorySlide from '../features/Website/Category/CategorySlide';
import OrderSlide from '../features/Website/Order/OrderSlide';

import productSlice from '../features/Website/ProductClient/ProductClientSlide';
import RegisterSlide from '../features/Website/Register/RegisterSlide';
import Subcategory from '../features/Website/Subcategory/Subcategory';





const rootReducer = combineReducers({

    product: productSlice,
    category: CategorySlide,
    subcategory: Subcategory,
    cart: CartSlide,
    user: AuthSlide,
    injection: InjectionPark,
    company: CompanySlide,
    city: CitySlide,
    order: OrderSlide,
    register: RegisterSlide,

});
export default rootReducer



