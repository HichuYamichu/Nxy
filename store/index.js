import { Store } from 'vuex';

export const state = () => ({
	darkTheme: true
});

export const mutations = {
	THEME: (state, theme) => {
		state.darkTheme = theme;
	}
};

export const actions = {
	async nuxtServerInit({ commit }, { $axios, req }) {
		if (req.session && req.session.authUser) {
			commit('auth/SET_USER', { username: req.session.authUser.username });
			if (typeof req.session.dark !== 'undefined') {
				commit('THEME', req.session.dark);
			}
		}
		const data = await $axios.$get('/api/todo');
		commit('todos/SET', data);
	},

	async setTheme({ state, commit }) {
		commit('THEME', !state.darkTheme);
		if (state.auth.authUser) {
			await this.$axios.$post('/api/user/settings', { theme: state.darkTheme });
		}
	}
};
