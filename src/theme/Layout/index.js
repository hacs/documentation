/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';

import './styles.css';

function Layout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    favicon,
    tagline,
    title: defaultTitle,
    themeConfig: {image: defaultImage},
    url: siteUrl,
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink,
  } = props;
  const metaTitle = title || `${defaultTitle} · ${tagline}`;
  const metaImage = image || defaultImage;
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={useBaseUrl(favicon)} />

        <title>{metaTitle}</title>

        <meta property="keywords" content={keywords} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + useBaseUrl(metaImage)}/>
        <meta property="og:url" content={siteUrl + permalink} />
        <meta property="og:title" content={`HACS: ${metaTitle}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        <meta property="twitter:image" content={siteUrl + useBaseUrl(metaImage)}/>
      </Head>
      <Navbar />
      <div className="main-wrapper">{children}</div>
      {!noFooter && <Footer />}
    </>
  );
}

export default Layout;
