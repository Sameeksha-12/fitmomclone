import "./Founder.css"
import React from 'react'
import Pritika from '../assets/pritika.png'

const founder = () => {
  return (
    <div className="about">
        <div className="first">
            <h1>About</h1>
        </div>
        <div className="second">
            <div className="second-left">
                <h1>Hi, I am Pritika,</h1>
                <h1>Founder of Fitmom.club</h1>
                <p>
                I am committed to achieving weight loss 
                through a balanced and nutritious diet that 
                does not ask you to sacrifice tasty food.
                 I have noticed 
                 that many women, like myself, often 
                 overlook their health while juggling 
                 the responsibilities of being a mother
                  and fulfilling various roles. However
                  , through my own experiences and 
                  interactions with other women, I have
                   realized the importance of addressing
                    our health concerns. After becoming 
                    a mom, I faced several health issues,
                     including postpartum weight gain, 
                     which prompted me to embark on a 
                     journey towards a healthier lifestyle
                     . Recognizing the changes my body 
                     underwent during pregnancy, I made 
                     a committed decision to regain my 
                     energy and vitality. This marked 
                     the beginning of my transformative 
                     journey in becoming a more energetic
                      version of my pre-pregnancy self. 
                      Thus began my transformative journey.

                </p>
                <h1>Are you ready to change your life forever?</h1>
                <p>oin the FitMom Club today and transform your 
                fitness journey forever! Our community of like-minded 
                moms provides the support and motivation you need to 
                achieve your goals. With access to our exclusive workouts,
                 meal plans, and expert guidance, you will be well on your 
                 way to becoming the healthiest version of yourself. 
                 Don’t wait any longer, sign up now, and start living 
                 your best life!
                 </p>
                 <a href="/Join">
                    <button className="button">Join Now</button>
                 </a>
            </div>
            <div className="second-right">
                <img className="pritika" src={Pritika}></img>
            </div>
        </div>
      
    </div>
  )
}

export default founder
