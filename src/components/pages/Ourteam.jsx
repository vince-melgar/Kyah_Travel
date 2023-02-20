import Ringgo from '../../images/Ringgo.jpg';
import Moren from '../../images/Moren.jpg';
import Haz from '../../images/Haz.jpg';
import Ben from '../../images/Ben.jpg';
import Bert from '../../images/Bert.jpg';
import { useState } from 'react';


function Ourteam() {
        const [bertExpanded, setBertExpanded] = useState(false);
        const [benExpanded, setBenExpanded] = useState(false);
        const [morenExpanded, setMorenExpanded] = useState(false);
        const [hazExpanded, setHazExpanded] = useState(false);
        const [ringgoExpanded, setRinggoExpanded] = useState(false);

        const toggleBertExpanded = () => setBertExpanded(!bertExpanded);
        const toggleBenExpanded = () => setBenExpanded(!benExpanded);
        const toggleMorenExpanded = () => setMorenExpanded(!morenExpanded);
        const toggleHazExpanded = () => setHazExpanded(!hazExpanded);
        const toggleRinggoExpanded = () => setRinggoExpanded(!ringgoExpanded);

        return (
                <>
                        <div className="team">
                                <div className="container mt-3 mb-3">
                                        <h2 className="text-center">Meet Our Developer Team</h2>
                                        <hr className="my-4" />
                                        <p className="text-center">
                                                Our team is composed of experienced professionals who are dedicated
                                                to providing valuable insights and knowledge to our audience.
                                        </p>
                                        <div className="row justify-content-center">
                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                        <div className="card h-100">
                                                                <img src={Bert} alt="Bert" style={{height:220}}  className="card-img-top" />
                                                                <div className="card-body">
                                                                        <h4 className="card-title">Front-end Developer</h4>
                                                                        {bertExpanded ? (
                                                                                <>
                                                                                        <p className="card-text">
                                                                                                Robert is a Front-end Developer with a passion for
                                                                                                creating efficient and interactive user interfaces.

                                                                                        </p>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleBertExpanded}
                                                                                        >
                                                                                                Read Less
                                                                                        </button>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleBertExpanded}
                                                                                        >
                                                                                                Read More
                                                                                        </button>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                        <div className="card h-100">
                                                                <img src={Ben} alt="Benedict" style={{height:220}}  className="card-img-top" />
                                                                <div className="card-body">
                                                                        <h4 className="card-title">Full-Stack Developer</h4>
                                                                        {benExpanded ? (
                                                                                <>
                                                                                        <p className="card-text">
                                                                                                Benedict Vincent is a Full-Stack Developer and a tech
                                                                                                support consultant.
                                                                                        </p>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleBenExpanded}
                                                                                        >
                                                                                                Read Less
                                                                                        </button>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleBenExpanded}
                                                                                        >
                                                                                                Read More
                                                                                        </button>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                        <div className="card h-100">
                                                                <img src={Moren} alt="Moren" style={{height:220}}  className="card-img-top" />
                                                                <div className="card-body">
                                                                        <h4 className="card-title">Web Developer</h4>
                                                                        {morenExpanded ? (
                                                                                <>
                                                                                        <p className="card-text">
                                                                                                Moren is a Web Developer with expertise in
                                                                                                building and maintaining web applications.

                                                                                        </p>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleMorenExpanded}
                                                                                        >
                                                                                                Read Less
                                                                                        </button>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleMorenExpanded}
                                                                                        >
                                                                                                Read More
                                                                                        </button>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                        <div className="card h-100">
                                                                <img src={Haz} alt="Haz" style={{height:220}} className="card-img-top" />
                                                                <div className="card-body">
                                                                        <h4 className="card-title">Back-end Developer</h4>
                                                                        {hazExpanded ? (
                                                                                <>
                                                                                        <p className="card-text">
                                                                                                Haz is a highly skilled expert in the server
                                                                                                side.
                                                                                        </p>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleHazExpanded}
                                                                                        >
                                                                                                Read Less
                                                                                        </button>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleHazExpanded}
                                                                                        >
                                                                                                Read More
                                                                                        </button>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                        <div className="card h-100">
                                                                <img src={Ringgo} alt="Ringgo" style={{height:220}} className="card-img-top" />
                                                                <div className="card-body">
                                                                        <h4 className="card-title">UI/UX Designer</h4>
                                                                        {ringgoExpanded ? (
                                                                                <>
                                                                                        <p className="card-text">
                                                                                                Ringgo is a UI/UX Designer with expertise in
                                                                                                creating visually appealing and user-friendly designs.
                                                                                        </p>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleRinggoExpanded}
                                                                                        >
                                                                                                Read Less
                                                                                        </button>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <button
                                                                                                className="btn btn-link"
                                                                                                onClick={toggleRinggoExpanded}
                                                                                        >
                                                                                                Read More
                                                                                        </button>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}

export default Ourteam;





