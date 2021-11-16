export const state = () => ({
  imgurl: ""
})

export const getters = {
  imgurl(state) {
    return state.imgurl
  }
}

export const mutations = {
  setImgurl(state, _url) {
    state.imgurl = _url
  }
}

export const actions = {
  setImgurl({commit}, _url) {
    commit('setImgurl', _url)
  }
}
