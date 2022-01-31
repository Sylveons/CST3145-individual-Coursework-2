<template>
  


 <div v-if='showLesson2'>

        <header>

            <h1 v-text="sitename"></h1>
        </header>
        <label for="Sort">Sort By Price:</label>

        <button class="highest" v-on:click="SortH()" v-bind:disabled="showLesson2===true">Highest</button>
        <button class="Lowest" v-on:click="SortH()" v-bind:disabled="showLesson===true">Lowest</button>


       
            <figure>
                <img v-bind:src="lesson.Image" height="100px" width="100px">
            </figure>

            <h2 v-text="lesson.Subject"></h2>
            <p v-html="lesson.Location"></p>
            <p v-html="lesson.Price"></p>
            <p v-html="lesson.Spaces"></p>



            <button class="add to cart" v-on:click="addToCart(lesson)" v-bind:disabled="lesson.Spaces === 0 ">Add to
                cart</button>
            <span>Buy Now! <i class="fas fa-star"></i></span>

            <span v-if='lesson.spaces === 0'>All out!
                Only 1 Space left!
            </span>


        </div>






</template>

<script>

        let app = new Vue({
            data: { Lessons: {} },
            // this function runs when creating the Vue instance
            created: function () {
                // replace the URL to your Heroku app and route
                fetch('https://dominique-walker-cst1345-cw2.herokuapp.com/api/posts/').then(
                    function (response) {
                        response.json().then(
                            function (json) {
                                // note that we used 'store.product' instead of 'this.product'
                                lessons.products = json;
                            });
                    })
            }
        })
    


</script>

