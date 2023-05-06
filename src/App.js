import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import MovieDetail from "./page/MovieDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
//1. 3개의 페이지 필요 홈페에지, movie페이지 , movieDetail페이지
//2. 홈페이지에서 배너를 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수있다. (popular, top rated, upcoming)
//4. 각 영화에 마우스를 올리면 제목, 장르, 점수, 인기도, 청불여부를 보여준다.
//5. 영화는 슬라이드로 넘기면서 볼 수있다.

//6. 영화 디테일 페이지에서 영화에대한 디테일한 정보를 볼 수있다. (포스터, 줄거리, 평점,인기도,청불,이익,러닝타임 등등)
//7. 트레일러를 누르면 예고편을 볼 수있다.
//8. 영화의 리뷰도 볼 수 있다.
//9. 관련된 영화도 볼 수 있다.
//10. 영화 검색을 할 수 있다.
//11. 영화를 정렬 할 수 있다.
//12. 영화를 필터링 할 수 있다.

function App() {
  return (
    <div >
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/movies/:id" element={<MovieDetail/>}></Route> {/*하나의 영화만 들고와야하기에 :id추가*/}
      </Routes>
    </div>
  );
}

export default App;
