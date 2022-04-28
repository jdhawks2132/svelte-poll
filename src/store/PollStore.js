import { writable } from 'svelte/store';

const PollStore = writable([
	{
		id: 1,
		title: 'Poll 1',
		question: 'Python or JavaScript?',
		answerA: 'Python',
		answerB: 'JavaScript',
		votesA: 9,
		votesB: 2,
	},
]);

export default PollStore;
