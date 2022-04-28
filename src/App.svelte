<script>
	import Logo from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';
	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;
		console.log(activeItem);
	};

	let polls = [
		{
			id: 1,
			title: 'Poll 1',
			question: 'Python or JavaScript?',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: 9,
			votesB: 2,
		},
	];

	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [...polls, poll];
		activeItem = 'Current Polls';
	};
</script>

<Logo />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<PollList {polls} />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:addPoll={handleAddPoll} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
