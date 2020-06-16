import React, { useState } from 'react';
import SampleData from '../sampleData';
import '../scss/_show.scss';
import { Link } from 'react-router-dom';

const Show = ({ match }) => {
  const { img, title, cda } = SampleData.find(
    (p) => p.id.toString() === match.params.id
  );

  const [grow, setGrow] = useState(false);

  return (
    <div className='show-box'>
      <div className='show-box-left'>
        <div className='img-box'>
          <img src={img} alt='' />
          <Link to='/'>
            <div className='back'> Back </div>
          </Link>
        </div>
      </div>
      <div className='show-box-right'>
        <div className='show-box-right-title'>{title}</div>
        <div className='show-box-right-sub-title'>{cda}</div>
        <div class='show-box-right-copy'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          eius asperiores amet soluta minima laborum temporibus rem vero magnam
          quas eaque modi nisi itaque esse adipisci quo, delectus quasi
          repudiandae! Voluptatum, id veritatis, tempore ipsa reiciendis
          pariatur porro error, molestias dolor ad ea? Non voluptatibus iusto
          repudiandae iste possimus reprehenderit et qui ab nam aut harum
          facilis distinctio nostrum numquam, at, repellendus repellat sit
          debitis accusantium temporibus odit? Quidem, impedit officia amet
          dolore ullam placeat iste ratione ipsa similique temporibus
        </div>
        <div className={`buy-now`} onClick={() => setGrow(!grow)}>
          Elise
        </div>
        <div
          className={`buy-now-ball ${grow ? ' grow' : ' shrink'}`}
          onClick={() => setGrow(!grow)}></div>
      </div>
    </div>
  );
};

export default Show;
