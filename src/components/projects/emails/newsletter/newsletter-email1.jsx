import React from 'react';
import Navbar from '../../../navbar/Navbar';

const FirstNewsletterEmail = ({isHomePage}) => {
  isHomePage(false);
  return (
    <>
    <Navbar/>
    <div className="first-newsletter-email-body" style={{ backgroundColor: 'black' }}>
      {/* Reference Email https://emailtuna.com/fashionnova.com/2284609 */}
      <table width="100%" cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td>
              <table className="container" align="center" border={0} width={600} cellSpacing={0} cellPadding={0}
                style={{ backgroundColor: 'white', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                {/* Start Top Header Logo row */}
                <tbody>
                  <tr>
                    <td>
                      <img src="/newsletter-assets/fashion-nova-top-logo.png" alt="fashion-nova-logo" style={{ height: '50px' }} />
                    </td>
                  </tr>
                </tbody>
                {/* End Top Header Logo row */}
                {/* Start Top Nav row */}
                <tbody>
                  <tr>
                    <td>
                      <table className="container" align="center" border={0} width="60%" cellSpacing={0} cellPadding={0}
                        style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', paddingBottom: '20px' }}>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: '15px' }}>
                                New
                              </a>
                            </td>
                            <td>
                              <span>|</span>
                            </td>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: '15px' }}>
                                Dresses
                              </a>
                            </td>
                            <td>
                              <span>|</span>
                            </td>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: '15px' }}>
                                Jeans
                              </a>
                            </td>
                            <td>
                              <span>|</span>
                            </td>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'red', fontWeight: 700, fontSize: '15px' }}>
                                Sale
                              </a>
                            </td>
                            <td>
                              <span>|</span>
                            </td>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: '15px' }}>
                                Curve
                              </a>
                            </td>
                            <td>
                              <span>|</span>
                            </td>
                            <td>
                              <a href="#" style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'black', fontWeight: 700, fontSize: '15px' }}>
                                Men
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {/* End Top Nav row */}
                {/* Start FreeShipping row */}
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border={0} width="100%" cellSpacing={0} cellPadding={0}
                        style={{ backgroundColor: 'rgb(231, 232, 234)' }}>
                        <tbody>
                          <tr>
                            <td>
                              <p style={{ textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', color: 'black', fontWeight: 700, fontSize: '17px', letterSpacing: '1px', lineHeight: '0' }}>
                                Free Shipping for Orders Over $75
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {/* End FreeShipping row */}
                {/* Start Veterans Day Row */}
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="/newsletter-assets/veterans-day-img.jpg" alt="Veterans Day Sale 40% Off SiteWide" style={{ width: '100%' }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* End Veterans Day Row */}
                {/* Start Curve Row */}
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="/newsletter-assets/fashion-nova-curve.jpg" alt="Curve Sale 40% Off SiteWide" style={{ width: '100%' }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* End Curve Row */}
                {/* Start Men Row */}
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="/newsletter-assets/fashion-nova-men.jpg" alt="Men Sale 40% Off SiteWide" style={{ width: '100%' }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* End Men Row */}
                {/* Start Men Row */}
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="/newsletter-assets/quadpay-info.jpg" alt="QuadPay Info" style={{ width: '100%' }} />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* End Men Row */}
                {/* Start Download Row */}
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td>
                              <p style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textTransform: 'uppercase', fontWeight: 700, textAlign: 'center', letterSpacing: '1px', lineHeight: '0' }}>
                                Download the app
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0} style={{ marginBottom: '15px' }}>
                        <tbody>
                          <tr>
                            <td>
                              <img src="/newsletter-assets/apple-app-store-button.jpg" alt="App Store Button" align="right" style={{ height: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/google-play-button.jpg" alt="Google Play Button" align="left" style={{ height: '32px' }} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {/* End Download Row */}
                {/* Start Get Texts Row */}
                <tbody>
                  <tr>
                    <td>
                      <img src="/newsletter-assets/get-text-alerts.jpg" alt="Get Text Alerts" width="100%" />
                    </td>
                  </tr>
                </tbody>
                {/* End Get Texts Row */}
                {/* Start Socials Row */}
                <tbody>
                  <tr>
                    <td>
                      <table width="50%" cellSpacing={0} align="center" cellPadding={0} border={0}>
                        <tbody>
                          <tr align="center">
                            <td>
                              <img src="/newsletter-assets/instagram-icon.png" alt="instagram" style={{ width: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/facebook-icon.png" alt="facebook" style={{ width: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/twitter-icon.png" alt="twitter" style={{ width: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/snapchat-icon.png" alt="snapchat" style={{ width: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/youtube-icon.png" alt="youtube" style={{ width: '32px' }} />
                            </td>
                            <td>
                              <img src="/newsletter-assets/referral-price.jpg" alt="refer a friend" style={{ width: '155px', height: '32px' }} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {/* End Socials Row */}
                {/* Start Footer Row */}
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" cellSpacing={0} align="center" cellPadding={0} border={0} style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontWeight: 500, fontSize: '10px', textAlign: 'center', lineHeight: '1.3', backgroundColor: 'rgb(231, 232, 234)', padding: '0 25px', color: 'rgb(85, 85, 117)' }}>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                Questions? Reference our FAQ{' '}
                                <a href="#" style={{ fontWeight: 700, textDecoration: 'none', color: 'rgba(85, 85, 117, 0.733)' }}>
                                  here.
                                </a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                You received this message because you're registered or accepted our invitation to receive emails from Fashion Nova, or you've made a purchase from fashionnova.com
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              SALUTE20 - Buy 2 items, get 20% off, SALUTE30 - Buy 3 items, get 30% off, SALUTE40 - Buy 4 items or more, get 40% off are valid sitewide with exclusions. See product descriptions on individual product pages for items excluded from this promotion. Offer valid while supplies last. Sale items are FINAL SALE. Fashion Nova, Inc. reserves the right to modify or cancel this promotion at any time without notice. Offer excludes gift cards. Offer not valid at Fashion Nova retail locations. Apply discount code at checkout. Taxes, shipping and handling fees are excluded from any discount. Cannot be combined with other discount codes and offers.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                By signing up via text, you agree to receive recurring automated marketing text messages from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Msg & data rates may apply. View{' '}
                                <a href="#" style={{ fontWeight: 700, textDecoration: 'none', color: 'rgba(85, 85, 117, 0.733)' }}>
                                  Terms & Privacy.
                                </a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                Unsubscribe at any time by texting STOP. View{' '}
                                <a href="#" style={{ fontWeight: 700, textDecoration: 'none', color: 'rgba(85, 85, 117, 0.733)' }}>
                                  Fashion Nova's Privacy Policy.
                                </a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                Fashion Nova, 2801 East 46th St., Vernon, CA 90058
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {/* End Footer Row */}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default FirstNewsletterEmail
