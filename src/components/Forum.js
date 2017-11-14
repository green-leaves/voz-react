import React from 'react';
import { Link } from 'react-router-dom';


class Forum extends React.Component {

    render() {
        let forum = this.props.data;
        let color = '#4fc3f7';
        return(
            <div className="forum row clearfix">
                <div className="col-xs-12 col-md-7 col-sm9">
                    <div className="icon pull-left" style={{backgroundColor: color, color: '#fff'}}>
                        <i className="fa fa-fw fa-comments-o" />
                    </div>
                    <h2 className="title">
                        <Link to={`/forum/${forum.forumId}`}>{forum.name}</Link>
                        <div className="description">
                            <p>{forum.viewing > 0 ? forum.viewing : 0} Viewing</p>
                        </div>
                    </h2>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs stats">
                    <span className="unread human-readable-number">{this.shortenNumber(forum.threadNum)}</span><br />
                    <small>Threads</small>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs stats">
                    <span className="unread human-readable-number">{this.shortenNumber(forum.postNum)}</span><br />
                    <small>Posts</small>
                </div>
                <div className="card" style={{borderColor: color}}>

                </div>
            </div>
        )
    }

    //TODO: Move to Util
    shortenNumber(number) {
        let parts = number.split(",");
        switch (parts.length) {
            case 1:
                return number;
            case 2:
                return parts[0] + "K";
            case 3:
                return parts[0] + "M";
            default:
                return number;
        }
    }
}

export default Forum;