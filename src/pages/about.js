import React from "react"
import Layout from "../components/layout"
import PictureContent from "../components/pictureContent"

export default () => (
  <Layout>
    <h1>About Pandas Eating Lots</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>

    <article className="event">
    <PictureContent 
    picture="/images/brittney.jpg"
    alt="a lady"
    content={[
        <p>our cheers resource</p>
    ]}
    />
    <PictureContent 
    picture="/images/justin.jpg"
    alt="a lady"
    content={[
        <p>our legal resource</p>
    ]}
    />
    <PictureContent 
    picture="/images/kate.jpg"
    alt="a lady"
    content={[
        <p>our medical resource</p>
    ]}
    />
    <PictureContent 
    picture="/images/wall-witch.jpg"
    alt="a lady"
    content={[
        <p>the wall witch</p>
    ]}
    />
    </article>
  </Layout>
)