<template>
    <div></div>
    
</template>

<script>

export default {
    name: "GetActorDetails",
    data() {
        //actordetails: [],
        //filmdetails: []

    },
    methods: {
        async  getStarWarsActorDetails(url) {
            for(let id = 1; id < 11; id++) { //begin loop
                let response = await fetch(`url`);
                let data = await response.json();
                //console.log(data);
                let listActorDetails = {
                    name: data.name,
                    birth: data.birth_year,
                    gender: data.gender,
            }
            this.actordetails.push(listActorDetails);
            } //end loop
          }, 
        async  getStarWarsFilmDetails() {
            for(let id = 1; id < 7; id++) { //begin loop
                let response = await fetch(`https://swapi.dev/api/film/${id}`);
                let data = await response.json();
                //console.log(data);
                let listFilmDetails = {
                    title: data.title,
                    director: data.director,
                    release: data.release_date,
                    intro: data.opening_crawl
            }
            this.filmdetails.push(listFilmDetails);
            } //end loop
          }, 
    },
    async created() {
        await this.getStarWarsActorDetails();
        await this.getStarWarsFilmDetails();
    }
}

</script>

<style>

</style>