import {observable , action} from 'mobx';
import {fetchUsers} from '@/utils/api';

export default class UserStore{
    @observable list=[];
    @action getUsers(params){
        fetchUsers(params).then(res=>{
            this.list=res.data
        })
    }
}