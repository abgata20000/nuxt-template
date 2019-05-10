export default ({ store, route }) => {
  store.dispatch("updateRouteName", route.name)
}
