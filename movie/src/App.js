import React from "react";
import AddMovie from "./Component/AddMovie";
import "./App.css";
import MoviesList from "./Component/MoviesList";
import StarRating from "./Component/StarRatingComponent";
import Search from "./Component/Search";
class App extends React.Component {
  state = {
    Movies: [
      {
        title: "12 Angry men",
        img: "12_Angry_Men_(1957_film_poster).jpg",
        Director: "Sidney Lumet",
        rate: 5,
        description:
          "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      },
      {
        title: "Birdman or the unexpected virtue of ignorance",
        img: "birdman.jpeg",
        Director: "Alejandro Iñárritu",
        rate: 5,
        description:
          "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production, an adaptation of Raymond Carver's story, What We Talk About When We Talk About Love",
      },
      {
        title: "Chinese coffee",
        img: "chinesecoffee.jpg",
        Director: "Al Pacino",
        rate: 4,
        description: "Harry and Jake, two unsuccessful writers, spend a cathartic evening arguing about money, aesthetics, their friendship, and Harry's new manuscript.",
      },
      {
        title: "Annie hall",
        img: "anniehall.jpg",
        Director: "Woody Allen",
        rate: 4,
        description: "Annie Hall is a film about a comedian, Alvy Singer (Woody Allen), who falls in love with Annie Hall (Diane Keaton). Both of the characters are completely different but both strikingly entertaining and unusual. Alvy is an extreme pessimist that obsesses over the subject of death and has very sarcastic and cynical views about the world and the people around him. Annie is a ditsy and clumsy talented singer and photographer",
      },
      {
        title: "Before sunrise",
        img: "bsun.jpg",
        Director: "Richard Linklater",
        rate: 3,
        description: "American tourist Jesse and French student Celine meet by chance on the train from Budapest to Vienna. Sensing that they are developing a connection. How do two perfect strangers connect so intimately over the course of a single day? What is that special thing that bonds two people so strongly? As their bond turns to love, what will happen to them the next morning when Jesse flies away?",
      },
      {
        title: "Good Will hunting",
        img: "gwh.jpg",
        Director: "Gus Van Sant",
        rate: 3,
        description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics,who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, so he needs help from a psychologist to find direction in his life.",
      },
      {
        title: "The reader",
        img: "thereader.jpg",
        Director: "Stephen Daldry",
        rate: 2,
        description: "THE READER opens in post-war Germany when teenager Michael Berg becomes ill and is helped home by Hanna, a stranger twice his age. The two are quickly drawn into a passionate but secretive affair. Hanna is enthralled as Michael reads to her from The Odyssey,Huck Finn and The Lady with the Little Dog. Despite their intense bond, Hanna mysteriously disappears one day and Michael is left confused and heartbroken.",
      },
     
      {
        title: "Midnight in Paris",
        img: "MIP.jpg",
        Director: "Woody Allen",
        rate: 2,
        description: "Gil and Inez travel to Paris as a tag-along vacation on her parents' business trip. Gil is a successful Hollywood writer but is struggling on his first novel. Gil takes a walk at midnight and discovers what could be the ultimate source of inspiration for writing. ",
      },
      {
        title: "Detachment",
        img: "deta.jpg",
        Director: "Tony Kaye",
        rate: 3,
        description: "Detachment is a chronicle of three weeks in the lives of several high school teachers, administrators and students through the eyes of a substitute teacher named Henry Barthes. Henry roams from school to school, imparting modes of knowledge, but never staying long enough to form any semblance of sentient attachment. A secret world of emotion is awakened within him by three women. Each one of these women, like Henry, are in a life and death struggle to find beauty in a seemingly vicious and loveless world.",
      },
      {
        title: "Certified copy",
        img: "CER_.jpg",
        Director: "Abbas Kiarostami",
        rate: 1,
        description: "James Miller has just written a book on the value of a copy versus the original work of art. At a book reading, a woman gives him her address, and the next day they meet and take a country-side drive to a local Italian village. Here, they discuss various works of art found in the town, and also the nature of their relationship - which gets both more revealed and concealed as the day progresses",
      },
    ],
    input: "",
    rate:0
  };

  Add = (newMovie) => {
    this.setState({
      Movies: [...this.state.Movies, { ...newMovie, id: Date.now() }],
    });
  };

  search = (input) => {
    this.setState({
      input: input,
    });
  };

  Rate = (rate) => {
    this.setState({
      rate: rate,
    });
  };
  

  render() {
    return (
      <div >
        <h1>10 best conversational movies</h1>

        <div className="App">
          <Search search={this.search} />
          <AddMovie Add={this.Add} />
        </div>
        <StarRating Rate={this.Rate} />

        <MoviesList input={this.state.input} rate={this.state.rate} listofMovies={this.state.Movies} />
      </div>
    );
  }
}

export default App;
