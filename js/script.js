const app = new Vue({
    el: '#app',
    data: {
        cards: [],
        genres: [],
        selected: 'all',
    },
    created() {
        this.getCard();
        setTimeout(() => {
            this.cards.forEach(element => {
                if (!this.genres.includes(element.genre)) {  
                    this.genres.push(element.genre);  
                }
            });
            
        }, 1000);
    },
    methods: {
        getCard() 
        {
            axios.get(`http://localhost/php-ajax-dischi/server/controller-api.php?query=${this.selected}`)
            .then((result) => {
                this.cards = result.data.response;
                })
            .catch((err) => {
                    console.log(err);
            });
       } 
    }
});