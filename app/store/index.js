export const state = () => ({
  isLoggedIn: false,
  userSession: null,
  routeName: "",
  currentLocationGroup: null
})

export const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userSession: state => state.userSession,
  routeName: state => state.routeName,
  bodyClass: state => {
    const baseBodyClass = "body"
    return [baseBodyClass, state.routeName].filter(val => val !== "").join(" ")
  },
  currentLocationGroup: state => state.currentLocationGroup
}

export const mutations = {
  updateIsLoggedIn: (state, payload) => (state.isLoggedIn = payload),
  updateUserChildSession: (state, payload) => (state.userSession = payload),
  updateRouteName: (state, payload) => (state.routeName = payload),
  updateCurrentLocationGroup: (state, payload) =>
    (state.currentLocationGroup = payload)
}

export const actions = {
  updateIsLoggedIn: ({ commit }, payload) =>
    commit("updateIsLoggedIn", payload),
  updateUserChildSession: ({ commit }, payload) =>
    commit("updateUserChildSession", payload),
  updateRouteName: ({ commit }, payload) => commit("updateRouteName", payload),
  updateCurrentLocationGroup: ({ commit }, payload) =>
    commit("updateCurrentLocationGroup", payload)
}
