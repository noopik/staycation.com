import React from 'react';

import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function Activity({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-bold">Activity</h4>
        <div className="container-grid">
          {data.map((item, index) => {
            return (
              <div key={`Activity-${index}`} className="item column-3 row-1">
                <Fade bottom delay={300}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{' '}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
