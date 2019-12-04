import React from 'react';
import './App.css';



const quotes = [
  {
    quote: "If I have seen further than others, it is by standing upon the shoulders of giants.",
    author: "Isaac Newton",
    profile: "https://www.biography.com/.image/t_share/MTY2MzU3Njc4ODI0NjI5OTM0/isaac_newton_1689_painting_sir_godfrey_kneller_public_domain_via_wikimedia_commons.jpg",
    link: "https://en.wikipedia.org/wiki/Isaac_Newton"
  },
  {
    quote: "Many hands make light work.",
    author: "John Heywood",
    profile: "https://apprecs.org/ios/images/app-icons/256/fe/876080126.jpg",
    link: "https://en.wikipedia.org/wiki/John_Heywood"
  },
  {
    quote: 'One person can make a difference, and everyone should try.',
    author: 'John F. Kennedy',
    profile: 'http://images.politico.com/global/080408_50bar_jfk.jpg',
    link: "https://en.wikipedia.org/wiki/John_F._Kennedy"

  },
  {
    quote: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
    profile: 'https://qph.fs.quoracdn.net/main-thumb-117344100-200-bevjprxhfxjthnblpqybhtlunpnkhvxy.jpeg',
    link: "https://en.wikipedia.org/wiki/Alan_Kay"
  },
  {
    quote: 'All we have to decide is what to do with the time that is given to us',
    author: 'J.R.R. Tolkien',
    profile: 'https://static9planetadelibroscom.cdnstatics.com/usuaris/autores/fotos/19/tam_1/000018687_1_Tolkien_J_201512041814._R_201512041814._R_201512041814.__200_201512041814.jpg',
    link: "https://en.wikipedia.org/wiki/J._R._R._Tolkien"
  },
  {
    quote: "Everything around you that you call life was made up by people that were no smarter than you and you can change it, you can influence it, you can build your own things that other people can use.",
    author: "Steve Jobs",
    profile: "https://www.gannett-cdn.com/-mm-/f4f8cf8c812e00141458a67f4c0a3f8af56ca2d4/c=181-0-1079-898/local/-/media/2015/09/01/USATODAY/USATODAY/635766651669578501-SteveJobs.jpg?width=200&height=200&fit=crop",
    link: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5aLRyL_sI-Ja5ffbAfgVvJ8n3DGZcOWal5BlgHOLCYwzN_qqH",
    link: "https://en.wikipedia.org/wiki/Vince_Lombardi"
  },
  {
    quote: "An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity.",
    author: "Dr. Martin Luther King, Jr.",
    profile: "data:image/jpeg;base64,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",
    link: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."
  },
  {
    quote: "I used to think the worst thing in life was to end up all alone. It’s not. The worst thing in life is to end up with people that make you feel all alone.",
    author: "Robin Williams",
    profile: "http://www.211brevard.org/wp-content/uploads/2014/08/williams_mug.jpg",
    link: "https://en.wikipedia.org/wiki/Robin_Williams"
  },
  {
    quote: "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.",
    author: "Malcolm X",
    profile: "https://lexgoodrich.files.wordpress.com/2014/11/malcomx-i_-e1415562421442.jpg?w=676",
    link: "https://en.wikipedia.org/wiki/Malcolm_X"
  },
  {
    quote: "I am no longer accepting the things I cannot change. I am changing the things I cannot accept.",
    author: "Angela Davis",
    profile: "https://www.alternativeradio.org/wp-content/uploads/2018/09/pic_angela-davis.jpg",
    link: "https://en.wikipedia.org/wiki/Angela_Davis"

  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
    profile: "https://api.mbtidatabase.com/profile_images/395.png",
    link: "https://en.wikipedia.org/wiki/Albert_Einstein"
  },
  {
    quote: "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for.",
    author: "Tupac Shakur",
    profile: "https://fastly.4sqi.net/img/general/200x200/37698458_vf2VgIuWiXxeJ2nNAB90suuwJ1idS57stzTU_Xw5--g.jpg",
    link: "https://en.wikipedia.org/wiki/Tupac_Shakur"
  },
  {
    quote: "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon",
    profile: "https://i.pinimg.com/236x/15/98/ea/1598eac31212057289965934817a1c66--john-lennon-music-bands.jpg",
    link: "https://en.wikipedia.org/wiki/John_Lennon"
  },
];
const colors = [
  "#fea49f",
  "#51d0de",
  "#d9d9d9",
  "#6b7a8f",
  "#f7c331",
  "#fc5226",
  "#cdd422",
  "#7575dd",
  "#ffdc6a",
  "#9068be",
  "#fa625f",
  "#fbf579",
  "#cae4ddb",


      ];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      profile: '',
      link: '',
      color: '',
    }
    this.generateQuote = this.generateQuote.bind(this);
  }


  generateQuote() {
    let randomIndex = (Math.floor(Math.random() * Object.keys(quotes).length))

    // calculate a random index in the colors
    // array
    let randomColorIndex = (Math.floor(Math.random() * Object.keys(colors).length))


    let quote = quotes[randomIndex].quote;
    let author = quotes[randomIndex].author;
    let profile = quotes[randomIndex].profile;
    let link = quotes[randomIndex].link;
    let color = colors[randomColorIndex];

    this.setState({
      quote: quote,
      author: author,
      profile: profile,
      link: link,
      color: color
    });
  };

  componentDidMount(){
    this.generateQuote();
  };

  render(){
    return(
      <div id="quote_box" style={{ backgroundColor: this.state.color}}>
        <div id="title">
          <h1>Random Quote Generator</h1>
          <h6>Click on the picture to learn more about the author!</h6>
          <ColoredLine color="black"/>
        </div>
        <div id="test_div">
          <a href={this.state.link} target="_blank"><img id="profile" src={this.state.profile}/></a>
          <Quote id="quote_info" quote={this.state.quote} author={this.state.author} link={this.state.link}/>
        </div>
        <Buttons id="button_pad" handleNewQuote={this.generateQuote} quote={this.state.quote} author={this.state.author} />

      </div>
    )
  };
};

class Quote extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="wrapper">
        <i><q id="text" className="quote_text">{this.props.quote}</q></i>
        <h2 id="author" className="author_text"><strong>- {this.props.author}</strong></h2>

      </div>
    )
  }
};



class Buttons extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="buttons">
        <button type="button" id="new_quote" onClick={this.props.handleNewQuote}>New Quote
        </button>
        <a id="tweet_quote" target="_blank" href={`https://twitter.com/intent/tweet/?text=${this.props.quote} - ${this.props.author}`}><button><i class="fab fa-twitter"></i></button></a>
      </div>
    )
  }
};

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,

        }}
    />
);

export default App;
