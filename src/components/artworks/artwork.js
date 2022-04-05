function Artwork(props) {
  return props.post.map((p) => (
    <div className="row">
      <div className="col-10">
        <div className="row">
          <div className="col-3 nombreObra bg-secondary">
            <h3>{p.name}</h3>
          </div>
          <div className="col-1"></div>
          <div className="col-8 bg-secondary">
            <p>{p.description}</p>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  ));
}

export default Artwork;
