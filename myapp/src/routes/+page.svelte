<script lang="ts">
    import { user } from '$lib/stores/auth';
</script>
{#if $user}
  <p>Welcome {$user.email} to Albertine!</p>
{:else}
    <p>Welcome to Albertine!</p>
{/if}

