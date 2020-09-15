import loadable from '@loadable/component';
const CircleList = loadable(()=>import('./study/CircleList'));
const ClassComponent = loadable(()=>import('./study/ClassComponent'));
const FormPractice = loadable(()=>import('./study/FormPractice'));
const FormTest = loadable(()=>import('./study/FormTest'));
const TestComponent = loadable(()=>import('./study/TestComponent'));
const TestCondition = loadable(()=>import('./study/TestCondition'));
const TestContext = loadable(()=>import('./study/TestContext'));
const TestFragment = loadable(()=>import('./study/TestFragment'));
const TestHoc = loadable(()=>import('./study/TestHoc'));
const TestHooks = loadable(()=>import('./study/TestHooks'));
const testLanguage = loadable(()=>import('./study/testLanguage'));
const TestLift = loadable(()=>import('./study/TestLift'));
const TestState = loadable(()=>import('./study/TestState'));

// import CircleList from './study/CircleList';
// import ClassComponent from './study/ClassComponent';
// import FormPractice from './study/FormPractice';
// import FormTest from './study/FormTest';
// import TestComponent from './study/TestComponent';
// import TestCondition from './study/TestCondition';
// import TestContext from './study/TestContext';
// import TestFragment from './study/TestFragment';
// import TestHoc from './study/TestHoc';
// import TestHooks from './study/TestHooks';
// import testLanguage from './study/testLanguage';
// import TestLift from './study/TestLift';
// import TestState from './study/TestState';
const Goods = loadable(()=>import('./goods/goods'));
const GoodsDetail = loadable(()=>import('./goods/detail'));
const TestStore = loadable(()=>import('./goods/testStore'));

const routes=[
    {
        id:1,
        path:'/cirList',
        component:CircleList,
        text:'循环列表',
        icon:''
    },
    {
        id:2,
        path:'/classCom',
        component:ClassComponent,
        text:'类组件',
        icon:''
    },
    {
        id:3,
        path:'/formPra',
        component:FormPractice,
        text:'表格练习',
        icon:''
    },
    {
        id:4,
        path:'/formTest',
        component:FormTest,
        text:'表格测试',
        icon:''
    },
    {
        id:5,
        path:'/testCom',
        component:TestComponent,
        text:'组件测试',
        icon:''
    },
    {
        id:6,
        path:'/testCon',
        component:TestCondition,
        text:'显示隐藏',
        icon:''
    },
    {
        id:7,
        path:'/testCtx',
        component:TestContext,
        text:'测试上下文',
        icon:''
    },
    {
        id:8,
        path:'/testFrag',
        component:TestFragment,
        text:'测试碎片',
        icon:''
    },
    {
        id:9,
        path:'/testHoc',
        component:TestHoc,
        text:'高阶组件测试',
        icon:''
    },
    {
        id:10,
        path:'/testHooks',
        component:TestHooks,
        text:'hooks测试',
        icon:''
    },
    {
        id:11,
        path:'/testLang',
        component:testLanguage,
        text:'选项卡',
        icon:''
    },
    {
        id:12,
        path:'/testLift',
        component:TestLift,
        text:'状态提升',
        icon:''
    },
    {
        id:13,
        path:'/testSta',
        component:TestState,
        text:'测试状态',
        icon:''
    },
    {
        id:14,
        path:'/goodsList',
        component:Goods,
        text:'商品列表',
        icon:'',
        children:[
            {
                id:1401,
                path:'/goodsList/goodsDetail/:id/:name',
                component:GoodsDetail,
                text:'商品详情',
                icon:''
            }
        ]
    },
    {
        id:15,
        path:'/store',
        component:TestStore,
        text:'状态管理',
        icon:''
    },
]

export default routes;