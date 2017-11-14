import React from 'react';
import Forum from '../../components/Forum.js'

class ForumPage extends React.Component {
    constructor(){
        super();
        this.state = {
            forum: {
                subForums: []
            }
        };
    };

    componentDidMount() {
        console.log(this.props.match.params);
        fetch("http://localhost:8080/voz/forum/" + this.props.match.params.forumId)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    forum: json
                });
                console.log(this.state);
            });
    };

    componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps)
        console.log(nextState)
        if (true) {
            var newState = Object.assign({}, this.state);
            // make necessary changes to the nextState Object by calling
            // functions which would change the rendering of the current page
            this.setState({nextState});
        }
    };

    render() {
        return (
            <div>
                {this.state.forum.subForums.map(function(forum) {
                    return <Forum key={forum.forumId} data={forum}/>
                })}
            </div>
        )
    }
}


export default ForumPage;

