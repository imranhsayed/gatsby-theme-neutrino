import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {

	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<div className="container">
			<div className="hero">
				<h1 className="name"><strong>Imran</strong> Sayed</h1>
				<span className="job-title">Developer</span><span className="email">codeytek@gmail.com</span>
				<h2 className="lead">{data.site.siteMetadata.title}</h2></div>
		</div>
	)
};

export default Header;
