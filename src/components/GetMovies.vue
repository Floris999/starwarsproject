<template>
    
</template>

<script>

export default {
    name: "GetMovies",
    data() {
        moviedetails: []

    },
    methods: {
        async  getStarWarsActorMovies() {
            for(let id = 1; id < 17; id++) { //begin loop
                let response = await fetch(`https://swapi.dev/api/people/${id}`);
                let data = await response.json();
                //console.log(data);
                /*let listMovieDetails = {
                name: data.films,
            }
            this.moviedetails.push(listMovieDetails);*/
            } //end loop
          }, 
    },
    async created() {
        await this.getStarWarsActorMovies();
    }
}

</script>

<style>

</style>