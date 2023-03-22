import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    tags: "",
    card: {
      texto: "",
      data_criacao: "",
      data_modificacao: "",
      tags: [
        {
          name: "",
        },
      ],
    },
    cards: null,
  },
  mutations: {
    // UPDATE_CARD(state, payload) {
    //   state.card = Object.assign(state.card, payload);
    // },
    UPDATE_CARDS(state, payload) {
      state.cards = payload;
    },
    // ADD_CARD(state, payload) {
    //   state.cards.push(payload);
    // },
  },
  actions: {
    getCardsByTagName(context, tagName) {
      return api.get(`cards/?name=${tagName}`).then(({ data }) => {
        context.commit("UPDATE_CARDS", data);
      });
    },
    getCards(context) {
      return api.get("cards").then(({ data }) => {
        context.commit("UPDATE_CARDS", data);
      });
    },
    createCard(_, payload) {
      return api.post("cards", payload);
    },
    editCard(_, payload) {
      return api.put(`cards/${payload.id}`, payload);
    },
    deleteCard(_, id) {
      return api.delete(`cards/${id}`);
    },
  },
});
