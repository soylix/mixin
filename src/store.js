import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        num:999
    },
    getters:{
        getNum(state){
            return state.num;
        }
    },
    mutations:{
        add(state){
            state.num ++;
        }
    },
    actions:{
        addByAct({state,commit}){
            commit('add');
        }
    }
})
