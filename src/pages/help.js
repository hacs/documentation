/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import styles from './styles.module.css'

const blocks = [
  {
    title: <>Browse Docs</>,
    description: (
      <>
        Learn more using the <a href="/">documentation on this site.</a>
      </>
    ),
  },
  {
    title: <>Stay up to date</>,
    description: (
      <>
        Find out what's new with this project over at{' '}
        <a href="https://github.com/hacs" target="_blank">
          GitHub.
        </a>
      </>
    ),
  },
  {
    title: <>Want to submit a Bug or a Feature request?</>,
    description: (
      <>
        <a href="/docs/issues">Before you do make sure you first have a look here.</a>
      </>
    ),
  },
  {
    title: <>Discord</>,
    description: (
      <>
        For questions, you can join the{' '}
        <a href="https://hacs.xyz/discord" target="_blank">
          discord server
        </a>
        , issues do still belong on GitHub.
      </>
    ),
  },
  {
    title: <>FAQ</>,
    description: (
      <>
        <a href="/docs/faq/what">Frequently asked questions</a>
      </>
    ),
  },
]

function Help() {
  return (
    <Layout title={`HACS: Help`}>
      <main>
        <section className="help">
          <div className="container docItemContainer_">
            <div className="row">
              {blocks.map(({ title, description }, idx) => (
                <div key={idx} className={classnames('col col--4', styles.feature)}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Help
