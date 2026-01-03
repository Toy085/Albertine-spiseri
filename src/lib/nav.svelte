<script type="ts">
  import DefaultIcon from '$lib/assets/profileIcon.svg'
  import logo from '$lib/assets/albertine-logo.png'
  import shopingCartIcon from '$lib/assets/shopping_cart.svg'
  
  let profileImage ='';

  profileImage = DefaultIcon;
</script>

<style>
  nav {
    background-color: #333;
    overflow: hidden;
  }

  nav img.logo {
    background-color: white;
    float: left;
    height: auto;
    width: auto;
  }

  .navButtons {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-size: 17px;
  }

  .navButtons:hover {
    background-color: #ddd;
    color: black;
  }
  .profileIcon {
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: whitesmoke;
  }
 
  .nav-icon {
    width: 50px;
    height: 50px;
    object-fit: cover; 
    float: right;
    margin-left: 10px;
  }
</style>

<nav>
  <a href="/"><img src={logo} class="logo" alt="Albertine spiseri"></a>
  <a href="/" class="navButtons">Home</a>
  <a href="/order" class="navButtons">Order</a>
  <a href="/contact" class="navButtons">Contact</a>
  <a href="/about" class="navButtons">About</a>
  <a href="/cart"><img src={shopingCartIcon} alt="shoping cart icon" class="nav-icon"></a>
  <a href="/profile">
  <img class="nav-icon profileIcon" alt="profile icon" src="{profileImage}">
  </a>
</nav>
