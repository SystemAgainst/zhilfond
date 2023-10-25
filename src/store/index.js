import { createStore } from 'vuex'
import {getAllUsers, getUserById} from "../api/users.js";

const store = createStore({
    state: {
        users: [],
        selectedUser: null,
    },
    getters: {
        getUsers: (state) => state.users,
        selectedUser: (state) => state.selectedUser,
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        selectUser(state, user) {
            state.selectedUser = user;
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const result = await getAllUsers();
                commit('setUsers', result.data);
            } catch (error) {
                console.error(error);
            }
        },
        async selectUserById({ commit }, userId) {
            try {
                const userByIdResult = await getUserById(userId);
                commit('selectUser', userByIdResult.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
});

export default store;
