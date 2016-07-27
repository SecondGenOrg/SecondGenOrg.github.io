import React from 'react';
import ChaptersMap from './ChaptersMap'
export default class Chapters extends React.Component {
    render() {
        return (
            <div id="chapters-wrapper" className="content-wrapper">
            		<section className="header-wrapper valign-wrapper"> 
                    <div className="header-text valign">
                        <h1>Chapters</h1>
                        <p>Some text about chapters or something blah blah blah.</p>
                    </div>
			            	<ChaptersMap
			            		id="chapters-map"
			            	/>
                </section>
                <a style={{marginTop: '60vh'}} href="/">asdf</a>
            </div>

        );
    }
}