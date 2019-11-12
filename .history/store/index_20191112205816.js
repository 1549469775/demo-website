// import createPersistedState from 'vuex-persistedstate'
// import localforage from 'localforage'

// export const plugins = [ createPersistedState({
//   key:'fuckme',
//   storage:localforage,
//   paths: ['user.token'] //,'room.room'
// }) ]

export const state = () => ({
  user: {}
})

export const getters = {
  user(state){
    return state.user;
  }
}

export const mutations = {
  SET_USER (state,user) {
    state.user=user;
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req, res }) {
    if (req.session && req.session.user) {
      const { username, password } = req.session.user
      const user = {
        username,
        password
      }
      commit('SET_USER', user)
    }
  },
}
