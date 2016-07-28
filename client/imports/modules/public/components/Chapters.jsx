import React from 'react';
import ChaptersMap from './ChaptersMap';
import Paper from 'material-ui/Paper';
export default class Chapters extends React.Component {
    render() {
        return (
            <div id="chapters-wrapper" className="page-wrapper">
            	<section className="header-wrapper valign-wrapper"> 
                    <div className="header-text valign">
                        <h1>Chapters</h1>
                        <p>Some text about chapters or something blah blah blah.</p>
                    </div>
		            	<ChaptersMap
		            		id="chapters-map"
		            	/>
                </section>
                <div className="content-wrapper">
                    <Paper id="cover" />
                </div>
            </div>

        );
    }
}