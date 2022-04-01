<template>
    <main>
        <div class="dark-side">
            <h1>Welcome To The Star Wars DataBase</h1>
            <p>This project is about the Star Wars API. The project is based on API practice and Front-End work in Vue.js.</p>
        <div class="cards">
        <div class="card-item"><!--Start-->
            <ul>
                <li>Name</li>
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
                   
            }
        },
        created() {
            for(let id = 1; id < 4; id++)
            fetch(`https://swapi.dev/api/people/${id}/`)
            .then(response => response.json())
            .then(function (response) {
                //console.log(response)
                let starWarsActorData = [
                {   name: response.name,
                    height: response.height,
                    birthday: response.birth_year
                }
                ];
                return starWarsActorData;
            });
        }


    }

</script>

<style>

.dark-side h1 {
  -webkit-text-stroke: 1px #FFE81F;
}

ul {
    list-style: none;
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
  height:100vh;
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

.banner {
  min-width: 100%;
  min-height: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cards > * {
  flex: 1;
}

.card-item {
  border: 2px solid #FFE81F;
  border-radius: 10px;
  padding: 5px 20px;
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