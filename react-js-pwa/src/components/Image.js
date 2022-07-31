const Image = (props) => {
    return (
      <img alt={props.name} className="card-image" src={props.source}></img>
    );
  };

  export default Image;