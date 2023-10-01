/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const features = [
  {
    title: <>Integrations</>,
    Url: '/docs/categories/integrations',
    description: <></>,
  },
  {
    title: <>Plugins</>,
    Url: '/docs/categories/plugins',
    description: <></>,
  },
  {
    title: <>AppDaemon Apps</>,
    Url: '/docs/categories/appdaemon_apps',
    description: <></>,
  },
  {
    title: <>Python Scripts</>,
    Url: '/docs/categories/python_scripts',
    description: <></>,
  },
  {
    title: <>Templates</>,
    Url: '/docs/categories/templates',
    description: <></>,
  },
  {
    title: <>Themes</>,
    Url: '/docs/categories/themes',
    description: <></>,
  },
  {
    title: <>NetDaemon Apps (deprecated)</>,
    Url: '/docs/categories/netdaemon_apps',
    description: <></>,
  },
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={siteConfig.tagline} description={siteConfig.themeConfig.description}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className="logo" src="https://assets.hacs.xyz/logo.svg"></img>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle">{siteConfig.themeConfig.description}</p>
          <div className={styles.indexCtas}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg btt',
                styles.indexButton,
              )}
              to={useBaseUrl('docs/setup/prerequisites')}
            >
              DOWNLOAD
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg btt',
                styles.indexButton,
              )}
              to={useBaseUrl('docs/configuration/basic')}
            >
              CONFIGURE
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg btt',
                styles.indexButton,
              )}
              to={useBaseUrl('docs/publisher')}
            >
              PUBLISH
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="index container">
            <div className="row">
              {features.map(({ Url, title, description }, idx) => (
                <div key={idx} className={classnames('col col--4', styles.feature)}>
                  <a href={Url}>
                    <h3>{title}</h3>
                  </a>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={classnames('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <Carousel>
              <div>
                <img className="demo" src="img/panel/entry.png" />
                <p className="legend">HACS Entry page</p>
              </div>
              <div>
                <img className="demo" src="img/panel/search.png" />
                <p className="legend">Search all repositories</p>
              </div>
              <div>
                <img className="demo" src="img/panel/filter.png" />
                <p className="legend">Filter repositories</p>
              </div>
            </Carousel>
          </div>
        </section>

      </main>
    </Layout>
  )
}

export default Home
