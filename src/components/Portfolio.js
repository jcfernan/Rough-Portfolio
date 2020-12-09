import React, {Component} from 'react';
export default class Portfolio extends Component {
    render(){
        let resumeData = this.props.resumeData;
        return(
            <section id= "portfolio">
                <div className= "row">
                    <div className= "twelve columns collapsed">
                        <h1>Here are Some Example of My Work.</h1>
                        <div id= "portfolio-wrapper" className= "bgrid-quarters s-bgrid-thirds cf" alt= "">
                            {
                                resumeData
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}