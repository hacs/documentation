import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title='Page Not Found'
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row tilted-404">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                Oh no! :(
              </h1>
              <p>
                This link is broken...
                <br />
                You can use the search to find what you where looking for.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
