// src/lib/stores/auth.js
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const user = writable(null);

onAuthStateChanged(auth, (u) => {
  if (u && u.emailVerified) {
    user.set(u);
  } else {
    user.set(null);
  }
});
