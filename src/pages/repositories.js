/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';

import integrations from './defaults/integration.json'
import plugins from './defaults/plugin.json'
import appdaemon_apps from './defaults/appdaemon.json'
import python_scripts from './defaults/python_script.json'
import themes from './defaults/theme.json'


function Repositories() {
  return (
    <Layout title={`HACS: Default reposiotries`}>
      <main>
        <section className="repositories">
          <div className="container">
          <div className="category">
            <p>In addition to this list, the repositories from these GitHub organisations are also dafault in HACS:</p>
            <li><a href="https://github.com/custom-components" target="_blank">Integrations</a></li>
            <li><a href="https://github.com/custom-cards" target="_blank">Plugins</a></li>
            <li><a href="https://github.com/home-assistant-community-themes" target="_blank">Themes</a></li>
          </div>

            <div className="category" id="integrations">
              <h2>Integrations ({integrations.length}):</h2>
              {integrations.sort((a, b) => a > b ? 1 : -1).map(repository => 
                <li><a href={"https://github.com/"+ repository} target="_blank">{repository}</a></li>
              )}
            </div>


            <div className="category" id="plugins">
              <h2>Plugins ({plugins.length}):</h2>
              {plugins.sort((a, b) => a > b ? 1 : -1).map(repository => 
                <li><a href={"https://github.com/"+ repository} target="_blank">{repository}</a></li>
              )}
            </div>


            <div className="category" id="appdaemon_apps">
              <h2>AppDaemon Apps ({appdaemon_apps.length}):</h2>
              {appdaemon_apps.sort((a, b) => a > b ? 1 : -1).map(repository => 
                <li><a href={"https://github.com/"+ repository} target="_blank">{repository}</a></li>
              )}
            </div>


            <div className="category" id="python_scripts">
              <h2>Python scripts ({python_scripts.length}):</h2>
              {python_scripts.sort((a, b) => a > b ? 1 : -1).map(repository => 
                <li><a href={"https://github.com/"+ repository} target="_blank">{repository}</a></li>
              )}
            </div>


            <div className="category" id="themes">
              <h2>Themes ({themes.length}):</h2>
              {themes.sort((a, b) => a > b ? 1 : -1).map(repository => 
                <li><a href={"https://github.com/"+ repository} target="_blank">{repository}</a></li>
              )}
            </div>
            

          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Repositories;
