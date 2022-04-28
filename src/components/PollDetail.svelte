<script>
	import Card from '../shared/Card.svelte';
	export let poll;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// reactive values
	$: totalVotes = poll.votesA + poll.votesB;
	$: percentageA = (poll.votesA / totalVotes) * 100;
	$: percentageB = (poll.votesB / totalVotes) * 100;

	const handleVote = (option, id) => {
		dispatch('vote', { option, id });
	};
</script>

<div class="poll-detail">
	<Card>
		<h3>{poll.question}</h3>
		<p>Total Votes: {totalVotes}</p>
		<div class="answer" on:click={() => handleVote('a', poll.id)}>
			<div class="percent percent-a" style="width: {percentageA}%" />
			<span>{poll.answerA} ({poll.votesA})</span>
		</div>
		<div class="answer" on:click={() => handleVote('b', poll.id)}>
			<div class="percent percent-b" style="width: {percentageB}%" />
			<span>{poll.answerB} ({poll.votesB})</span>
		</div>
	</Card>
</div>

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		font-size: 14px;
		color: #aaa;
		margin-bottom: 30px;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
	.percent {
		height: 100%;
		position: absolute;
		box-sizing: border-box;
	}

	.percent-a {
		background: rgba(217, 27, 66, 0.2);
		border-left: 4px solid #d91b42;
	}
	.percent-b {
		background: rgba(69, 196, 150, 0.2);
		border-left: 4px solid #45c2a8;
	}
</style>
