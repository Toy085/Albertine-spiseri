<script lang="ts">
    let name = '';
    let description = '';
    let image = '';
    let price: number;
    let userType = 'admin'; 
    let activeTab = 'info';

    async function addDish() {
        const res = await fetch('/dishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description, image, price })
        });

        if (res.ok) {
            alert('Dish added!');
            location.reload(); 
        } else {
            const err = await res.json();
            alert('Error: ' + err.error);
        }
    }
    
    userType = 'admin'; // Change this value to 'admin', 'customer', 'restaurant', or '' to test different views
</script>
<h1>Profile Page</h1>

<div class="form-floating mb-3" style="max-width: 300px; margin: 0 auto;">
    <select id="userType" class="form-select" bind:value={userType}>
        <option value="">Select user type</option>
        <option value="admin">Admin</option>
        <option value="customer">Customer</option>
        <option value="restaurant">Restaurant</option>
    </select>
    <label for="userType">User Type</label>
</div>

{#if userType === 'admin'}
<form on:submit|preventDefault={addDish} class="dishAddForm">
    <div class="form-floating mb-3">
        <input class="form-control" id="name" placeholder="Burger" bind:value={name} required />
        <label for="name" class="form-label">Name of dish</label>
    </div>
    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Description" id="description" bind:value={description} required></textarea>
        <label for="description" class="form-label">Description of dish</label>
    </div>
    <div class="form-floating mb-3">
        <input class="form-control" placeholder="Image URL" id="imageURL" bind:value={image} required />
        <label for="imageURL" class="form-label">Image URL of dish</label>
    </div>
    <div class="form-floating mb-3">
    <input class="form-control" placeholder="Price" type="number" id="price" bind:value={price} required />
    <label for="price" class="form-label">Price of dish</label>
    </div>

    <button class="btn btn-primary" type="submit">Add Dish</button>
</form>
{:else if userType === 'customer'}
  <ul class="nav nav-tabs customer-profile-tabs">
    <li class="nav-item">
      <button 
        class="nav-link {activeTab === 'info' ? 'active' : ''}" 
        on:click={() => activeTab = 'info'}>
        Info
      </button>
    </li>
    <li class="nav-item">
      <button 
        class="nav-link {activeTab === 'receipts' ? 'active' : ''}" 
        on:click={() => activeTab = 'receipts'}>
        Receipts
      </button>
    </li>
    <li class="nav-item">
      <button 
        class="nav-link {activeTab === 'settings' ? 'active' : ''}" 
        on:click={() => activeTab = 'settings'}>
        Settings
      </button>
    </li>
  </ul>

  <div class="tab-content-container">
    {#if activeTab === 'info'}
      <div class="p-3">
        <h3>User Information</h3>
        <p>Manage your personal details here.</p>
      </div>
    {:else if activeTab === 'receipts'}
      <div class="p-3">
        <h3>Your Receipts</h3>
        <p>List of previous orders will appear here.</p>
      </div>
    {:else if activeTab === 'settings'}
      <div class="p-3">
        <h3>Account Settings</h3>
        <p>Change your password or notification preferences.</p>
      </div>
    {/if}
  </div>
{:else if userType === 'restaurant'}
    <p>Will come soon, under work</p>
{:else}
    <p>Please <a href="/login">login</a></p>
{/if}

<style>
    .dishAddForm {
        max-width: 600px;
        margin-top: 20px;
        margin: 0 auto;
        margin-bottom: 5px;
    }
    .customer-profile-tabs {
        max-width: 600px;
        margin: 20px auto;
        background-color: var(--bs-primary-bg-subtle);
        border-radius: var(--bs-border-radius-lg);
    }
</style>