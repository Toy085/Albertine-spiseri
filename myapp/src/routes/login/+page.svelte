<script lang="ts">
	let email: string = "";
	let password: string = "";

	async function login(event: Event) {
		event.preventDefault();
		// Implement login logic here
	}
	async function signUp() {
		// Implement sign-up logic here
	}
</script>

<h1>Login/sign up</h1>

<form class="loginForm" on:submit={login}>
	<div class="mb-3 InputText">
		<label for="exampleInputEmail1" class="form-label">Email address</label>
		<input
			type="email"
			class="form-control"
			id="exampleInputEmail1"
			placeholder="john.smith@example.com"
			bind:value={email}
			required
		/>
		<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	</div>
	<div class="mb-3 InputText">
		<label for="exampleInputPassword1" class="form-label">Password</label>
		<input
			type="password"
			class="form-control"
			id="exampleInputPassword1"
			bind:value={password}
			required
		/>
	</div>

	<div class="form-check">
  	<input class="form-check-input" type="checkbox" value="" id="checkDefault">
  	<label class="form-check-label" for="checkDefault"> I agree to the Terms of Service. </label>
	</div>
	<button type="submit" class="btn btn-primary">Login</button>
	<button type="button" class="btn btn-secondary" on:click={signUp}>Sign Up</button>
</form>

<style>
    * {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.loginForm {
	padding-bottom: 50px;
}
</style>