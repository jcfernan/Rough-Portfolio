import React, {Component} from 'react';

export default class Blog extends Component {
    render(){
        let resumeData = this.props.resumeData;
        return(
            <section id= "blog">
                <div className= "text-container">
                <div className= "row">
                    <div className= "two columns header-col">
                        <h1><span>Blog Posts</span></h1>
                    </div>
                    <div className= "ten columns flex-container">
                        <div className= "flexslider">
                            <ul className= "slides">
                                {
                                    resumeData.blogPosts && resumeData.blogPosts.map((item) => {
                                        return(
                                            <li>
                                                <blockquote>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                    <cite>{item.name}</cite>
                                                </blockquote>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> {/*div.flexslider ends */}
                    </div> {/*div.flex-container ends */}
                 </div> {/*row ends} */}
                </div> {/* text-container ends */}
            </section>
        );
    }
}