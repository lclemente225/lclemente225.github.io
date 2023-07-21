import React from 'react';
import './kaibaCorpLanding.css';
import Navbar from '../../../navbar/Navbar';


const KaibaCorpLandingPage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <div className="kaiba-corp-body">
      <Navbar />
          <div className="kaiba-top-nav">
            <nav className="kaiba-nav-container1">		
                    <h2 className="kaiba-nav-logo">
                        <lord-icon src="https://cdn.lordicon.com/gqzfzudq.json"
                        trigger="hover" 
                        style={{
                              width:'50px',
                              height:'50px',
                              padding:'0 20px',
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
              <div className='exodia-image'/>
              <div className='kaiba-welcome-message'>
                  <h2>
                    Kaiba Corp Invites the 
                  </h2>
                  <h1>
                     World's Strongest Duelists
                  </h1>
                  <h3>
                    For the 2nd ever Duelist Kingdom
                  </h3>
              </div>
          </div>

        <div>
        
        </div>                     

        <div className='kaiba-intro-section'>
          <div className='kaiba-self-portrait'>
            <div style={{
                       border:'1px solid transparent', 
                       backdropFilter:'blur(10px)',
                       width:'100%',
                       color:'white',
                       backgroundColor:'rgba(10,21,51, 0.5)'
                       }}>
              <h2 style={{textAlign:'center', fontSize:'40px',  margin:'30px 0 0 0'}}>
                I am <span className='kaiba-fullname'>Seto Kaiba</span>. 
              </h2>
              <h2 style={{textAlign:'center',  margin:'20px 0 30px 0'}}>
              The World's Leading Duelist.
              <br/>
                and CEO of KaibaCorp
              </h2>
            </div>
              <div className='kaiba-self-portait-border' 
                  style={{
                        width:'100%',
                        textAlign:'center',
                        borderBottom:'2px solid black',
                        boxShadow:'inset 0 0 5px white',
                        backgroundColor:'rgba(10,21,51, 0.5)'
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
                        width:'80%',
                        alignSelf:'center',
                        textAlign:'center',
                        color:'white',
                        marginTop:'50px',
                        fontSize:'30px'
                        }}>
                Come see if YOU have what it takes to take ME on!
              </h3>
              <input type='email' placeholder='Enter your email with your third rate deck' 
              style={{
                    width:"60%",
                    height:"50px",
                    alignSelf:"center"
                    }}/>
              <a href="" className='kaiba-email-form-button'
                style={{
                  color:'rgb(251, 255, 0)',
                  border:'2px solid black',
                  borderRadius:'20px',
                  padding:'10px 25px',
                  width:'105px',
                  alignSelf:'center',
                  margin:'0 0 40px 0',
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
