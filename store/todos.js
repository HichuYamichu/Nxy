export const state = () => ({
	todoItems: []
});

export const mutations = {
	SET: (state, data) => {
		state.todoItems = data;
	},
	ADD_TODO: (state, todo) => {
		state.todoItems.push(todo);
	},
	REMOVE_TODO: (state, index) => {
		state.todoItems.splice(index, 1);
	}
};
export const actions = {
	addTODO: {
		root: true,
		async handler({ commit }) {
			try {
				const data = await this.$axios.$get('/api/todo');
				commit('ADD_TODO', data);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					throw new Error(error.response.data.message);
				}
				throw error;
			}
		}
	}
};
