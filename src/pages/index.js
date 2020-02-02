import React from "react"
import Layout from "../components/layout"
import Infonub from "../components/infonub"
import AudioPlayer from "../components/audioPlayer"
export default () => (
  <Layout>
    <h1>Frasier Recap Show</h1>
    <div>
      <img
        src="/images/frasier-niles.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
    <h2 className="description">Jason has seen every episode of Fraiser too many times. 
    Will is watching it for the first time.</h2>
{/* 
    <div className="boxed">
        <p className="linkContent">
            This text is enclosed in a box.
        </p>
    </div> */}
<div className="infonub">
    <Infonub className="listenButton" title="Buzzsprout" content={[<p></p>]}/>

    <Infonub className="listenButton"  title="iTunes" content={[<p></p>]}/>

    <Infonub className="listenButton"  title="SoundCloud" content={[<p></p>]}/>
</div> 

{/* <img
        src="/images/frasier-cast-cover.jpg"
        alt="Group of pandas eating bamboo"
    
        
      /> */}

<Infonub  title="Latest Episode: Travels with Martin" content={[
<p>Can you go across the Canadian border without a passport? </p>,
<p>Should you film women while they sleep? </p> ,   
<p>How much is a Winebego? </p>
]}/>
<AudioPlayer />
<Infonub  title="This week's recipe"  picture="/images/pink-lady.jpg" content={[
   
<p><strong>Pink Lady</strong> </p>,
<p>Should you film women while they sleep? </p> ,   
<p>How much is a Winebego? </p>
]}/>

  </Layout>
)