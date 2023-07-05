import React from 'react';
import Navbar from '../../../navbar/Navbar';

const FirstTransactionalEmail = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <>
    <Navbar />
    <div className="first-transactional-email-body" style={{ backgroundColor: 'rgb(92, 92, 92)' }}>
        <table cellSpacing={0} cellPadding={0} width="100%" border={0} >
            <tbody>
                <tr>
                    <td>
                        <table className="container" align="center" cellSpacing={0} cellPadding={0} width={600} 
                        style={{backgroundColor:'white'}}>
                            <tbody>
                            {/* <!--Start of header row--> */}
                                    <tr>
                                        <td className="header-row" >
                                                <img src="/order-confirm-assets/top-banner.png" 
                                                style={{
                                                    width:'400px',
                                                    }}/>
                                        </td>
                                    </tr>
                            </tbody>
                                    {/* <!--End of header row--> */}
                                    {/* <!--Start of Thank you row--> */}
                            <tbody>
                                    <tr>
                                        <td className="thank-you-row" 
                                        style={{
                                            fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                            padding:'20px 30px 60px 30px'
                                            }}>
                                            <table className="thank-you-message" align="center" cellSpacing={0} cellPadding={0} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                        <h1 
                                                        style={{textTransform:'uppercase',
                                                            color:'red',
                                                            fontSize:'50px',
                                                            fontWeight:900,
                                                            lineHeight:1,
                                                            paddingRight:'50px'
                                                            }}>
                                                            Thanks for your order, Lawrence
                                                        </h1>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td width="100%">
                                                                <img 
                                                                style={{width:'100%'}}
                                                                alt="thank you sticker image"
                                                                src="/order-confirm-assets/bbqchicken-pic.png"/>
                                                            
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                The estimated delivery time for your order is 12:56 PM - 1:11 PM. Track your order in the DoorDash app or website.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td style={{paddingTop:'30px'}}>
                                                            <a href="#" 
                                                            style={{
                                                                backgroundColor:'red',
                                                                borderRadius:'25px',
                                                                color:'white',
                                                                padding:'12px 25px',
                                                                fontStyle:'bold',
                                                                textDecoration: 'none',
                                                                fontWeight:700
                                                                }}>
                                                                Track Your Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                                {/* <!--End of Thank You Row-->
                                <!--Start of info row--> */}
                                <tbody>
                                    <tr>
                                        <td className="info-you-row" align="center" cellSpacing={0} cellPadding={0} width="100%"
                                            style={{
                                                fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                                padding:'20px 40px',
                                                border:'23px solid red'
                                                }}>
                                            <table align="center" cellSpacing={0} cellPadding={0} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{lineHeight:1.5}}>
                                                                            Paid with Visa Ending in xxxx and/or credits
                                                                            <br/>bb.q Chicken  
                                                                            <br/>
                                                                <strong>Total: $34.80</strong>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                <strong 
                                                                style={{
                                                                        texttransform: 'uppercase',
                                                                        fontweight:800,
                                                                        fontsize:'25px'
                                                                        }}>
                                                                    Your Receipt
                                                                </strong>
                                                                <br/>1234 Your Address, San Jose, CA 59283, USA
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <hr 
                                                            style={{
                                                                width:'430px',
                                                                position:'absolute',
                                                                borderColor: 'rgb(180, 180, 180, 0.1)'
                                                                }}/>
                                                            <p style={{paddingtop:'20px'}}><strong>Estimated Total</strong></p>
                                                        </td>
                                                        <td>
                                                            <p><strong>$34.80</strong></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{
                                                                    fontSize:'14px',
                                                                    color:'rgba(31, 31, 31, 0.8)'
                                                                    }}>
                                                                This restaurant pays a commission to DoorDash on this order
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td style={{
                                                                lineheight: 1.5,
                                                                paddingBottom:'25px'
                                                                }}> 
                                                            <a href="#" style={{textdecoration:'none',color:'red'}}>
                                                                View Full Receipt
                                                            </a>
                                                            <br/>
                                                            <a href="#" style={{textdecoration:'none',color:'red'}}>
                                                                Get Order Help
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                    {/* <!--End of info row-->
                                    <!--Start of Review row--> */}
                                <tbody>
                                    <tr>
                                        <td cellSpacing={0} cellPadding={0} width="100%" 
                                        style={{
                                            fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                            padding:'15px 15px 25px'
                                            }}>
                                            <table align="left" cellSpacing={0} cellPadding={0} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style={{paddingLeft:'50px'}}>
                                                            <h4 
                                                                style={{
                                                                    textTransform:'uppercase',
                                                                    fontweight:800,
                                                                    fontsize:'25px'
                                                                    }}>
                                                                Review This Store
                                                            </h4>
                                                            
                                                            <p style={{marginTop:'-20px'}}>
                                                                Share your thoughts on your order with fellow customers and bb.q Chicken.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr style={{
                                                            display:'flex',
                                                            justifyContent:'flex-start',
                                                            paddingLeft:'60px'
                                                            }}>
                                                        <td>
                                                            <img className="review-star" src="/order-confirm-assets/star-empty.png" alt="review-star"
                                                                style={{width:'50px'}}/>
                                                        </td>
                                                        <td>
                                                            <img className="review-star" src="/order-confirm-assets/star-empty.png" alt="review-star"
                                                                style={{paddingLeft:'13px',width:'50px'}}/>
                                                        </td>
                                                        <td>
                                                            <img className="review-star" src="/order-confirm-assets/star-empty.png" alt="review-star"
                                                                style={{paddingLeft:'13px',width:'50px'}}/>
                                                        </td>
                                                        <td>
                                                            <img className="review-star" src="/order-confirm-assets/star-empty.png" alt="review-star"
                                                                style={{paddingLeft:'13px',width:'50px'}}/>
                                                        </td>
                                                        <td>
                                                            <img className="review-star" src="/order-confirm-assets/star-empty.png" alt="review-star"
                                                                style={{paddingLeft:'13px',width:'50px'}}/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                               {/*  <!--End of Review row-->
                                <!--Start of Doordash icon row--> */}
                                <tbody>
                                    <tr>
                                        <td style={{ backgroundColor: 'rgb(244,244,244)' }}>
                                            <img src="/order-confirm-assets/doordash-icon.png" style={{ padding:'20px 15px 5px 15px' }} alt="doordash-icon" />
                                            <hr style={{ width:'550px',borderColor:'rgb(180, 180, 180, 0.1)' }}/>
                                        </td>
                                    </tr>
                                </tbody>
                                {/* <!--End of Doordash icon row-->
                                <!--Start of Links row--> */}
                                <tbody>
                                    <tr>
                                        <td style={{ backgroundColor:'rgb(244,244,244) '}}>
                                            <table cellPadding={0} cellSpacing={0} width="100%">
                                                <tbody>
                                                    <tr style={{
                                                            display:'flex',
                                                            justifyContent:'space-around',
                                                            padding:'20px 0 0 0'
                                                            }}>
                                                        <td>
                                                            <img src="/order-confirm-assets/apple-download.png" alt="apple download button"/>
                                                        </td>
                                                        <td>
                                                            <img src="/order-confirm-assets/dashpass-signup.png" alt="dashpass signup button"/>
                                                        </td>
                                                        <td>
                                                            <img src="/order-confirm-assets/referral.png" alt="referral button"/>
                                                        </td>
                                                        <td>
                                                            <img src="/order-confirm-assets/doordash-delivery.png" alt="doordash button"/>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                                {/* <!--End of Links row-->
                                <!--Start of Footer row--> */}
                                <tbody>
                                    <tr>
                                        <td width="100%"style={{ backgroundColor:'rgb(244,244,244)' }}>
                                            <table cellSpacing={0} cellPadding={0} width="100%" 
                                            style={{
                                                fontfamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                                padding: '25px 0 40px 30px'
                                                }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ margin:0 }}>
                                                            <p style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                                ©2023 DoorDash Inc.
                                                                <br/>303 2nd Street, South Tower, Suite 800
                                                                <br/>San Francisco, CA 94107
                                                                <br/>
                                                                <a href="#" style={{textDecoration:'none',color:'rgb(131, 131, 131)'}}>
                                                                    Privacy Policy
                                                                </a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table cellPadding={0} cellSpacing={0} width="100%">
                                                                <tbody>
                                                                    <tr style={{ 
                                                                            display:'flex',
                                                                            justifyContent:'flex-start',
                                                                            padding:'0 0 10px 0' 
                                                                            }}>
                                                                        <td>
                                                                            <img src="/order-confirm-assets/facebook-icon.png" alt="facebook" style={{height:'20px'}}/>
                                                                        </td>
                                                                        <td>
                                                                            <img src="/order-confirm-assets/twitter-icon.png" alt="twitter" style={{ height:'20px',marginLeft:'15px' }} />
                                                                        </td>
                                                                        <td>
                                                                            <img src="/order-confirm-assets/instagram-icon.png" alt="instagram" style={{ height:'20px',marginLeft:'15px' }}/>
                                                                        </td>
                                                                        <td>
                                                                            <img src="/order-confirm-assets/m-icon.png" alt="m icon" style={{ height:'20px',marginLeft:'15px' }}/>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontWeight:500,paddingBottom:'10px' }}>
                                                            <a style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                            Help Center
                                                            </a> <span 
                                                                    style={{ 
                                                                        fontSize:'14px',
                                                                        color:'rgb(131, 131, 131)' 
                                                                        }}>|
                                                            </span> <a 
                                                                    style={{ 
                                                                        fontSize:'14px',
                                                                        color:'rgb(131, 131, 131)' 
                                                                        }}>
                                                            View email in browser</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                            <p>
                                                                This restaurant pays a commission to DoorDash on this order
                                                            </p>
                                                            <p>
                                                                Prop 65 Restaurant <a href="#" style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                                    WARNING
                                                                </a>
                                                            </p>
                                                            <p>
                                                                Prop 65 Alcohol <a href="#" 
                                                                style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                                    WARNING
                                                                </a> Drinking distilled spirits, beer, coolers, wine, and other alcoholic beverages 
                                                                may increase cancer risk, and, during pregnancy, can cause birth defects.  
                                                                For more information go to <a href="#" 
                                                                style={{ fontSize:'14px',color:'rgb(131, 131, 131)' }}>
                                                                    www.P65Warnings.ca.gov/alcohol.</a>

                                                            </p>
                                                            <p>
                                                                Prop 65 BPA <a href="#"
                                                                                style={{ 
                                                                                    fontSize:'14px',
                                                                                    color:'rgb(131, 131, 131)'
                                                                                    }}>WARNING</a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                            {/* <!--End of Footer row--> */}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default FirstTransactionalEmail
