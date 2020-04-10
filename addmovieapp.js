Vue.component('addmovie-details',{


	props:['addmovies'],

    template:`
    <div>
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="addmovies.Poster" alt="card image cap">
  <div class="card-body">
    <h5 class="card-title">TITLE: {{addmovies.Title}} </h5>
    <h5 class="card-title">YEAR: {{addmovies.Year}} </h5>
  </div>
</div></div>
    `

});


 new Vue({
	el:"#add",

	data:{
        searchKey:'',
		addList:[]

	},
	methods:{		

		addMovies()
		{

        var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620bd4';
		fetch(url)
		.then(response=>response.json())
		.then(data=>{
		this.addList=data;


            })

        }

	}	

})
