<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import Button from '../shared/Button.svelte';
	let fields = { question: '', answerA: '', answerB: '' };
	let errors = { question: '', answerA: '', answerB: '' };
	let valid = false;

	const handleSubmit = () => {
		valid = true;
		// validate question
		if (fields.question.trim().length < 5) {
			valid = false;
			errors.question = 'Question must be at least 5 characters';
		} else {
			errors.question = '';
		}
		// validate answerA
		if (fields.answerA.trim().length < 0) {
			valid = false;
			errors.answerA = 'Answer A must be at least 1 character';
		} else {
			errors.answerA = '';
		}
		// validate answerB
		if (fields.answerB.trim().length < 0) {
			valid = false;
			errors.answerB = 'Answer B must be at least 1 character';
		} else {
			errors.answerB = '';
		}
		// if valid, submit form
		if (valid) {
			let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
			dispatch('addPoll', poll);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-field">
		<label for="question">Poll Question:</label>
		<input required type="text" name="question" id="question" placeholder="Question" bind:value={fields.question} />
		<div class="errors">{errors.question}</div>
	</div>
	<div class="form-field">
		<label for="answer-a">Answer A</label>
		<input required type="text" name="answer-a" id="answer-a" placeholder="Answer A" bind:value={fields.answerA} />
		<div class="errors">{errors.answerA}</div>
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B</label>
		<input required type="text" name="answer-b" id="answer-b" placeholder="Answer B" bind:value={fields.answerB} />
		<div class="errors">{errors.answerB}</div>
	</div>
	<Button type="secondary" flat={true}>Create Poll</Button>
</form>

<style>
	form {
		width: 400px;
		margin: 0 auto;
		text-align: center;
	}
	.form-field {
		margin-bottom: 18px auto;
	}
	label {
		margin: 10px auto;
		text-align: left;
	}
	input {
		width: 100%;
		border-radius: 6px;
	}
	.errors {
		color: #d91b42;
		font-weight: bold;
		font-size: 12px;
	}
</style>
