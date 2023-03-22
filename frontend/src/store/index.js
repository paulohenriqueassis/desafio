import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cards: null,
  },
  mutations: {
    UPDATE_CARDS(state, payload) {
      state.cards = payload;
    },
  },
  actions: {
    async getFilterCards(context, tagName) {
      const { data } = await api.get(`cards/?name=${tagName}`);
      context.commit("UPDATE_CARDS", data);
    },
    async getCards({ commit }) {
      const { data } = await api.get("cards");
      commit("UPDATE_CARDS", data);
    },
    async createCard(_, payload) {
      return api.post("cards", payload);
    },
    async editCard(_, payload) {
      return api.put(`cards/${payload.id}`, payload);
    },
    async deleteCard({ dispatch }, id) {
      await api.delete(`cards/${id}`);
      dispatch("getCards");
    },
  },
});
