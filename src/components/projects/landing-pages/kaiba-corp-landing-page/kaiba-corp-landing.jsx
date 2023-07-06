import React from 'react';
import './kaibaCorpLanding.css';


const KaibaCorpLandingPage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <div className="kaiba-corp-body">

      <div className='exodia-image'>
          <div className="kaiba-top-nav">
            <nav className="kaiba-nav-container1">		
                    <h2 className="kaiba-nav-logo">
                        <lord-icon src="https://cdn.lordicon.com/gqzfzudq.json"
                        trigger="hover" 
                        style={{
                              width:'50px',
                              height:'50px',
                              paddingLeft:'20px',
                              flexGrow:4
                              }} />
                        <a href="#">
                          Kaiba Corp
                        </a>
                    </h2>
                <ul className="kaiba-nav-links">
                    <li className="kaiba-nav-right">
                      <a href="#">
                        Home
                      </a>
                    </li>
                    <li className="kaiba-nav-right">
                      <a href="#">
                        About
                      </a>
                    </li>
                    <li className="kaiba-nav-right">
                      <a href="#">
                        Contact
                      </a>
                    </li>
                </ul>
                <ul className="kaiba-social-links">
                    <li className="kaiba-nav-right kaiba-nav-media">
                      <a href="#">
                        Facebook
                      </a>
                    </li>
                    <li className="kaiba-nav-right kaiba-nav-media">
                      <a href="#">
                        Twitter
                      </a>
                    </li>
                </ul>		
            </nav>
          </div>
          <div className='kaiba-welcome-message-container'>
              <div className='kaiba-welcome-message'>
                  <h1>
                    Kaiba Corp Invites the World's Strongest Duelists
                  </h1>
                  <h3>
                    For the 2nd ever Duelist Kingdom
                  </h3>
              </div>
          </div>
        </div>

        <div className='kaiba-next-section'>
          
          <div className='kaiba-self-portrait'>
            <div style={{
                       border:'1px solid transparent', 
                       padding:'0 32px',
                       boxShadow:'inset 0 0 100px white',
                       backdropFilter:'blur(10px)'
                       }}>
              <h2 style={{textAlign:'center'}}>
                I am Seto Kaiba. 
              </h2>
              <h2 style={{textAlign:'center'}}>
              The World's Leading Duelist.
              <br/>
                and CEO of KaibaCorp
              </h2>
            </div>
              <div className='kaiba-self-portait-border' 
                  style={{
                        width:'70%',
                        textAlign:'center',
                        borderBottom:'2px solid black',
                        boxShadow:'inset 0 0 5px white',
                        backdropFilter:'blur(20px)'
                        }}>
                <img src="/kaiba-corp-landing-images/seto-kaiba.png" 
                style={{ 
                      width:'70%',
                      filter:'drop-shadow(0 0 10px black)' 
                      }}/>
              </div>
          </div>

          <div className='kaiba-email-form'>
              <h3 style={{
                        width:'60%',
                        alignSelf:'center',
                        textShadow:'0 0 10px rgba(56, 113, 199)'
                        }}>
                Come See if you have what it takes to take me on!
              </h3>
              <input type='email' placeholder='Enter your email if you dare' 
              style={{
                    width:"50%",
                    alignSelf:"center"
                    }}/>
              <a href="" className='kaiba-email-form-button'
                style={{
                  color:'black',
                  border:'2px solid black',
                  borderRadius:'20px',
                  padding:'5px 20px',
                  width:'105px',
                  alignSelf:'center',
                  backgroundColor:'rgb(57, 57, 252)'
                  }}>
                Sign up Today
                </a>
          </div>
            
        </div>

        <footer>
          <p>Copyright Kaiba Corp</p>
          <p>Disclaimer: This page is meant for sample purposes only</p>
        </footer>
    </div>
  )
}

export default KaibaCorpLandingPage
