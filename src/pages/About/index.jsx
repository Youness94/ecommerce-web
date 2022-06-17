import React from "react";
import {Link} from 'react-router-dom'
import about from '../../img/about.jpeg'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem sequi maiores, necessitatibus perspiciatis cum
              nulla quod rerum nemo recusandae, quae, commodi repudiandae animi
              deleniti modi expedita quis inventore ipsum minus totam. Sapiente
              laudantium cupiditate dolores cumque aliquid architecto
              necessitatibus, repellat laboriosam reiciendis iste voluptas illo,
              maiores culpa, dolorum sit fugit perferendis labore ab. Eum
              perferendis velit eaque ad maiores, illum ut unde incidunt alias,
              magni corrupti voluptatem assumenda atque impedit odio, officiis
              vitae quam deleniti voluptas libero ipsam saepe enim sequi? Ad id
              nemo libero assumenda ea ipsa eveniet et fugit? Dignissimos fugiat
              possimus, rerum provident incidunt modi. Velit, unde tenetur?
              Similique reprehenderit numquam delectus commodi tempore dolorum
              explicabo ipsa, quis ea nam vel, aliquam maiores temporibus
              debitis? Dolore!
            </p>
            <a className='btn btn-outline-primary px-3' href='/contact'>Contact Us</a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
                <img src={about} alt="" height='470px' width='400px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
