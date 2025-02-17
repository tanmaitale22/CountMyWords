import React from 'react'

function About(props) {
  return (
    <div className="" style={{color: props.mode ==='dark'?'white':'black'}}>
    <main className="max-w-6xl mx-auto p-6">
        <h1 className="aboutus" ><center>About Us</center></h1>
        <p className="aboutpara">
        Welcome to CountMyWords, the ultimate tool for counting words, 
        characters, and more! Whether you're a writer, student, blogger, 
        or social media enthusiast, our word counter helps you stay within 
        limits and improve your writing efficiency.
        </p>

        <h2 className="why">Why CountMyWords?</h2>
        <div className='whypara'>
          {[
            {
              title: "Instant Word and Character Count",
              description: "Get real-time results as you type",
            },
            {
              title: "Distraction-Free Writing",
              description: "A clean, minimal interface for seamless writing"
            },
            {
              title: "Free & Easy to Use",
              description: "No sign-ups or installations required",
            },
          ].map((feature,index)=> (
            <div key={index}>
                <h3 className="featuretitle">
                  {feature.title}
                </h3>
                <p className="fdescription">{feature.description}</p>
              </div>
          ))}

          <h2 className='mission'>Our Mission</h2>
          <p className='missionpara'>We aim to provide a fast, reliable, and user-friendly 
            word counting tool that helps users improve their writing, meet length requirements, 
            and stay productive. Whether you're crafting an article, working on an essay, or optimizing 
            content for SEO, our tool ensures accuracy and efficiency.</p>
        </div>
    </main>
</div>
  )
}

export default About
