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
	nuxtServerInit(store, { req }) {
		if (req.session && req.session.authUser) {
			store.commit('auth/SET_USER', { username: req.session.authUser.username });
			if (typeof req.session.dark !== 'undefined') {
				store.commit('THEME', req.session.dark);
			}
		}
	},

	async setTheme({ state, commit }) {
		commit('THEME', !state.darkTheme);
		if (state.auth.authUser) {
			await this.$axios.$post('/api/user/settings', { theme: state.darkTheme });
		}
	}
};
