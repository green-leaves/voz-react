import React from 'react';
import { Link } from 'react-router-dom';
import Forum from './Forum.js'

class Category extends React.Component {
    render() {
        return(
            <div key={this.props.data.catId} className="category col-lg-12">
                <h1 className="categories-title">{this.props.data.name}</h1>
                {
                    this.props.data.forums.map(function(forum) {
                        return <Forum key={forum.forumId} data={forum}/>
                    })
                }
            </div>
        )
    }
}

export default Category;