import React from 'react';
import { Link } from 'react-router-dom';

const FruitItem = (props) => {    

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/858/697/98/berries-fruit-fresh-fruits-wallpaper-preview.jpg" alt={props.fruit.name} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.fruit.name}</h5>
                    {props.fruit.genus}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.fruit.id}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FruitItem;
