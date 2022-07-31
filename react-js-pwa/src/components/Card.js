import Image from "./Image";
import formatDate from "./Utils";

function Card(props) {
  
  let desc = props.description;
  let description =
      desc.length > 100
    ? `${desc.substring(0, 100)}...`
    : desc;

  return (
    <div className="card">
      <header>
        <Image name={props.slug} source={props.image} />
        <a href={`${props.slug}`} className="card-hover">
          <i className="fa fa-eye"></i>
        </a>
      </header>
      <div className="card-body">
        <h1>{props.title}</h1>
        <p className="card-date">{formatDate(props.date)}</p>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
