import React from 'react';
import "./PromotionalEmail1Styles.css";
import Navbar from '../../../navbar/Navbar';

const PromotionalEmail1 = ({PageState,isHomePage}) => {
  React.useEffect(() => {
        isHomePage(false);
         },[PageState])

  return (
    <>
      <Navbar/>
      <div className="first-promo-email-body" style={{backgroundColor: 'rgb(92, 92, 92)'}}>
          <div>
            <table cellSpacing={0} cellPadding={0} width="100%">
                <tbody>
                    <tr>
                        <td>
                            {/* <!--start of container--> */}
                            <table className="container" width={600} align="center" cellSpacing={0} cellPadding={0} border={0}>
                                {/* <!--start of header row--> */}
                                <tbody>
                                    <tr>
                                        <td style={{
                                                backgroundColor:'#fafafa'
                                                }}>
                                            {/* <!--Start Left column--> */}
                                            <table className="header-left" width="50%" align="left" cellSpacing={0} cellPadding={0} border={0} 
                                            style={{ 
                                                background: 'linear-gradient(90deg, rgba(101,255,253,1) 0, rgba(34,150,238,1) 100%)',
                                                padding: '18px 18px 70px 18px' 
                                                }}>
                                              <tbody>
                                                  <tr>
                                                    <td>
                                                      <i className="fa-solid fa-h top-logo" 
                                                          style={{ 
                                                                padding: '5px', 
                                                                border: '2px solid black',
                                                                backgroundColor: 'white', 
                                                                color: 'rgba(101,255,253,1)', 
                                                                margin: '2px', 
                                                                borderRadius: '5px' 
                                                                }}></i>
                                                      <h2 style={{ 
                                                                padding: '25px 0px', 
                                                                fontSize: '30px', 
                                                                fontWeight: 300
                                                                }}>
                                                        Get ready for
                                                      </h2>
                                                      <h1 style={{ 
                                                                fontSize: '80px', 
                                                                fontWeight: 600, 
                                                                lineHeight: 0, 
                                                                padding: 0,
                                                                margin: '10px 0px' 
                                                                }}>
                                                        Hero
                                                      </h1>
                                                      <p style={{ 
                                                              lineHeight: 1.5, 
                                                              fontStyle: 'italic', 
                                                              fontSize: '16px', 
                                                              padding: '34px 0px 50px' 
                                                              }}>
                                                        It seems like hundreds of new iWatch apps pop up every week, but which ones should you bother trying?
                                                      </p>
                                                      <a href="#" className="ghost-btn" 
                                                        style={{ 
                                                              fontSize: '12px', 
                                                              borderRadius: '3px', 
                                                              border: '2px solid white', 
                                                              textDecoration: 'none',
                                                                color: 'white', 
                                                                padding: '10px 15px', 
                                                                fontWeight: 600, 
                                                                textTransform: 'uppercase'
                                                                }}>
                                                        Learn More
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                          {/*  <!--End Left column-->
                                            <!--Start Right column--> */}
                                              <table className="header-right" width="50%" align="right" cellSpacing={0} cellPadding={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <table className="menu-table--container" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0} style={{ padding: '10px 0' }}>
                                                              <tbody>
                                                                <tr>
                                                                  <td style={{ fontFamily:"'Open Sans',sans-serif" }}>
                                                                    <table className="menu-table" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0}>
                                                                      <tbody>
                                                                          <tr>
                                                                            <td>
                                                                              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                                                <a href="#" style={{ fontSize: '14px', fontWeight:600, textDecoration: 'none', color: '#7d7d7d' }}>
                                                                                  About
                                                                                </a>
                                                                                <a href="#" style={{ fontSize: '14px', fontWeight:600, textDecoration: 'none', color: '#7d7d7d' }}>
                                                                                  Careers
                                                                                </a>
                                                                                <a href="#" style={{ fontSize: '14px', fontWeight:600, textDecoration: 'none', color: '#7d7d7d' }}>
                                                                                  Contact
                                                                                </a>
                                                                                </div> 
                                                                            </td>
                                                                          </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td align="center">
                                                            <img
                                                              src="https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4{0}3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80"
                                                              style={{ width: '300px', margin: '7px 0' }}
                                                              className="header-watch-image"
                                                              alt="Header Image"
                                                            />
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                            {/* <!--End Right column--> */}
                                        </td>
                                    </tr>
                                </tbody>
                              {/*   <!--End of header row-->
                                <!--Start of lets you row--> */}
                                <tbody>
                                  <tr>
                                      <td className="lets-you-row" style={{ backgroundColor: '#fafafa' }}>
                                          <h3 align="center" 
                                              style={{ 
                                                    fontFamily:"'Open Sans', sans-serif", 
                                                    fontSize: '1.6rem', 
                                                    fontWeight: 300, 
                                                    textTransform: 'uppercase' 
                                                    }}>
                                            Hero lets you...
                                          </h3>
                                          {/* <!--Start of Left column--> */}
                                          <table className="lets-you-row--left-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0} 
                                          style={{ padding: '18px 18px 70px 25px' }}>
                                            <tbody>
                                                <tr>
                                                  <td>
                                                    <table className="title-icon" width="100%" cellSpacing={0} cellPadding={0} border={0} 
                                                        style={{ padding: '18px 10px' }}>
                                                        <tbody>
                                                          <tr style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                                            <td>
                                                              <i className="fa-solid fa-bell"></i>
                                                            </td>
                                                            <td style={{ 
                                                                      fontWeight: 600, 
                                                                      color: '#333333', 
                                                                      padding:0, 
                                                                      textTransform: 'uppercase', 
                                                                      fontSize: '14px' 
                                                                      }}>
                                                              Notify
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                                      Lorem ipsum cras notificator
                                                      </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <a href="#" 
                                                        style={{ 
                                                              fontWeight: 600, 
                                                              color: '#2792ec', 
                                                              fontSize: '14px', 
                                                              textDecoration: 'none' 
                                                              }}>
                                                      Learn More
                                                      </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                          </table>
                                        {/*   <!--End of Left Column-->
                                          <!--Start of Middle column--> */}
                                          <table className="lets-you-row--middle-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0} 
                                          style={{ padding: '18px 18px 70px 30px' }}>
                                            <tbody>
                                                <tr>
                                                  <td>
                                                    <table className="title-icon" width="100%" cellSpacing={0} cellPadding={0} border={0} 
                                                      style={{ padding: '18px 10px' }}>
                                                      <tbody>
                                                        <tr style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                                          <td>
                                                            <i className="fa-solid fa-share-nodes"></i>
                                                          </td>
                                                          <td style={{ 
                                                                    fontWeight: 600, 
                                                                    color: '#333333', 
                                                                    padding: 0, 
                                                                    textTransform: 'uppercase', 
                                                                    fontSize: 14 + 'px' 
                                                                    }}>
                                                            Share
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                                      Lorem ipsum cras notificator
                                                      </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <a href="#" 
                                                          style={{ 
                                                                fontWeight: 600, 
                                                                color: '#2792ec', 
                                                                fontSize: '14px', 
                                                                textDecoration: 'none' 
                                                                }}
                                                                >
                                                        Learn More
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        {/*  <!--End of Middle Column-->
                                          <!--Start of Right column--> */}
                                      <table className="lets-you-row--right-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0} 
                                      style={{ padding: '18px 18px 70px 35px' }}>
                                        <tbody>
                                            <tr>
                                              <td>
                                                <table className="title-icon" width="100%" cellSpacing={0} cellPadding={0} border={0} 
                                                  style={{ padding: '18px 10px' }}>
                                                  <tbody>
                                                    <tr style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                                      <td>
                                                        <i className="fa-solid fa-wifi"></i>
                                                      </td>
                                                      <td style={{ 
                                                                fontWeight: 600, 
                                                                color: '#333333', 
                                                                padding: 0, 
                                                                textTransform: 'uppercase', 
                                                                fontSize: '14px' 
                                                                }}>
                                                        Connect
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Lorem ipsum cras notificator</p>
                                              </td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <a href="#" 
                                                style={{ 
                                                  fontWeight: 600, 
                                                  color: '#2792ec', 
                                                  fontSize: '14px', 
                                                  textDecoration: 'none' 
                                                  }}>Learn More</a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                          {/* <!--End of Right Column--> */}
                                      </td>
                                  </tr>
                                </tbody>
                              {/*  <!--End of description row-->
                                <!--Start of advance row--> */}
                                <tbody>
                                  <tr>
                                      <td style={{backgroundColor:'white'}}>
                                          <table className="advance-table-title" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div style={{ display: 'flex', justifyContent: 'center', width:'100%' }}>
                                                    <div className="pink-large-rectangle" 
                                                        style={{ 
                                                              backgroundColor: 'rgb(253, 169, 169)', 
                                                              width: '460px', 
                                                              height: '200px', 
                                                              marginTop: '50px' 
                                                              }} border={0} align="center">
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              </tbody>
                                              <tbody>
                                              <tr>
                                                <td align="center">
                                                  <p 
                                                      className="most-advanced-app-header-text"
                                                      style={{ 
                                                            width: 'fit-content', 
                                                            padding:'0 50px',
                                                            fontFamily: "'Open Sans', sans-serif", 
                                                            fontSize: '27px', 
                                                            fontWeight: 300, 
                                                            marginTop: '60px' 
                                                            }}>
                                                    World's <strong>most Advanced App </strong>With High-Tech Solutions
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        
                                          <table className="advance-table--left-column left-column" width="50%" align="left" cellSpacing={0} cellPadding={0} border={0} 
                                          style={{ padding: '18px 18px 70px 18px' }}>
                                            <tbody>
                                              <tr>
                                                <td style={{ padding: '10px' }}>
                                                  <p style={{ 
                                                          width: '100%', 
                                                          fontFamily: "'Open Sans', sans-serif", 
                                                          fontSize: '12px', 
                                                          fontWeight: 300, 
                                                          lineHeight: 1.7, 
                                                          padding:'0 20px' }}>
                                                    The Strong museum has collected more than 55,000 video games and related artifacts from the history of gaming.
                                                  </p>
                                                </td>
                                              </tr>
                                              </tbody>
                                              <tbody>
                                              <tr>
                                                <td align="right" className="apple-store-button">
                                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJtNfMqP8grlP9pGYqq1z9JBwhCIwLQ3uiA&usqp=CAU" style={{ width: '100px', border: '1px solid black', borderRadius: '5px' }} />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>

                                          <table className="advance-table--right-column right-column" width="50%" align="right" cellSpacing={0} cellPadding={0} border={0}
                                          style={{ padding: '18px 18px 70px 18px' }}>
                                              <tbody>
                                              <tr>
                                                <td style={{ padding: '10px' }}>
                                                  <p style={{ 
                                                          width: '100%', 
                                                          fontFamily: "'Open Sans', sans-serif", 
                                                          fontSize: '12px', 
                                                          fontWeight: 300, 
                                                          lineHeight: 1.7, 
                                                          padding:'0 20px' 
                                                          }}>
                                                    Remote Mouse lets you use your iPhone, Android or Windows Phone as a touchpad to control your onscreen cursor in a pinch.
                                                  </p>
                                                </td>
                                              </tr>
                                              </tbody>
                                              <tbody>
                                              <tr>
                                                <td className="google-play-button">
                                                  <img src="https://cdn.freebiesupply.com/logos/large/2x/get-it-on-google-play-logo-png-transparent.png" 
                                                      style={{ 
                                                        width: '100px', 
                                                        border: '1px solid black',
                                                        borderRadius: '5px', 
                                                        marginTop: '1px', 
                                                        padding:'0 5px' 
                                                        }} />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                </tbody>
                                
                              {/*   <!--End of advance row-->
                                <!--Start of one solution row--> */}
                                <tbody>
                                  <tr>
                                      <td style={{backgroundColor:'white'}}>
                                        <table className="one-solution-table" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0} 
                                        style={{ 
                                              padding: '18px 18px 20px 18px', 
                                              backgroundColor: '#141414', 
                                              marginBottom: '20px' 
                                              }}>
                                          <tbody>
                                            <tr>
                                              <td style={{ width: '100%' }}>
                                                <h1 style={{ 
                                                          fontFamily: "'Open Sans', sans-serif", 
                                                          fontSize: '20px', 
                                                          fontWeight: 300, 
                                                          color: 'white', 
                                                          textAlign: 'center' 
                                                          }}>
                                                  One App,<span style={{ fontWeight: 500 }}> One Solution</span>
                                                </h1>
                                              </td>
                                            </tr>
                                          </tbody>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <div style={{ 
                                                      color: 'white', 
                                                      fontFamily: "'Open Sans', sans-serif", 
                                                      fontSize: '12px', 
                                                      marginTop: '20px', 
                                                      display: 'flex', 
                                                      justifyContent: 'space-around' 
                                                      }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
                                                            <i className="fa-solid fa-location-dot"></i>
                                                            <span style={{ padding: '20px 0' }}>Locations</span>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
                                                            <i className="fa-solid fa-microphone"></i>
                                                            <span style={{ padding: '20px 0' }}>Voice-Over</span>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
                                                            <i className="fa-regular fa-calendar"></i>
                                                            <span style={{ padding: '20px 0' }}>Calendar</span>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
                                                            <i className="fa-regular fa-heart"></i>
                                                            <span style={{ padding: '20px 0' }}>Heart Rate</span>
                                                        </div>
                                                  </div>
                                                </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                  </tr>
                                </tbody>
                                {/*  <!--End of one solution row-->
                                  <!--Start of join together row--> */}
                                <tbody>
                                  <tr>
                                      <td>
                                        <table className="join-together-table" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0} 
                                        style={{ 
                                              padding: '18px 18px 70px 18px', 
                                              backgroundColor: 'white', 
                                              fontFamily: "'Open Sans', sans-serif" 
                                              }}>
                                            <tbody>
                                              <tr>
                                                  <td align="center">
                                                      <p>Features All Joined Together in One App</p>
                                                  </td>
                                              </tr>
                                            </tbody>
                                            <tbody>
                                              <tr>
                                                  <td>
                                                      <table className="join-together--left-column left-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0}>
                                                        <tbody>
                                                          <tr>
                                                            <td align="center">
                                                              <div className="pink-square" 
                                                              style={{ 
                                                                    width: '100px', 
                                                                    height: '100px', 
                                                                    backgroundColor: 'pink', 
                                                                    borderRadius: '10px',
                                                                    margin: '15px 0' 
                                                                    }}>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                        <tbody>
                                                          <tr>
                                                            <td align="center">
                                                              <p style={{ fontWeight: 600, fontSize: '14px' }}>
                                                                SYNC
                                                                </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                        <tbody>
                                                          <tr>
                                                            <td align="center">
                                                              <p style={{ 
                                                                      fontWeight: 400, 
                                                                      fontSize: '13px', 
                                                                      lineHeight: 1.6, 
                                                                      color: '#3d3d3d',
                                                                      marginTop: '-1px' 
                                                                      }}>
                                                                Computer manufacturer Lenovo is getting flak
                                                                </p>
                                                            </td>
                                                          </tr>
                                                        </tbody> 
                                                        <tbody>
                                                          <tr>
                                                            <td align="center">
                                                              <a href="#" style={{ textDecoration: 'none', fontSize: '12px' }}>
                                                                Learn More
                                                                </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>

                                                      <table className="join-together--middle-column middle-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <div className="pink-square" 
                                                                    style={{ 
                                                                          width: '100px', 
                                                                          height: '100px', 
                                                                          backgroundColor: 'pink', 
                                                                          borderRadius: '10px', 
                                                                          margin: '15px 0'}}>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                          <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <p style={{ fontWeight: 600, fontSize: '14px' }}>
                                                                        SHARE
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                          <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <p style={{ 
                                                                              fontWeight: 400, 
                                                                              fontSize: '13px', 
                                                                              lineHeight: 1.6, 
                                                                              color: '#3d3d3d', 
                                                                              marginTop: '-1px' 
                                                                              }}>
                                                                        Hero is a mobile payment system that could..
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                      </table>

                                                      <table className="join-together--right-column right-column" width="33.33%" align="left" cellSpacing={0} cellPadding={0} border={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <div className="pink-square" 
                                                                    style={{ 
                                                                          width: '100px', 
                                                                          height: '100px', 
                                                                          backgroundColor: 'pink', 
                                                                          borderRadius: '10px', 
                                                                          margin: '15px 0' }}>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                          <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <p style={{ fontWeight: 600, fontSize: '14px' }}>
                                                                        STATS
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                          <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <p style={{ 
                                                                            fontWeight: 400, 
                                                                            fontSize: '13px', 
                                                                            lineHeight: 1.6, 
                                                                            color: '#3d3d3d', 
                                                                            marginTop: '-1px' 
                                                                            }}>
                                                                        Gemalto says it's looking into a report that it's
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                          <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <a href="#" style={{ textDecoration: 'none', fontSize: '12px' }}>
                                                                        Learn More
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                </tbody>
                                  {/* <!--End of join together row-->
                                  <!--Start of detail row--> */}
                                <tbody>
                                  <tr>
                                      <td>
                                          <table className="detail-table" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0} 
                                          style={{backgroundColor: '#fafafa',fontFamily: "'Open Sans', sans-serif"}}>
                                            <tbody>
                                            {/*  <!--First Row--> */}
                                                <tr> 
                                                    <td>
                                                        <table className="one-row-table" width="100%" cellSpacing={0} cellPadding={0} border={0}
                                                        style={{paddingTop:'40px',paddingLeft:'50px'}}>
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      {/* <!--Start of a column--> */}
                                                                      <table  className="one-row--left-column-top left-column" align="left" width="50%" cellSpacing={0} cellPadding={0} border={0} >
                                                                          <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <i className="fa-solid fa-mobile-screen-button"
                                                                                                  style={{padding:'10px 12px',borderRadius: '100%',backgroundColor: 'white'}}>
                                                                                                </i>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p style={{fontSize:'9px',textTransform:'uppercase'}}>
                                                                                                    Responsive Layout
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr> 
                                                                          </tbody>
                                                                          <tbody>
                                                                            <tr>
                                                                                <td style={{padding:'0 40px'}}>
                                                                                    <p style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                        Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.
                                                                                    </p>
                                                                                </td>
                                                                            </tr> 
                                                                          </tbody>
                                                                      </table>
                                                                      {/* <!--End of a column-->
                                                                      <!--Start of a column--> */}
                                                                      <table className="one-row--right-column-top right-column" width="50%" cellSpacing={0} cellPadding={0} border={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                      <tbody> 
                                                                                        <tr>
                                                                                            <td>
                                                                                                <i className="fa-regular fa-eye"
                                                                                                style={{padding:'10px',borderRadius:'100%',backgroundColor: 'white'}}>
                                                                                                </i>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p style={{fontSize:'9px',textTransform:'uppercase'}}>
                                                                                                    Retina Ready
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                      </tbody> 
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                          </tbody>
                                                                          <tbody>
                                                                            <tr>
                                                                                <td style={{padding:'0 40px'}}>
                                                                                    <p style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                        The decision precluded a more aggressive pre-rush hour response to help.
                                                                                    </p>
                                                                                </td>
                                                                            </tr>  
                                                                        </tbody>
                                                                      </table>
                                                                    {/*  <!--End of a column--> */}
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                              </tbody>
                                              {/*  <!--End First Row-->
                                                <!--Start Second Row--> */}
                                              <tbody>
                                                <tr> 
                                                    <td>
                                                        <table className="one-row-table" width="100%" cellSpacing={0} cellPadding={0} border={0}
                                                        style={{paddingTop:'20px',paddingLeft:'50px'}}>
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      {/* <!--Start of a column--> */}
                                                                      <table  className="one-row--left-column-middle left-column" align="left" width="50%" cellSpacing={0} cellPadding={0} border={0} >
                                                                          <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <i className="fa-solid fa-check"
                                                                                                style={{padding:'10px 12px',borderRadius:'100%', backgroundColor:'white'}}>
                                                                                                </i>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p style={{fontSize:'9px',textTransform:'uppercase'}}>
                                                                                                    Various Skins
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                          </tbody>
                                                                          <tbody>
                                                                            <tr>
                                                                                <td style={{padding:'0 40px'}}>
                                                                                    <p style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                        Research shows that women politicians are considered more ethical than.
                                                                                    </p>
                                                                                </td>
                                                                            </tr> 
                                                                          </tbody>
                                                                      </table>
                                                                    {/*   <!--End of a column-->
                                                                      <!--Start of a column--> */}
                                                                      <table className="one-row--right-column-middle right-column"  width="50%" cellSpacing={0} cellPadding={0} border={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                      <tbody> 
                                                                                        <tr>
                                                                                            <td>
                                                                                                <i className="fa-solid fa-gear"
                                                                                                    style={{ padding: '10px', borderRadius: '100%', backgroundColor: 'white' }}>
                                                                                                </i>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p style={{ fontSize: '9px', textTransform: 'uppercase' }}>
                                                                                                Great Performance
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                      </tbody> 
                                                                                    </table>
                                                                                </td>
                                                                            </tr>    
                                                                          </tbody>
                                                                          <tbody>        
                                                                            <tr>
                                                                                <td style={{padding:'0 50px'}}>
                                                                                    <p style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                        Asian stocks post modest gains Tyes.,oil rises on Greek debt talks.
                                                                                    </p>
                                                                                </td>
                                                                            </tr>  
                                                                          </tbody>
                                                                      </table>
                                                                      {/* <!--End of a column--> */}
                                                                  </td>
                                                              </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                              </tbody>
                                              {/*  <!--End Second Row-->
                                                <!--Third Row--> */}
                                              <tbody>
                                                <tr> 
                                                    <td style={{ paddingBottom: '50px' }}>
                                                        <table className="one-row-table" width="100%"  cellSpacing={0} cellPadding={0} border={0}
                                                        style={{ paddingTop: '20px', paddingLeft: '50px' }}>
                                                            <tbody>
                                                              <tr>
                                                                  <td>
                                                                      {/* <!--Start of a column--> */}
                                                                      <table className="one-row--left-column-bottom left-column" align="left" width="50%"  cellSpacing={0} cellPadding={0} border={0} >
                                                                          <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                      <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <i className="fa-solid fa-bars"
                                                                                                style={{ padding: '10px', borderRadius: '100%', backgroundColor: 'white' }}>
                                                                                                </i>
                                                                                            </td>
                                                                                            <td>
                                                                                                <p style={{ fontSize: '9px', textTransform: 'uppercase' }}>
                                                                                                    User Friendly Menus
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                      </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                          </tbody>
                                                                          <tbody>
                                                                            <tr>
                                                                                <td style={{padding:'0 40px'}}>
                                                                                    <p  style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                        Regional cooperation can bring countries of a region close together and can reduce.
                                                                                    </p>
                                                                                </td>
                                                                            </tr> 
                                                                          </tbody>
                                                                      </table>
                                                                    {/*  <!--End of a column-->
                                                                      <!--Start of a column--> */}
                                                                      <table className="one-row--right-column-bottom right-column" width="50%" cellSpacing={0} cellPadding={0} border={0}>
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td>
                                                                                      <table className="icon-table" width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                                                        <tbody> 
                                                                                          <tr>
                                                                                              <td> 
                                                                                                  <i className="fa-solid fa-share-nodes"
                                                                                                  style={{ padding: '10px', borderRadius: '100%', backgroundColor: 'white' }}>
                                                                                                  </i>

                                                                                              </td>
                                                                                              <td>
                                                                                                  <p style={{ fontSize: '9px', textTransform: 'uppercase',paddingLeft:'15px' }}>
                                                                                                      Social Share
                                                                                                  </p>

                                                                                              </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                            </tbody>
                                                                            <tbody>
                                                                              <tr>
                                                                                  <td style={{padding:'0 40px'}}>
                                                                                      <p style={{fontSize:'11px',color:'#7f8887',lineHeight: 1.5}}>
                                                                                          Muriel Bowser's administration says move is unrelated to charges that encryption.
                                                                                      </p>
                                                                                  </td>
                                                                              </tr> 
                                                                          </tbody>
                                                                      </table>
                                                                      {/* <!--End of a column--> */}
                                                                  </td>
                                                              </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                              {/* <!--End Third Row--> */}
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                </tbody>
                                  {/* <!--End of detail row-->
                                  <!--Start of Interest row--> */}
                                <tbody>
                                  <tr>
                                      <td>
                                          <table className="interest-table" width="100%" align="center" cellSpacing={0} cellPadding={0} border={0} 
                                              style={{ 
                                                    color: 'white', 
                                                    background: 'linear-gradient(135deg, rgba(101,255,253,1) 0, rgba(34,150,238,1) 90%)', 
                                                    fontFamily: 'Open-Sans, sans-serif', 
                                                    padding: '65px 0' 
                                                    }}>
                                              <tbody>
                                                  <tr>
                                                      <td align="center">
                                                          <h2 style={{fontSize:'28px',fontWeight:300,fontFamily:'Open Sans, sans-serif'}}>
                                                              Interested in our App?
                                                          </h2>
                                                      </td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                      <td align="center" border="1">
                                                          <p style={{padding:'0 100px',lineHeight:1.5,fontSize:'14px',fontStyle: 'italic'}}>
                                                              Muriel Bowser's administration says move is unrelated to charges that encryption cause failures in Metro.
                                                          </p>
                                                      </td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                      <td align="center" style={{padding:'30px 0'}}>
                                                          <a href="#" className="ghost-btn" 
                                                            style={{ 
                                                              fontSize: '12px', 
                                                              borderRadius: '3px', 
                                                              border: '2px solid white', 
                                                              textDecoration: 'none', 
                                                              color: 'white', 
                                                              padding: '10px 15px', 
                                                              fontWeight: 600, 
                                                              textTransform: 'uppercase' 
                                                              }}>
                                                          Request a Quote
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                </tbody>
                                  {/*  <!--End of Interest row-->
                                  <!--Start of Footer row--> */}
                                <tbody>
                                  <tr>
                                      <td>
                                          <table width="100%" className="footer-table" 
                                            style={{ 
                                                  color: 'black', 
                                                  backgroundColor: '#fafafa', 
                                                  fontFamily: "'Open-Sans', sans-serif", 
                                                  padding: '20px 0' 
                                                  }}>
                                              <tbody>
                                                  <tr>
                                                      <td align="center">
                                                          <p style={{fontWeight:600,fontStyle:'oblique'}}>
                                                            HERO
                                                          </p>
                                                      </td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                      <td align="center">
                                                        <table width="50%" cellSpacing={0} align="center" cellPadding={0} border={0}>
                                                          <tbody>
                                                            <tr align="center">
                                                              <td>
                                                                <img src="/newsletter-assets/instagram-icon.png" alt="instagram" 
                                                                className="promotional-social-links"
                                                                style={{ width: '32px' }} />
                                                              </td>
                                                              <td>
                                                                <img src="/newsletter-assets/facebook-icon.png" alt="facebook" 
                                                                className="promotional-social-links"
                                                                style={{ width: '32px' }} />
                                                              </td>
                                                              <td>
                                                                <img src="/newsletter-assets/twitter-icon.png" alt="twitter" 
                                                                className="promotional-social-links"
                                                                style={{ width: '32px' }} />
                                                              </td>
                                                              <td>
                                                                <img src="/newsletter-assets/snapchat-icon.png" alt="snapchat" 
                                                                className="promotional-social-links"
                                                                style={{ width: '32px' }} />
                                                              </td>
                                                              <td>
                                                                <img src="/newsletter-assets/youtube-icon.png" alt="youtube" 
                                                                className="promotional-social-links"
                                                                style={{ width: '32px' }} />
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                  </tr>
                                                </tbody>
                                                <tbody>
                                                  <tr>
                                                      <td align="center">
                                                          <p style={{fontSize:'8px'}}>20XX All rights Reserved. Your company Here. 
                                                          Is your inbox overflowing? <a href="#" 
                                                          style={{color:'rgb(59, 59, 196)'}}>Unsubscribe</a>
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>  
                                {/*  <!--End of Footer row--> */}
                                </tbody>
                            </table> 
                            {/* <!--End container table-->     */}              
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    </>
  )
}

export default PromotionalEmail1
