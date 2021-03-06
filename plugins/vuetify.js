import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
	theme: {
		primary: '#121212', // a color that is not in the material colors palette
		accent: '#FB0D23',
		secondary: colors.teal.lighten4,
		info: colors.teal.lighten1,
		warning: colors.amber.base,
		error: colors.deepOrange.accent4,
		success: colors.green.accent3,
		pretty: colors.teal.accent4
	}
});
