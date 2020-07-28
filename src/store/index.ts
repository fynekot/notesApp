// 1.导入vuex和vue
import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';

// 2.注册vuex到vue
Vue.use(Vuex);

// 3.创建vuex的仓库对象 state共享数据  mutation共享方法
 let store = new Vuex.Store({
     state:{
         isShow:false,//用来确定是否显示MemoEditor
        aHelper : new ActionHelper(),
        transMemo:null ,//传递数据的桥梁
        filterCateId:-1 //筛选分类id
     },
     mutations:{
        showEditMemo(state:any,editMemo:any){
            // 1.将传递来的editMemo设置给transMemo
            state.transMemo=editMemo;
            // 2.显示编辑框
            state.isShow = true;
        }
     }
 });

// 4.导出vuex的仓库对象
export default store;