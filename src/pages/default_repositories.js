/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import { useAsync } from 'react-async'

const categories = [
  { slug: 'integration', name: 'Integrations' },
  { slug: 'plugin', name: 'Plugins' },
  { slug: 'appdaemon', name: 'AppDaemon Apps' },
  { slug: 'netdaemon', name: 'NetDaemon Apps' },
  { slug: 'python_script', name: 'Python scripts' },
  { slug: 'theme', name: 'Themes' },
]

const loadData = async () =>
  await fetch('https://api.hacs.xyz/repositories')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json())

function DefaultRepositories() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData })
  if (isLoading) return <Layout title="Default repositories | HACS"></Layout>
  if (error) return <Layout title="Default repositories | HACS"></Layout>
  if (data)
    return (
      <Layout title={`Default repositories | HACS`}>
        <main>
          <section className="default-repositories">
            <div class="container padding-vert--lg docItemWrapper_1bxp">
              <div class="row">
                <div class="col">
                  <h1 class="docTitle_Oumm">Default repositories</h1>
                  <p>
                    Dedicated unofficial website to browse repositories:{' '}
                    <a
                      href="https://hacs-repositories.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hacs-repositories.web.app
                    </a>
                  </p>
                  <p>
                    There are currently{' '}
                    {data.integration.length +
                      data.plugin.length +
                      data.appdaemon.length +
                      data.netdaemon.length +
                      data.python_script.length +
                      data.theme.length}{' '}
                    default repositories in HACS in {Object.keys(data).length} categories.
                  </p>
                  {categories.map((category) => (
                    <span>
                      <h2>
                        <a class="anchor enhancedAnchor_prK2" id={category.slug}></a>
                        {category.name}
                        <a class="hash-link" href={`#${category.slug}`}>
                          #
                        </a>
                      </h2>
                      <i>{data[category.slug].length} Repositories in total.</i>
                      <ul>
                        {data[category.slug].map((repo) => (
                          <li>
                            <a
                              href={`https://github.com/${repo}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {repo}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </span>
                  ))}
                  Last updated: {new Date(Number(data.last_updated)).toISOString()}
                </div>
                <div class="col col--3">
                  <div class="tableOfContents_2xL- thin-scrollbar">
                    <ul class="table-of-contents table-of-contents__left-border">
                      {categories.map((category) => (
                        <li>
                          <a href={`#${category.slug}`} class="table-of-contents__link">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
}

export default DefaultRepositories
