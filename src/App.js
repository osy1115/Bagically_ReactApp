import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import "./App.css"
// import PropTypes from "prop-types"

// function Food({name,picture,rating}){
//   return <div>
//       <h2>i like {name}</h2>
//       <h2>{rating}/5.0</h2>
//       <img src={picture} alt={name}/>
//     </div>
// }

// Food.propTypes={ //내가 전달받은 props가 정확한지 내가 원하는 게 맞는지 확인해준다!
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// const foodILike = [
  
//   {
//   name: "Kimchi",
//   image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
//   rating: 5
//   },
//   {
//   name: "bulgogi",
//   image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM.jpg",
//   rating: 4.9
//   },
//   {
//   name: "kimbap",
//   image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM.jpg",
//   rating: 3.2
//   },
//   {
//   name: "samgyetang",
//   image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//   rating: 2.8
//   }
// ];

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//       <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//       ))}
//     </div>
    
//   );
// }

// class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   console.log("im king")
  // }
  // state = { //데이터가 변해서 사용함. 중요함
  //   count: 0
  // }
  // add = () => { //매순간 setState를 호출할 때마다 react는 새로운 state와 render를 호출한다.
  //   this.setState(current => ({count:current.count+1}))
  // }
  // minus = () => {
  //   this.setState(current => ({count:current.count-1}))
  // }
  // componentDidMount(){
  //   console.log("king of world")
  // }

  // componentDidUpdate(){
  //   console.log("just kidding")
  // }

  // componentWillUnmount(){
  //   console.log("잔인한놈")
  // }

  // render(){ //컴포넌트의 데이터를 바꾸기위한 작업임
  //   //class 문법이니까 당연히 this를 써줘야한다.
  //   console.log("rendering operation")
//     return <div>
//         <h1>The number is: {this.state.count}</h1>; 
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>minus</button>
//       </div>
//   }
// }

class App extends React.Component{
  state = {
    isLoading: true
  }

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
    this.getMovies()
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? ( <div className="loader">
            <span className="loader_text">loading...</span>
            </div>
            ) : ( 
              <div className="movies">
                {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />    
              ))}
              </div>
              )}
              </section>
            );
  }
}

export default App;
