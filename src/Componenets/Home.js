import React from "react"


const Home = (props) => {

  return (
    <>
    <div className="backgroundcolor-home" >
      <div className="HomeWrapper">
        <h3>Get a taste of what we are serving..</h3>
        <img className="home-picture" src="https://media.istockphoto.com/id/943449226/photo/concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious.jpg?s=2048x2048&w=is&k=20&c=trEQAX4_SPQmtVl_alnnqq2XKLw3RcR8YggmKEyRGuk=" alt="Floating Pizza"   />
      </div>
      <div className="HomeWrapperTwo" >
        <h3>Some of our happy costumers..</h3>
        <div className="picWrapper">
          <img className="Elon-Musk" src="https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg?v=1644936558" alt="Picture of Elon Musk" />
          <img className="The-Rock" src="https://i.guim.co.uk/img/media/542f0ba877f4546e1fb1eb720f297cb1f6839bf2/0_30_3586_2151/master/3586.jpg?width=1200&quality=85&auto=format&fit=max&s=1d709cd8a485f9c11e05181a9ff2fdaa" alt="Picture of Dwayne 'The Rock' Johnson" />
          <img className="Bill-Gates" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-09/bill-gates-mc-220915-f1f3f1.jpg" alt="Picture of Bill Gates" />
        </div>
      </div>
    </div>
    </>
  )


}



export default Home