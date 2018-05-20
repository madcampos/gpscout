<template>
	<v-container fluid fill-height pa-0>
		<v-slide-y-transition mode="out-in">
			<v-layout align-top column>
				<v-toolbar app dark color="primary">
					<v-btn icon to="/subcampo">
						<v-icon>arrow_back</v-icon>
					</v-btn>
					<v-toolbar-title v-text="title"></v-toolbar-title>
				</v-toolbar>
				<v-list two-line>
					<template v-for="(date, i) in dates">
						<v-subheader :key="i">{{date.date}}</v-subheader>
						<v-list-tile v-for="(activity, j) in date.activities" to="/programa" :key="`${i}-${j}`">
							<v-list-tile-content>
								<v-list-tile-title>{{activity.title}}</v-list-tile-title>
								<v-list-tile-sub-title>{{activity.hours}}</v-list-tile-sub-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-divider v-if="i + 1 < dates.length" :key="`d${i}`"></v-divider>
					</template>
				</v-list>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Atividades',
		data(){
			return {
				title: 'Atividades',
				dates: [
					{
						date: 'Dia 1',
						activities: [
							{
								title: 'Base 1',
								hours: '8:00 - 10:00'
							},
							{
								title: 'Base 2',
								hours: '10:00 - 12:00'
							},
							{
								title: 'Almoço',
								hours: '12:00 - 14:00'
							},
							{
								title: 'Base 3',
								hours: '14:00 - 16:00'
							}
						]
					},
					{
						date: 'Dia 2',
						activities: [
							{
								title: 'Base 1',
								hours: '8:00 - 10:00'
							},
							{
								title: 'Base 2',
								hours: '10:00 - 12:00'
							},
							{
								title: 'Almoço',
								hours: '12:00 - 14:00'
							},
							{
								title: 'Base 3',
								hours: '14:00 - 16:00'
							}
						]
					}
				]
			};
		}
	};
</script>