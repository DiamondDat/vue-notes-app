import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  'ADD_NOTE' (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  'EDIT_NOTE' (state, text) {
    state.activeNote.text = text;
  },
  'DELETE_NOTE' (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1);
    if(state.notes[0]) {
      state.activeNote = state.notes[0];
    } else {
      state.activeNote = {};
    }
  },
  'TOGGLE_FAVORITE' (state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  'SET_ACTIVE_NOTE' (state, note) {
    state.activeNote = note;
  }
}

const actions = {
  addNote ({ commit }) {
    commit('ADD_NOTE');
  },
  editNote ({ commit }, e) {
    commit('EDIT_NOTE', e.target.value);
  },
  deleteNote ({ commit }) {
    commit('DELETE_NOTE');
  },
  toggleFavorite ({ commit }) {
    commit('TOGGLE_FAVORITE');
  },
  updateActiveNote ({ commit }, note) {
    commit('SET_ACTIVE_NOTE', note);
  }
}

const getters = {
  notes (state) {
    return state.notes;
  },
  activeNote (state) {
    return state.activeNote;
  }
}

export default new Vuex.Store ({
  state,
  mutations,
  actions,
  getters
});
