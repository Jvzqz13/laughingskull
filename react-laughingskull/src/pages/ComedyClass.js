import YoutubeEmbed from "../components/YoutubeEmbed";

function ComedyClass () {
    return (
        <div className="comedy-class" >
            <h1> Comedy Class </h1>
            <hr />
            <div className="info">
                <p>
                The Laughing Skull Lounge Stand Up comedy class is a six week 
                comedy course that ends with a graduation show! <br /> 
                <br />
                We apply lessons from the best comedians in the county and help you 
                create a solid 5-8 minute set to use as you wish. <br /> 
                We sell out almost every class, so if you want to take our class, we suggest you sign up now! <br />
                <br />
                <span style={{ fontWeight:"650" }}>  Our Atlanta comedy classes teacher: </span> <br />
                Plug Chapman has been a working Stand-up comedian for over 10 years and can be seen on Comedy Central and TruTV. <br /> 
                He is a hit with audiences from east to west coasts, performing in venues such as <br />
                The Comedy Store, The Laugh Factory and John Lovitz Comedy Club just to name a few. <br />
                <br />

                We also have visiting professional comedians help you in weeks 4-6 to add even more punch to your jokes.
                </p>
            </div>

            <div className="youtube-vid">
                <h3> youtube </h3>
            {/* insert youtube vid here */}
            <YoutubeEmbed embedId="3xZc_mEkaZs" />
            </div>

            <div className="big-reasons">
                <h3> lists of reasons </h3>
                {/* list of reasons */}
            </div>



        </div> 
    )
}


export default ComedyClass;