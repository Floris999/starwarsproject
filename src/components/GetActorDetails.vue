<template>
    <div></div>
    
</template>

<script>

export default {
    name: "GetActorDetails",
    data() {
        //moviedetails: []

    },
    methods: {
        async  getStarWarsActorMovies() {
            for(let id = 1; id < 7; id++) { //begin loop
                let response = await fetch(`https://swapi.dev/api/films/${id}`);
                let data = await response.json();
                //console.log(data);
                let listMovieDetails = {
                    title: data.title,
                    release: data.release_date,
                    intro: data.opening_crawl,
                    characters: data.characters
            }
            this.moviedetails.push(listMovieDetails);
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