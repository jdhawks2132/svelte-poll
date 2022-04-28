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

	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [...polls, poll];
		activeItem = 'Current Polls';
	};

	const handleVote = (e) => {
		const { option, id } = e.detail;
		let copiedPolls = [...polls];
		let upVotedPoll = copiedPolls.find((poll) => poll.id === id);
		if (option === 'a') {
			upVotedPoll.votesA++;
		}
		if (option === 'b') {
			upVotedPoll.votesB++;
		}
		polls = copiedPolls;
	};
</script>

<Logo />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<PollList on:vote={handleVote} />
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
