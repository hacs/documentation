/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import { useAsync } from 'react-async';


const loadData = async () =>
  await fetch("https://hacs-documentation.ludeeus.workers.dev/")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function DefaultRepositories() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData })
  if (isLoading) return <Layout title='Default repositories | HACS'></Layout>
  if (error) return <Layout title='Default repositories | HACS'></Layout>
  if (data)
  return (
    <Layout title={`Default repositories | HACS`}>
      <main>
        <section className="default-repositories">
          <div class="container padding-vert--lg docItemWrapper_1bxp">
          <div class="row">
          <div class="col">
          <h1 class="docTitle_Oumm">Default repositories</h1>
            <p>Dedicated unofficial website to browse repositories: <a href="https://hacs-repositories.web.app/" target="_blank" rel="noopener noreferrer">hacs-repositories.web.app</a></p>
            <p>There are currently {(data.integration.length+data.plugin.length+data.appdaemon.length+data.netdaemon.length+data.python_script.length+data.theme.length)} default repositories in HACS in {Object.keys(data).length} categories.</p>
              <h2><a class="anchor enhancedAnchor_prK2" id="integrations"></a>Integrations<a class="hash-link" href="#integrations">#</a></h2>
              <i>{data.integration.length} Repositories in total.</i>
              <ul>
              {data.integration.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>

              <h2><a class="anchor enhancedAnchor_prK2" id="plugins"></a>Plugins<a class="hash-link" href="#plugins">#</a></h2>
              <i>{data.plugin.length} Repositories in total.</i>
              <ul>
                {data.plugin.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>

              <h2><a class="anchor enhancedAnchor_prK2" id="appdaemon-apps"></a>AppDaemon Apps<a class="hash-link" href="#appdaemon-apps">#</a></h2>
              <i>{data.appdaemon.length} Repositories in total.</i>
              <ul>
                {data.appdaemon.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>


              <h2><a class="anchor enhancedAnchor_prK2" id="netdaemon-apps"></a>NetDaemon Apps<a class="hash-link" href="#netdaemon-apps">#</a></h2>
              <i>{data.netdaemon.length} Repositories in total.</i>
              <ul>
                {data.netdaemon.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>


              <h2><a class="anchor enhancedAnchor_prK2" id="python-scripts"></a>Python Scripts<a class="hash-link" href="#python-scripts">#</a></h2>
              <i>{data.python_script.length} Repositories in total.</i>
              <ul>
                {data.python_script.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>

              <h2><a class="anchor enhancedAnchor_prK2" id="themes"></a>Themes<a class="hash-link" href="#themes">#</a></h2>
              <i>{data.theme.length} Repositories in total.</i>
              <ul>
                {data.theme.map((repo) => <li><a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a></li>)}
              </ul>





              Last updated: {new Date(Number(data.last_updated)).toISOString()}
          </div>
          <div class="col col--3">
            <div class="tableOfContents_2xL- thin-scrollbar">
              <ul class="table-of-contents table-of-contents__left-border">
                <li><a href="#integrations" class="table-of-contents__link">Integrations</a></li>
                <li><a href="#plugins" class="table-of-contents__link">Plugins</a></li>
                <li><a href="#appdaemon-apps" class="table-of-contents__link">AppDaemon Apps</a></li>
                <li><a href="#netdaemon-apps" class="table-of-contents__link">NetDaemon Apps</a></li>
                <li><a href="#python-scripts" class="table-of-contents__link">Python Scripts</a></li>
                <li><a href="#themes" class="table-of-contents__link">Themes</a></li>
              </ul>
            </div>
          </div>
          </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default DefaultRepositories;
