import PropTypes from "prop-types";

function YoutubeEmbed ({ embedId }) {
    return (
        <div className="video-responsive">
            <iframe 
                width="853"
                height="480"
                src={ `https://www.youtube.com/embed/${embedId}` }
                allow="accelerometer; auto play; clipboard-write; encrypted-media"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
    YoutubeEmbed.prototype = {
        embedId: PropTypes.string.isRequired
    }
}

export default YoutubeEmbed;