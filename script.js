

//Simple render function

//React.render(<img src='https://facebook.github.io/react/img/logo.svg' /> , document.body);

//--------------------------------------------------------------------------
//Creating component

//var Photo = React.createClass({
//		
//		render :function(){
//			return <img src='https://facebook.github.io/react/img/logo.svg'/> 
//		}
//});


//rendering the component

//React.render(<Photo/> ,document.body);

//-------------------------------------------------------------------

//Creating component with attributes

//var Photo = React.createClass({
//  render : function(){
//	  console.log(this);
//		
//		return (
//				<div className='photo'>
//					 <img src={this.props.src}/>
//					 <span>{this.props.caption }</span>
//				</div>
//
//		)
//
//	}
//
//});



//React.render(<Photo src="https://facebook.github.io/react/img/logo.svg" caption="ReactJS" />,document.body);

//-------------------------------------------------------------------------------

//creating component with state

//var Photo = React.createClass({
//
//		getInitialState : function(){
//			return {
//				liked : false
//			}
//		},
//
//		toggleLiked : function(){
//      
//	    this.setState({
//				liked : !this.state.liked
//			})
//		},
//
//    render : function() {
//		
//		  var buttonClass= this.state.liked ? 'active' : '';
//			return ( <div className='photo'> 
//							 		<img src={this.props.src}/>
//									<div className='bar'>
//										<button onClick={this.toggleLiked} className={buttonClass} >
// 												 ♥
//										</button>
//										<span> {this.props.caption}</span>
//									</div>
//			         </div>
//			)
//
//		}
//
//
//});
//
//React.render(<Photo src="https://facebook.github.io/react/img/logo.svg" caption="ReactJS" />,document.body);
//
//------------------------------------------

//creating photo gallery component. composing photo component inside the photo gallery component. Passing data through the top level components.


var Photo = React.createClass({

		getInitialState : function(){
			return {
				liked : false
			}
		},

		toggleLiked : function(){
      
	    this.setState({
				liked : !this.state.liked
			})
		},

    render : function() {
		
		  var buttonClass= this.state.liked ? 'active' : '';
			return ( <div className='photo'> 
							 		<img src={this.props.src}/>
									<div className='bar'>
										<button onClick={this.toggleLiked} className={buttonClass} >
 												 ♥
										</button>
										<span> {this.props.caption}</span>
									</div>
			         </div>
			)

		}


});

var PhotoGallery = React.createClass({
	
	  render : function(){
			 
			 var photos = this.props.photos.map(function(photo){ 
			 		return <Photo src={photo.src} caption={photo.caption} />
			 });

			 return (
			   <div className='photo-gallery'>
 						{photos}
				 </div>
			 );

		}

});


var data = [ 
  {
		src			:	"https://facebook.github.io/react/img/logo.svg" ,
		caption	:	"ReactJS"
	}, 
  {
		src			:	"https://facebook.github.io/react/img/logo.svg" ,
		caption	:	"ReactJS"
	},
  {
		src			:	"https://facebook.github.io/react/img/logo.svg" ,
		caption	:	"ReactJS"
	},
   
];


React.render(<PhotoGallery photos={data} />, document.body);
