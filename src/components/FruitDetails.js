import React from 'react';
import { Link } from 'react-router-dom';

const FruitDetails = (props) => {

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src="https://p4.wallpaperbetter.com/wallpaper/858/697/98/berries-fruit-fresh-fruits-wallpaper-preview.jpg" alt={props.fruit.name} />
                </div>
                <div className="col-md-6 fs-4">
                <h1 className="display-5 fw-bolder mb-3">{props.fruit.name}</h1>
                    <div className="small mb-1">Fruit Id: {props.fruit.id}</div>                    
                    <div className="small mb-1">Fruit Family: {props.fruit.family}</div>  
                    <div className="small mb-1">Fruit genus: {props.fruit.genus}</div>                            
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0 mt-5 bg-danger text-white" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FruitDetails;
