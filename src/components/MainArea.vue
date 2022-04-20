<template>
    <main>
        <div class="dark-side">
            <h1>Welcome To The Star Wars DataBase</h1>
            <p>This project is about the Star Wars API. The project is based on API practice and Front-End work in Vue.js.</p>
        <div class="cards">
        <div class="card-item"><!--Start-->
          <h3>Name: {{actor}}</h3>
          <h3>Gender: {{gender}}</h3>
          <h3>Hair Color: {{haircolor}}</h3>
          <button>View Movies</button>
        </div><!--End-->
        <div class="card-item"><!--Start-->
            <ul>
                <li></li>
                <li>Type</li>
                <li><button>View Movies</button></li>
            </ul>
        </div><!--End-->
        <div class="card-item"><!--Start-->
            <ul>
                <li>Name</li>
                <li>Type</li>
                <li><button>View Movies</button></li>
            </ul>
        </div><!--End-->
        </div>
        </div>
        <div class="right-side">
            <!--<img src="https://www.wupply.nl/wp-content/uploads/2022/03/StarWars.png" class="banner" alt="Star Wars"/>-->
        </div>
    </main>
    
</template>

<script>
    export default {
        name: "MainArea",
        data() {
            return {
              actor: this.actor,
              gender: this.gender,
              haircolor: this.hair_color,
              datalist: [
                {actor: this.actor},
                {gender: this.gender},
                {haircolor: this.hair_color}
              ]
            }
        },
        methods: {
          async  getStarWarsActors(id) {
            let response = await fetch(`https://swapi.dev/api/people/${id}/`);
            let data = await response.json();
            console.log(data.name);
            return data.name;
          },
          async  getStarWarsGender(id) {
            let response = await fetch(`https://swapi.dev/api/people/${id}/`);
            let data = await response.json();
            console.log(data.gender);
            return data.gender;
          },
          async  getStarWarsHairColor(id) {
            let response = await fetch(`https://swapi.dev/api/people/${id}/`);
            let data = await response.json();
            console.log(data.hair_color);
            return data.hair_color;
          }  
        },
        async created() {
          this.actor = await this.getStarWarsActors(1); //call get actors function
          this.gender = await this.getStarWarsGender(1); //call get gender function
          this.hair_color = await this.getStarWarsHairColor(1); //call get hair color function
        }
    }

</script>

<style>

.dark-side h1 {
  -webkit-text-stroke: 1px #FFE81F;
}

h3 {
  color: #FFE81F;
  font-size: 14px;
}

ul {
    list-style: none;
    margin: 0px;
}

li {
    margin: 10px 0px;
    font-size: 16px;
}

main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  height: 100vh;
}

main > * {
  flex: 1;
}

.dark-side {
  background-color: #000000;
  padding: 5px 20px;
}

.dark-side li {
  color: white;
}

.dark-side p {
  color: white;
}

.right-side {
    background-image: url("/src/assets/star-wars-landscape.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}

.right-side:hover {
    box-shadow: inset 0 0 10px #FFFFFF;
}

.banner {
  min-width: 100%;
  min-height: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 50px 0px;
  
}

.cards > * {
  flex: 1;
}

.card-item {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.199);
  padding: 5px 20px;
}

.card-item:hover {
    box-shadow: 0 4px 8px 0 #FFE81F;
}


button {
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 4px 6px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  main {
      flex-direction: column;
      width: auto;
  }

  .right-side {
      background-position: center;
      background-size: cover;
  }
}

</style>