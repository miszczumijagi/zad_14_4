/* Kod z zadania 
var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});

ReactDOM.render(element, document.getElementById('app')); */

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'http://1.fwcdn.pl/po/05/71/30571/7155686.3.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
  },
  {
    id: 3,
    title: 'Star Wars',
    desc: 'Film o jedi',
    poster: 'http://1.fwcdn.pl/po/07/59/759/7301614.3.jpg'
  },
  {
    id: 4,
    title: 'Rambo',
    desc: 'Film wojenny',
    poster:'http://1.fwcdn.pl/po/98/06/219806/7186729.3.jpg'
  },
];


var Movie = React.createClass({
  	propTypes: {
    	movie: React.PropTypes.object.isRequired,
  	},
  	render: function() {
    	return (
	      	React.createElement ('li', {},
	        React.createElement(MovieTitle, {}, this.props.movie.title),
	        React.createElement(MovieDesc, {}, this.props.movie.desc),
	        React.createElement(MoviePoster, {}, this.props.movie.poster)
      		)
    	)
  	}
});

var MovieTitle = React.createClass({
  	propTypes: {
    	title: React.Proptypes.string.isRequired,
  	},
  	render: function() {
    	return (
      		React.createElement('h2', {}, this.props.title)
    	)
  	}
})

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.Proptypes.string.isRequired,
	},
	render: function() {
		return(
			React.createElement('p', {}, this.props.desc)
		)
	}
})

var moviePoster = React.createClass({
	propTypes: {
		poster: React.Proptypes.string.isRequired,
	},
	render: function() {
		return(
			React.createElement('img',{src:this.props.poster})
		)
	}
})

var movieElements = movies.map(function(movie) {
	return(
		React.createElement(Movie, {key:movie.id, movie:movie})
	)
}) 

var MovieList = React.createClass({
	render: function() {
		return(
			React.createElement('ul', {}, movieElements)
		)
	}
})

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));









