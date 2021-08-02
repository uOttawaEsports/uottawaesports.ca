const { useState } = React;

const e = React.createElement;

const teams = {
  "cs:go": {
    title: "CS:GO",
    description: "lorem ipsum...",
    image: "../../images/logo-square.png",
    background: "../../images/uottawa-aerial.jpg",
  },
  "dota 2": {
    title: "DOTA 2",
    description: "",
    image: "",
    background: "",
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
    <div className="d-flex">
      <div className="d-flex flex-column" style={{ marginLeft: '10rem' }}>
        <button className="btn bg-danger" onClick={() => { setTeam("cs:go") }} >
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
  );
}

class Content extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: "url(" + this.props.team.background + ")"}}>
        <div>{this.props.team.title}</div>
        <div>{this.props.team.description}</div>
        <img src={this.props.team.image}></img>
      </div>
    );
  }
}

const domContainer = document.querySelector('#teams');
ReactDOM.render(e(Teams), domContainer);