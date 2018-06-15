import React from 'react'
import Img from 'gatsby-image'

class ContactSocial extends React.Component {
	render() {
		return (
			<div className="ContactSocial">			
				<div className="contain">
					<h3 className="ContactSocial__title col-xs-12 text-center">Mis Datos</h3>
					<div className="ContactSocial__info row">
						<div className="ContactSocial__info__item col-xs-6">
							<p><img src="https://icongr.am/feather/mail.svg?color=FFFFFF"  title="{{ item.title }}" />Email</p>
							<ul>
								<li>
									<a href="">dantehemerson@gmail.com</a>
								</li>									
							</ul>
						</div>
						<div className="ContactSocial__info__item col-xs-6">
							<p><img src="https://icongr.am/feather/phone.svg?color=FFFFFF"  title="{{ item.title }}" />Celular</p>
							<ul>
								<li>
									<p>+51 928124770</p>
								</li>
							</ul>
						</div>
					</div>

					<div class="row ">
						<div class="col-12 social-network">				
							<h3 class="title-section">Sigueme</h3>
							<div class="container-social">
								<div>
									<a class="link-no-border icon icon-github" href="https://www.github.com/dantehemerson" title="Github - Dante Calderón" target="_blank">
										<img src="https://icongr.am/feather/github.svg?color=FFFFFF" title="Github - Dante Calderón"/>
									</a>		
									<a class="link-no-border icon icon-twitter" href="https://twitter.com/dantehemerson" title="Twitter - Dante Calderón" target="_blank">
										<img src="https://icongr.am/feather/twitter.svg?color=FFFFFF" title="Twitter - Dante Calderón"/>
									</a>		
									<a class="link-no-border icon icon-instagram" href="https://www.instagram.com/dantehemerson/" title="Instagram - Dante Calderón" target="_blank">
										<img src="https://icongr.am/feather/instagram.svg?color=FFFFFF" title="Instagram - Dante Calderón"/>
									</a>		
									<a class="link-no-border icon icon-linkedin" href="https://www.linkedin.com/in/dantehemerson/" title="Linkedin - Dante Calderón" target="_blank">
										<img src="https://icongr.am/feather/linkedin.svg?color=FFFFFF" title="Linkedin - Dante Calderón"/>
									</a>		
								</div>
							</div>
						</div>
					</div>
				</div>				
				<Img sizes={this.props.imageLeft.sizes} />
			</div>
		)
	}
}

export default ContactSocial