import OpenmicSkull from '../images/openmic.9d5b4bc.jpg'

function OpenMics (){
    return (
        <div className='open-mics' > 
            <div>
                <h1> Open Mics </h1>
                <hr />

                <div className='main-section' > 
               
                    <div className='open-micSection'>

                        <div className='words'>

                        

                    <p> 

                    Laughing Skull Comedy Open Mic happens every Monday, Tuesday and Wednesday and starts at 8pm! <br />
                    <br />
                    Our open mic is for both amateur talent, and for visiting national comedians work on their material <br /> 
                    (…or to help rebuild their confidence)! You will see people doing jokes for the first time, expanding <br />
                    on current jokes, and some times just plain eating it… which is pretty awesome! Regardless, <br />
                    The Laughing Skull supports comedy as an Art Form, and as an art form, watch us explore, expand, <br />
                    die, laugh, and strike gold! <br />
                    <br />

                    The Comedians on each show are PRE-BOOKED, and shows are typically booked up to 2-3 weeks out. <br />
                    <br />

                    If you are interested in performing at the Laughing Skull Open Mic, <br />
                    email: openmic@laughingskulllounge.com. <br />
                    Please Include In Your Email: <br />
                    <br />

                    <ul>
                        <li> 1. Is this your first time performing stand up?  </li>
                        <li> 2. If you plan on bringing anyone out to support the show! </li>
                        <li> 3. Any questions you have regarding the performance, material, etc… </li>
                    </ul>

                    <br />

                    Please be sure to introduce yourself – like with your name at the beginning of your email so we know <br />
                    who to book. There are a lot of people trying to get on these shows and people who are unable to compose <br />
                    a minimally cordial email are easy to overlook.<br />
                    <br />
                    Thanks!

                    </p>
                    </div>
                    <div className='img-pic'>
                        <img src={OpenmicSkull} alt='openskull' style={{ width: "320px", padding: "10px", margin:"0" }} />
                    </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default OpenMics;