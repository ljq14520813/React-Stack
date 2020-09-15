import {observable,action,computed} from 'mobx';

export default class TodoStore{
    @observable list = [{id:1,task:'溜溜路'}];
    @computed get total(){
        return this.list.length;
    }
    @action addTodo(payload){
        this.list.push(payload);
    };
    @action delTodo(payload){
        this.list.splice(payload,1);
    }
    @action updTodo(payload){
        this.list[payload.index].task=payload.task;
    };
}
