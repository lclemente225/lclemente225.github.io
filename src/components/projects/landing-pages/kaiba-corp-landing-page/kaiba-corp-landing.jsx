import React from 'react';
import './kaibaCorpLanding.css'


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
                        trigger="hover" style={{width:'50px',height:'50px',paddingLeft:'20px',flexGrow:4}}>
                        </lord-icon>
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
            q
        </div>
    </div>
  )
}

export default KaibaCorpLandingPage
