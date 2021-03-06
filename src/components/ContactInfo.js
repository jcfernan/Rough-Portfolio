import React, {Component} from 'react';
export default class ContactUs extends Component{
    render(){
        let resumeData = this.resumeData;
        return(
            <section id ="contact">
                <div className= "row section-head">
                    <div className= "ten columns">
                        <p className= "lead">
                            Please fell free to contact me for any collaborations or meetups below 
                        </p>
                    </div>
                </div>
                <div className= "row">
                    <aside className= "eight columns footer-widget">
                        <div className= "widget">
                            <h4>Linkedin:
                                {'https://www.linkedin.com/in/cfernan/'}
                            </h4>
                            <h4>GitHub
                                {'https://github.com/jcfernan'}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}
