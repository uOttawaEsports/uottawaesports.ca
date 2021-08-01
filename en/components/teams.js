const e = React.createElement;

class Teams extends React.Component {

  render() {

    return (
      <div className="d-flex">
        <div className="d-flex flex-column" style={{marginLeft: '10rem'}}>
          <button className="btn bg-danger">
            Rocket League
          </button>
          <button className="btn bg-danger">
            League of Legends
          </button>
          <button className="btn bg-danger">
            VALORANT
          </button>
        </div>
        <Content />
      </div>
    );
  }
}

class Content extends React.Component {

  render() {

    return (
      <button className="btn bg-danger">
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#teams');
ReactDOM.render(e(Teams), domContainer);