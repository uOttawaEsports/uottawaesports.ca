const { useState } = React;

const e = React.createElement;

const teams = {
  "cs:go": {
    title: "CS:GO",
    description: "lorem ipsum...",
    image: "../../images/logo-square.png",
    background: "../../images/uottawa-background.jpg",
  },
  "dota 2": {
    title: "DOTA 2",
    description: "dota",
    image: "../../images/logo-square.png",
    background: "../../images/uottawa-aerial.jpg",
  },
  "league of legends": {
    title: "League of Legends",
    description: "",
    image: "",
    background: "",
  },
  "rainbow six siege": {
    title: "Rainbow Six Siege",
    description: "",
    image: "",
    background: "",
  },
  "rocket league": {
    title: "Rocket League",
    description: "",
    image: "",
    background: "",
  },
  "valorant": {
    title: "VALORANT",
    description: "",
    image: "",
    background: "",
  }
}

function Teams() {
  const [team, setTeam] = useState("cs:go");

  return (
    <div class="container-fluid" style={{ backgroundImage: "url(" + teams[team].background + ")", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "scroll" }}>
      <div className="row">
      <div className="d-flex">
        <div className="d-flex flex-column col-12 col-lg-3" style={{ marginLeft: '5rem' }}>
          <button className="btn bg-danger" onClick={() => { setTeam("cs:go") }} style={{ marginBottom: '2rem' }}>
            CS:GO
          </button>
          <button className="btn bg-danger" onClick={() => { setTeam("dota 2") }} >
            DOTA 2
          </button>
          <button className="btn bg-danger" onClick={() => { setTeam("league of legends") }} >
            League of Legends
          </button>
          <button className="btn bg-danger" onClick={() => { setTeam("rainbow six siege") }} >
            Rainbow Six Siege
          </button>
          <button className="btn bg-danger" onClick={() => { setTeam("rocket league") }}>
            Rocket League
          </button>
          <button className="btn bg-danger" onClick={() => { setTeam("valorant") }}>
            VALORANT
          </button>
        </div>
        <Content team={teams[team]} />
      </div>
      </div>
    </div>
  );
}

class Content extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-9">
        <div>Hello: {this.props.team.title}</div>
        <div>{this.props.team.description}</div>
        <img src={this.props.team.image}></img>
      </div>
    );
  }
}

const domContainer = document.querySelector('#teams');
ReactDOM.render(e(Teams), domContainer);