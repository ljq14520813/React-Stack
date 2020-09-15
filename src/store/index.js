import CountStore from './modules/CountStore';
import TodoStore from './modules/TodoStore';
import UserStore from './modules/UserStore';

class Store{
    //类的构造器 模型
    constructor(){
        //  实例化
        this.CountStore = new CountStore();
        this.TodoStore = new TodoStore();
        this.UserStore = new UserStore();
    }
}


export default new Store();