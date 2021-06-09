export const state = () => ({
  pageTitle: '',
})

export const getters = {
  pageTitle: (state) => state.pageTitle,
}
export const mutations = {
  pageTitle(state, pageTitle) {
    state.pageTitle = pageTitle
  },
}
