import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div 
   
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Will & Jace: A Fraiser Podcast
      </h3>
    </Link>
    <Link
      to={`/about/`}
      className="links"
    >
      Home
    </Link>
    <Link
      to={`/about/`}
      className="links"
    >
      Listen
    </Link>
    <Link
      to={`/about/`}
      className="links"
    >
      Team
    </Link>
    <Link
      to={`/about/`}
      className="links"
    >
      Follow
    </Link>
    <Link
      to={`/about/`}
      className="links"
    >
      Archive
    </Link>
    {children}
  </div>
)