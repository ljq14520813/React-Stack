import axios from './fetch';

export function fetchUsers(params){
    return axios({
        url:'/users/all',
        method:'GET',
        params
    })
}