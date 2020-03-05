Vue.component('movie-detail',{


	props:['movie'],

    template:`
    <div>
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="movie.Poster" >
  <div class="card-body">
	<h5 class="card-title">TITLE: {{movie.Title}} </h5>
	<h5 class="card-title">YEAR: {{movie.Year}} </h5>
	<h5 class="card-title">IMDB_ID: {{movie.imdbID}} </h5>
	<h5 class="card-title">TYPE: {{movie.Type}} </h5>
	<h5 class="card-title">IMAGE_LINK: {{movie.Poster}} </h5>

    <a href="" class="btn btn-primary"  > CLICK TO CLOSE THE DETAILS.</a>
  </div>
</div></div>
    `

});
	

new Vue({
	el:"#movieapp",

	data:{
		searchKey:'',
		moviesList:[]

	},
	methods:{		

		searchMovies()
		{
            
            var url='http://www.omdbapi.com/?s=harry potter&apikey=e0620bd4';
            fetch(url)
			.then(response=>response.json())
			.then(data=>{
			this.moviesList=data;

            })
            
        }
		
	}	

})