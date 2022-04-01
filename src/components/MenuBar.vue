<template>
    <header>
        <nav>
            <ul class="menu-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </header>
    
</template>

<script>
    export default {

    }
</script>

<style>

.menu-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  background-color: #FFE81F;
  padding: 20px;
  margin: 0px;
  box-shadow: inset 0 0 10px #000000;
}

@media only screen and (max-width: 600px) {
  .menu-list {
      justify-content: center;
      width: 100%;
  }
}

</style>