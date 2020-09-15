import { observable ,action} from 'mobx';

//  observable 用于定义可共享的数据

export default class CountStore{
    @observable count = 1200;
    @observable msg = '随便写的东西';
    @action countAdd(){
        this.count++;
    }
    @action countMinus(){
        this.count--;
    }
}