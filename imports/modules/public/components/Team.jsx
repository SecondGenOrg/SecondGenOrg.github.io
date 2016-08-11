import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
export default class Component extends React.Component {
    constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.blue500
          }
      };
      this.team = [
      		{
      				name: 'Asdf Asdf',
      				title: 'Executive Director',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'asdf asdfaf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdf grasdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdfaw asdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdwef asdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdfwf asdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdsdff asdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf Asdf aassdf',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}, {
      				name: 'Asdf A',
      				title: 'Director of asdf',
      				imgSrc: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'//'/img/team/bobby_thakkar.jpg'
      		}
      ]
      this.state = { styles };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper" id="team-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Team</h1> 
                        <p>Text text text text text text text text.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                		<div className="row">
		                		{
		                				this.team.map(function(person) {
		                						return (
		                								<div className="team-item col-xs-12 col-sm-4" key={person.name}>
		                										<img src={person.imgSrc} />
		                										<h3 className="name">{person.name}</h3>
		                										<h4 className="title">{person.title}</h4>
		                								</div>
		                						)
		                				})
		                		}
                		</div>
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}