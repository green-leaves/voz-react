import React from 'react';
import Category from '../../components/Category.js'

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: []
        };
    };

    componentDidMount() {
        fetch("http://localhost:8080/voz/home")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    categories: json.categories
                });
            });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        {this.state.categories.map(function (category) {
                            return (
                                <Category key={category.catId} data={category}></Category>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default HomePage;
