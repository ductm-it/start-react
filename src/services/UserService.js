import Axios from '../services/Custom-Axios';

const FetchAllUsers = () => {
    return Axios.get('/api/users?page=1');
};

export { FetchAllUsers };
