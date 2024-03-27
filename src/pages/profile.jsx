import React, { useState, useEffect } from 'react';
import '../pages/showdata.css';
const Showdata = () => {
  // const [showComponent, setShowComponent] = useState(false);

  // const handleClick = () => {
  //   setShowComponent(true);
  // };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    fetch(`https://api.citashub.com/api/v1/getUser/${id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="main">
        <div className="container mt-2">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                {/* <button className='btn btn btn-success' onClick={handleClick}>Back</button>
                {showComponent && <Homepage />}
                Render user data */}
                {data && data.userData && (
                  <div id="userData">
                    <img src={data.userData.userImage} alt="User Picture" className="userimg" />
                    <h2 className="texth2">{data.userData.userName}</h2>
                    <p className="textp">{data.userData.userPronoun}</p>
                    <p className="textp">{data.userData.userAge} -Years</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <section id="" className="screenshots-section pb-100  ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <p>While they don’t affect your rankings, app store screenshots can make or break a
                    conversion decision for someone viewing
                    your app. Here’s why</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Showdata;
