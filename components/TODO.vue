<template>
	<v-card class="elevate-{23}">
		<v-toolbar flat dense class="info">
			<v-toolbar-title>TODO list</v-toolbar-title>
		</v-toolbar>
		<v-list style="max-height:450px; overflow-y: auto;">
			<div v-for="(todo, index) in todos" :key="index">
				<v-list-tile>
					<v-list-tile-content>
						<v-list-tile-title>
							{{todo.title}}
						</v-list-tile-title>
						<v-list-tile-sub-title>
							{{ todo.description }}
						</v-list-tile-sub-title>
					</v-list-tile-content>
					<v-btn v-if="$store.state.auth.authUser" @click="remove(index, todo)">remove</v-btn>
				</v-list-tile>
				<v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
			</div>
		</v-list>
	</v-card>
</template>

<script>
	import axios from 'axios'
	import todoList from './List'

	export default {
		data() {
			return {
				todos: this.$store.state.todos.todoItems
			}
		},
		methods: {
			async remove(index, todo) {
				this.$store.commit('todos/REMOVE_TODO', index)
				await this.$axios.$delete('/api/todo', { data: { title: todo.title, description: todo.description } })
			}
		}
	}
</script>

<style scoped>
</style>
