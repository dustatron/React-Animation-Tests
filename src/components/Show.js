import React, { Fragment } from 'react';
import SampleData from '../sampleData';
import '../scss/_show.scss';
import { Link } from 'react-router-dom';

const Show = ({ match }) => {
  const { img, title, cda } = SampleData.find(
    (p) => p.id.toString() === match.params.id
  );

  return (
    <Fragment>
      <div className='show-box'>
        <div className='show-box-left'>
          <div className='img-box'>
            <img src={img} alt='' />
          </div>
        </div>
        <div className='show-box-right'>
          <h2>{title}</h2>
          <h3>{cda}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eius asperiores amet soluta minima laborum temporibus rem vero
            magnam quas eaque modi nisi itaque esse adipisci quo, delectus quasi
            repudiandae! Voluptatum, id veritatis, tempore ipsa reiciendis
            pariatur porro error, molestias dolor ad ea? Non voluptatibus iusto
            repudiandae iste possimus reprehenderit et qui ab nam aut harum
            facilis distinctio nostrum numquam, at, repellendus repellat sit
            debitis accusantium temporibus odit? Quidem, impedit officia amet
            dolore ullam placeat iste ratione ipsa similique temporibus
          </p>
          <button className='buy-now'> Buy Now </button>
        </div>
        <Link to='/'>
          <button className='back'> Back </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Show;
