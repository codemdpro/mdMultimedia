// import axios from "axios";
// import { getAppData, getLocalData } from "../../methods/appLoader";
// const AppData = getAppData();
// const LocalData = getLocalData();
const state = {
  AppState: 0,
  hasError: [],
  // FeedTypes: AppData.FeedTypes,
  // RadioStations: AppData.Stations,
  // WeatherConfig: AppData ? AppData.WeatherConfig : null,
  // savedData: LocalData,
  // hasOptions: !!AppData,
  // hasNewsFeed: !!LocalData,
  localization: {
    lang: "en",
    country: "gn",
    city: "conakry"
  },
  appErrors: {
    init: null,
    radio: null,
    news: null,
    weather: null
  }
};

const mutations = {
  SET_LANG: (state, payload) => {
    if (!payload) {
      return false;
    } else {
      state.localization.lang = payload;
      localStorage.setItem("local", JSON.stringify(state.localization));
    }
  },

  SET_APP_STATE: (state, payload) => (state.AppState = payload),

  HAS_ERROR: (state, payload) => state.hasError.push(payload),

  APP_HAS_ERROR: (state, payload) => (state.appErrors[payload[0]] = payload[1])
};

const actions = {
  parseAppData({ commit }, payload) {
    commit("PARSE_APP_DATA", payload);
  },
  set_options({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://admin.moucdia.com/appsdata/`)

        .then(result => {
          commit("PARSE_APP_DATA", result.data);
          resolve();
        })

        .catch(error => {
          commit("APP_HAS_ERROR", ["init", error.message]);
          reject(error.message);
        });
    });
  },
  setAppState({ commit }, payload) {
    commit("SET_APP_STATE", payload);
  },
  errorMaker({ commit }, payload) {
    commit("HAS_ERROR", payload);
  },
  appHasError({ commit }, payload) {
    commit("APP_HAS_ERROR", [payload.source, payload.message]);
  }
};

const getters = {
  appState: state => state.AppState,
  appErrors: state => state.appErrors,
  hasError: state => state.hasError,
  localization: state => state.localization,
  lang: state => state.localization.lang
};
export default {
  state,
  mutations,
  actions,
  getters
};
