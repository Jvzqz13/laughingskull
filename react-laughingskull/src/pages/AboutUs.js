import GoogleReviewLink from "../components/GoogleReviewLink"

function AboutUs (){
    return (
        <div className="about-us">

        <h1> About Us </h1>
        <hr />
         
            <div> 
            <p> 
                Laughing Skull Lounge has been serving up laughs to Atlanta comedy fans since 2010. <br /> 
                We are back open in our home location at The Vortex Midtown! <br />
                Come see our signature, “Best of Atlanta Showcase” where you will see 8 comedians doing their <br />
                best 10 minutes on Thursday - Sunday. <br />
                <br />

                Also, Stay tuned for more updates on upcoming shows!<br />
                <br />

                Get your tickets now so you can see… The Best Show In Atlanta!
            </p>
                <GoogleReviewLink />
                <br />
                <br />
            </div>
        
        </div>
    )
}

export default AboutUs