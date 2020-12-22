import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div
            class="column is-half is-offset-one-quarter is-fullheight-with-navbar"
          >
            <h3 className="has-text-weight-semibold is-size-2">Latest News</h3>
          </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
