<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  let email = '';
  let password = '';
  let message = writable('');
  let agreed = false;
  
  let auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword;

  onMount(async () => {
    const firebase = await import('$lib/firebase');
    auth = firebase.auth;

    const authModule = await import('firebase/auth');
    createUserWithEmailAndPassword = authModule.createUserWithEmailAndPassword;
    sendEmailVerification = authModule.sendEmailVerification;
    signInWithEmailAndPassword = authModule.signInWithEmailAndPassword;
  });

  async function signUp() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      message.set("Signup successful! Check your email to verify your account. Check your spam folder if you don't see it.");
    } catch (error) {
      message.set(error.message);
    }
  }

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        message.set("Please verify your email before logging in. Check your spam folder if you don't see it.");
        return;
      }

      message.set("Login successful!");
    } catch (error) {
      message.set(error.message);
    }
  }
</script>


<h1>Login/sign up</h1>

<form class="loginForm" on:submit|preventDefault={login}>
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
  	<input class="form-check-input" type="checkbox" value="" id="checkDefault" bind:checked={agreed}>
  	<label class="form-check-label" for="checkDefault"> I agree to the Terms of Service. </label>
	</div>
	<button type="submit" class="btn btn-primary" disabled={!agreed}>Login</button>
	<button type="button" class="btn btn-secondary" disabled={!agreed} on:click={signUp}>Sign Up</button>
	<p>{$message}</p>
</form>

<style>
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
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1s;
}
</style>