import { ViewDayTwoTone } from '@material-ui/icons';
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API
});
export default instance;