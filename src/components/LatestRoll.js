import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LatestRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-centered is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-8" key={post.id}>
              <Link to={post.fields.slug}>
              <article
                className={`blog-list-item tile is-vertical is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">

                      <h3>
                      {post.frontmatter.title}
                      </h3>

                    <span></span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />

                </p>
              </article>
              </Link>

            </div>
          ))}
      </div>
    )
  }
}

LatestRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LatestRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }, limit: 3
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost

              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LatestRoll data={data} count={count} />}
  />
)
