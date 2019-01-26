export const state = () => ({
	authUser: null
});

export const mutations = {
	SET_USER: (state, user) => {
		state.authUser = user;
	}
};
export const actions = {
	login: {
		root: true,
		async handler({ commit }, { username, password }) {
			try {
				const data = await this.$axios.$post('/api/login', { username, password });
				commit('SET_USER', data);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					throw new Error(error.response.data.message);
				}
				throw error;
			}
		}
	},
	register: {
		root: true,
		async handler({ commit }, { username, password }) {
			try {
				const data = await this.$axios.$post('/api/register', { username, password });
				commit('SET_USER', data);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					throw new Error(error.response.data.message);
				}
				throw error;
			}
		}
	},
	logout: {
		root: true,
		async handler({ commit }) {
			await this.$axios.$post('/api/logout');
			commit('SET_USER', null);
		}
	}
};
