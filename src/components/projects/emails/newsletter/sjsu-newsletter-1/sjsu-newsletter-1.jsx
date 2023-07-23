import React from 'react';
import Navbar from '../../../../navbar/Navbar';

const SjsuNewsletter1 = ({PageState,isHomePage}) => {
  React.useEffect(() => {
    isHomePage(false);
     },[PageState])


     const paragraphStyle = {padding:0,margin:0,textAlign:"center",fontSize:"14px"};
     const paragraphNewsStyle = {padding:0,margin:0,textAlign:"left",fontSize:"14px"};
     const paragraphTableStyle = {padding:'20px'}
     const dividerStyle = {width:"96%", textAlign:"center", color:"red", backgroundColor:"#e5a823",height:"2px",marginTop:"40px"}; 
  return (
    <>
      <Navbar/>
        <div className='sjsu-newsletter' style={{backgroundColor:"black"}}>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
                <tr>
                    <td>
                        {/* <!--start of container--> */}
                        <table align="center" width={600} cellPadding={0} cellSpacing={0} border={0} 
                          style={{backgroundColor:"white"}} className='sjsu-newsletter-table-container'>
                            {/* start of top banner */}
                            <tbody>
                                <tr>
                                    <td style={{backgroundColor:"#0055a2", padding:'30px 70px'}}>
                                        <table  width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <h1 style={{
                                                                  padding:0,
                                                                  margin:0, 
                                                                  textTransform:"uppercase",
                                                                  color:"gold"
                                                                  }}>
                                                          sjsu
                                                       </h1>
                                                        <h2 style={{
                                                                  padding:0,
                                                                  margin:0, 
                                                                  textTransform:"uppercase",
                                                                  color:"white",
                                                                  fontSize:"17px"
                                                                  }}>
                                                            alumni
                                                        </h2>
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
                            {/* End top banner */}
                            {/* Start football text */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td align="center">
                                          <p style={{fontSize:'25px', margin:"15px 0"}}>
                                            <b>
                                              Spartan Football is Here!
                                            </b>
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End football text */}
                            {/* Start schedule image */}
                            <tbody>
                              <tr>
                                <td>
                                  <img src="/sjsu-newsletter1-images/football-schedule.png" alt="sjsu football season schedule"/>
                                </td>
                              </tr>
                            </tbody>
                            {/* End schedule Image */}
                            {/* Start Hype description paragraph */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{padding:'20px'}}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p style={paragraphStyle}>
                                              Are you ready Spartans?
                                          </p>
                                          <p style={paragraphStyle}>
                                              This football season, the Alumni Association is hosting tailgate parties for a select amount
                                          </p>
                                          <p style={paragraphStyle}>
                                              Mark your calendars and join us for food & drink with fellow Spartan alumni.
                                          </p>
                                          <p style={paragraphStyle}>
                                              More details and ticket registration coming soon.
                                          </p>
                                          <p style={paragraphStyle}>
                                              &nbsp;
                                          </p>
                                          <p style={paragraphStyle}>
                                              Make your travel plans now! We kick off the season at USC on August 26!
                                          </p>
                                          <p style={paragraphStyle}>
                                              Spartans are heading south where we will start the weekend with a Friday night party, and
                                          </p>
                                          <p style={paragraphStyle}>
                                              mingling with other Spartans before the game on Saturday!
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Hype description paragraph */}
                            {/* start spartan football button */}
                            <tbody>
                              <tr>
                                <td style={{padding:' 15px 10px 0px 10px'}}>
                                  <table width="100%" align='center' cellPadding={0} cellSpacing={0} border={0}> 
                                     <tbody>
                                      <tr>
                                        <td align='center'>
                                          <a href="#" style={{
                                                            backgroundColor:'#0055a2', 
                                                            padding:'15px 20px',
                                                            textDecoration:'none',
                                                            textTransform:'uppercase',
                                                            color:'white'}}>
                                              Spartan Football
                                          </a>
                                        </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* end spartan football button */}
                            {/* Start Money Magazine Article */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}  style={paragraphTableStyle}>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                          <p style={dividerStyle}>
                                            &nbsp;
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                          <img src='/sjsu-newsletter1-images/four-student-gown.jpg' 
                                          alt="four students in graduation gowns" style={{width:"600px"}}/>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <h4 style={{...paragraphStyle,textTransform:'uppercase', margin:'15px 0'}}>
                                            Sjsu shines in money magazine's 2023 best colleges rankings
                                          </h4>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody>
                                      <tr>
                                        <td style={{width:'80%'}}>
                                          <p style={paragraphStyle}>
                                            “SJSU's high grade in Money's new rankings encapsulates our nationally 
                                            recognized world-class education and invaluable experiential learning that l
                                            eads to great careers. We firmly believe what happens in Silicon Valley changes 
                                            the world and we are the university fueling Silicon Valley, and these Money 
                                            rankings reaffirm this.” - President Cynthia Teniente-Matson
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Money Magazine Article */}
                            {/* Start Full Article Button */}
                            <tbody>
                              <tr>
                                <td style={{padding:'30px 10px 20px 10px'}}>
                                  <table width="100%" align='center' cellPadding={0} cellSpacing={0} border={0} style={{marginBottom:'20px'}}> 
                                     <tbody>
                                      <tr>
                                        <td align='center'>
                                          <a href="#" style={{
                                                            backgroundColor:'#0055a2', 
                                                            padding:'15px 20px',
                                                            textDecoration:'none',
                                                            textTransform:'uppercase',
                                                            color:'white'}}>
                                              Full article
                                          </a>
                                        </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Full Article Button */}
                            {/* Start Announcements Banner */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td style={{backgroundColor:"#0055a2"}}>
                                          <p style={{
                                                  color:"white", 
                                                  textAlign:"center",
                                                  fontSize:"20px",
                                                  margin:"0",
                                                  fontWeight:'700',
                                                  padding:'7px 0'}}>
                                            Announcements
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Announcements Banner */}
                            {/* Start Announcements Image */}
                            <tbody>
                              <tr>
                                <td>
                                  <img src="/sjsu-newsletter1-images/mascot-business-call.png" alt="calling business owners" style={{width:"600px"}}/>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Announcements Image */}
                            {/* Start business owners paragraph */}
                            <tbody>
                              <tr>
                                <td>
                                <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p style={paragraphStyle}>
                                            We want to know about you, Spartan Business Owners! Are you an 
                                            SJSU Alum who has a brick and mortar or online business? We have 
                                            lots of SJSU Alumni out there who would be happy to support their 
                                            fellow Spartans! Send us your information!
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End business owners paragraph */}
                            {/* Start Submit Your Business Button */}
                            <tbody>
                              <tr>
                                <td style={{padding:'30px 10px 0px 10px'}}>
                                  <table width="100%" align='center' cellPadding={0} cellSpacing={0} border={0}> 
                                     <tbody>
                                      <tr>
                                        <td align='center'>
                                          <a href="#" style={{
                                                            backgroundColor:'#0055a2', 
                                                            padding:'15px 20px',
                                                            textDecoration:'none',
                                                            textTransform:'uppercase',
                                                            color:'white'}}>
                                              Submit Your Business
                                          </a>
                                        </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Submit Your Business Button */}
                            {/* Start Mentor Sign Up */}
                            <tbody>
                              <tr>
                                <td>
                                  {/* Divider Line */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginBottom:'20px'}}>
                                    <tbody>
                                      <tr>
                                        <td align="center">
                                          <p style={dividerStyle}>
                                            &nbsp;
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/* End Divider Line */}
                                  {/* Start Articles */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* Left article start */}
                                          <table width="50%" align="left" cellPadding={0} cellSpacing={0} border={0} className='sjsu-mentor-sign-up-left-column'>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  {/* Add 3 tables 1.img 2.paragraph 3.button */}
                                                  {/* image table start*/}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                    <tbody>
                                                      <tr>
                                                        <td align='center'>
                                                          <img src="/sjsu-newsletter1-images/students-nasa-sticker.jpg" alt="students holding up a nasa sticker" style={{width:"80%"}}/>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* image table end */}
                                                  {/* paragraph table start */}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                                    <tbody>
                                                      <tr>
                                                        <td align='center'>
                                                          <p style={{...paragraphStyle, marginBottom:'15px'}}>
                                                            <b>
                                                            Alumni Presenters Needed for Fall '23
                                                            </b>
                                                          </p>
                                                          <p style={paragraphStyle}>
                                                            The Student Alumni Connection is in need of volunteers to join 
                                                            them in-person for the fall semester. As a member of the alumni 
                                                            community, you have the power to inspire current SJSU students 
                                                            with your knowledge and experience! SAC is looking for speakers 
                                                            on a variety of topics and interests, panel members, and those 
                                                            who would like to be interviewed. Preference is given to topics 
                                                            that can be of interest to all students regardless of their major.
                                                          </p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* paragraph table end */}
                                                  {/* button table start */}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:'45px'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td align='center'>
                                                          <a href="#" style={{
                                                              backgroundColor:'#0055a2', 
                                                              padding:'15px 20px',
                                                              textDecoration:'none',
                                                              textTransform:'uppercase',
                                                              color:'white'}}>
                                                              Sign up here
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* button table end */}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/* Left article end */}
                                          {/* Right article start */}
                                          <table width="50%" align="right" cellPadding={0} cellSpacing={0} border={0} className='sjsu-mentor-sign-up-right-column'>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  {/* Add 3 tables 1.img 2.paragraph 3.button */}
                                                  {/* image table start*/}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                    <tbody>
                                                      <tr>
                                                        <td align='center'>
                                                          <img src="/sjsu-newsletter1-images/mentor-mascot.jpg" alt="Mentor image of spartan mascot" style={{width:"80%"}}/>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* image table end */}
                                                  {/* paragraph table start */}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <p style={{...paragraphStyle, marginBottom:'15px'}}>
                                                            <b>
                                                            SJSU Fall 2023 Program
                                                            </b>
                                                          </p>
                                                          <p style={paragraphStyle}>
                                                            Are you interested in engaging with and mentoring a current SJSU 
                                                            student? Join the semester long program (3 meetings minimum), and 
                                                            make an impact on a student today! Mentors are invited to apply until 
                                                            August 17 and students will be matched on September 29. All majors and 
                                                            industry expertise are welcome!
                                                          </p>
                                                          <p style={{fontSize:'12px', fontStyle:'italic'}}>
                                                            Matching of mentors is contingent upon students with similar career interests/major joining the program.  
                                                          </p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* paragraph table end */}
                                                  {/* button table start */}
                                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:'45px'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td align='center'>
                                                          <a href="#" style={{
                                                                backgroundColor:'#0055a2', 
                                                                padding:'15px 20px',
                                                                textDecoration:'none',
                                                                textTransform:'uppercase',
                                                                color:'white'}}>
                                                              Mentor a student today
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  {/* button table end */}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/* right article end */}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/* End Articles */}
                                </td>
                              </tr>
                            </tbody>
                            {/* End Mentor Sign Up */}
                            {/* Start Congratulate NAACP Scholars */}
                            <tbody>
                              <tr>
                                <td>
                                   {/* Divider Line */}
                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                          <p style={dividerStyle}>
                                            &nbsp;
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/* End Divider Line */}
                                  {/* Start Article */}
                                  <table width="100%" align='center' cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* image table start*/}
                                          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align='center'>
                                                  <img src="/sjsu-newsletter1-images/naacp-alumni.jpg" alt="The four NAACP SJSU alumni" style={{width:'600px'}}/>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/* image table end */}
                                          {/* paragraph table start */}
                                          <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <p style={paragraphStyle}>
                                                    Congratulations to Dr. Harry Edwards, '64 Sociology, '16 Honorary Doctorate; 
                                                    Ken Noel, '66 BA, '68 MA Social Science; Tommie Smith, '69 Social Science,
                                                    '05 Honorary Doctorate, and John Carlos, '05 Honorary Doctorate for their induction 
                                                    into the NAACP California Hawaii State Conference Legacy Hall of Fame! We love to 
                                                    see these legendary Spartans receive the recognition they deserve 🙌💙💛
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/* paragraph table end */}
                                          {/* button table start */}
                                          <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{margin:'20px 0'}}>
                                            <tbody>
                                              <tr>
                                                <td align='center'>
                                                  <a href="#" style={{
                                                        backgroundColor:'#0055a2', 
                                                        padding:'15px 20px',
                                                        textDecoration:'none',
                                                        textTransform:'uppercase',
                                                        color:'white'}}>
                                                      Full article
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/* button table end */}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/* End Article */}
                                </td>
                              </tr>
                            </tbody>
                            {/* End Congratulat NAACP Scholars */}
                            {/* Start SJSU in the News Banner */}
                            <tbody>
                                <tr>
                                  <td>
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:'20px'}}>
                                      <tbody>
                                          <tr>
                                          <td style={{backgroundColor:"#0055a2"}}>
                                              <p style={{
                                                  color:"white", 
                                                  textAlign:"center",
                                                  fontSize:"20px",
                                                  margin:"0",
                                                  fontWeight:'700',
                                                  padding:'7px 0'}}>
                                                SJSU in the News
                                              </p>
                                          </td>
                                          </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                            </tbody>
                            {/* End SJSU in the News Banner */}
                            {/* Start SJSU in the News Articles */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{...paragraphTableStyle}}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p style={paragraphNewsStyle}>
                                            <b>Washington Post</b>
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <a href="#">
                                              A former SJSU dean wanted to pet dogs for his 100th birthday, and 200 dogs showed up. 
                                            </a>
                                          </p>
                                          <p style={paragraphStyle}>
                                            &nbsp;
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <b>NBC Bay Area</b>
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <a href="#">
                                              SJSU President Cynthia Tiente-Matson comments on how to improve student education rates 
                                              in regard to the just released Latino Education Report Card.      
                                            </a>
                                          </p>
                                          <p style={paragraphStyle}>
                                            &nbsp;
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <b>San Francisco Chronicle</b>
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <a href="#">
                                              SJSU professor comments on wildfire risk remains high going into the 4th of July.     
                                            </a>
                                          </p>
                                          <p style={paragraphStyle}>
                                            &nbsp;
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <b>News-Medical.Net</b>
                                          </p>
                                          <p style={paragraphNewsStyle}>
                                            <a href="#">
                                              SJSU researchers and others develop a new model that could speed up vaccine distribution 
                                              during a pandemic.
                                            </a>
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End SJSU in the News Articles */}
                             {/* Start Upcoming Events Banner */}
                             <tbody>
                                <tr>
                                  <td>
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                      <tbody>
                                          <tr>
                                          <td style={{backgroundColor:"#0055a2"}}>
                                              <p style={{
                                                  color:"white", 
                                                  textAlign:"center",
                                                  fontSize:"20px",
                                                  margin:"0",
                                                  fontWeight:'700',
                                                  padding:'7px 0'}}>
                                                Upcoming Events
                                              </p>
                                          </td>
                                          </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                            </tbody>
                            {/* End Upcoming Events Banner */}
                            {/* Start upcoming events article */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" height="200px" cellPadding={0} cellSpacing={0} border="0">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table width="50%" height="100%" align='left' cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align='center' style={{height:"100%"}}>
                                                  <img src="/sjsu-newsletter1-images/google-interview-tips.jpg" 
                                                  alt="google technical interview tips" style={{width:"90%", marginTop:'40px'}}/>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table width="50%" align='right' cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                            <tbody>
                                                <tr>
                                                  <td>
                                                    <p style={{textAlign:'center', fontSize:'16px'}}>
                                                      <b>
                                                      Google Technical Interview Tips
                                                      </b>
                                                    </p>
                                                    <p style={paragraphStyle}>
                                                      Come learn the ins and outs of technical interviews so you can nail your next one!
                                                      Google software engineering, User Design, and Technical Program Management teams will 
                                                      pull back the curtains on the interview process and give awesome tips and practice 
                                                      questions too. You will also get a chance to engage and ask questions!
                                                    </p>
                                                    <p style={{...paragraphStyle, paddingTop:'20px'}}>July 25 | 2PM</p>
                                                    <p style={paragraphStyle}>
                                                      <a href="#">
                                                        Learn More & Register!
                                                      </a>
                                                    </p>
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
                            {/* End upcoming events article */}
                            {/* Start Casino Night event */}
                            <tbody>
                              <tr>
                                <td>
                                    {/* Divider Line */}
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} 
                                    style={{margin:0,padding:0, lineHeight:0}}>
                                      <tbody>
                                        <tr>
                                          <td align='center'>
                                            <p style={{...dividerStyle, margin:0, padding:0}}>
                                              &nbsp;
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                      {/* End Divider Line */}
                                      {/* Start article */}
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} height="280px">
                                      <tbody>
                                        <tr>
                                          <td>
                                          <table width="50%" align='left' cellPadding={0} cellSpacing={0} border={0} 
                                          style={{
                                            ...paragraphTableStyle,
                                            paddingBottom:0
                                            }}>
                                          <tbody>
                                              <tr>
                                                <td>
                                                  <p style={{textAlign:'center', fontSize:'16px'}}>
                                                    <b>SJSU Casino Night</b>
                                                  </p>
                                                  <p style={paragraphStyle}>
                                                    Save the date! The division of Intercollegiate Athletics presents Casino Night 
                                                    at The Glasshouse in downtown San José. All proceeds will benefit SJSU Athletics.
                                                  </p>
                                                  <p style={{...paragraphStyle, marginTop:"25px"}}>July 25 | 2PM</p>
                                                  <p style={paragraphStyle}>
                                                    <a href="#">
                                                      Learn More & Register!
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                          </tbody>
                                        </table>         
                                        <table width="50%" align='right' cellPadding={0} cellSpacing={0} border={0}>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <img src="/sjsu-newsletter1-images/invite-casino-night.png" 
                                                alt="sjsu casino night invite" style={{width:"90%",marginTop:"30px"}}/>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>   
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/* End article */}
                                    {/* button table start */}
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{margin:'0 0 50px 0'}}>
                                      <tbody>
                                        <tr>
                                          <td align='center'>
                                            <a href="#" style={{
                                                  backgroundColor:'#0055a2', 
                                                  padding:'15px 20px',
                                                  textDecoration:'none',
                                                  textTransform:'uppercase',
                                                  color:'white'}}>
                                                See the full calender of alumni engagement events
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/* button table end */}
                                </td>
                              </tr>
                            </tbody>
                            {/* End Casino Night event */}
                             {/* Start Online Programming Banner */}
                             <tbody>
                                <tr>
                                  <td>
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginBottom:'20px'}}>
                                      <tbody>
                                          <tr>
                                          <td style={{backgroundColor:"#0055a2"}}>
                                              <p style={{
                                                  color:"white", 
                                                  textAlign:"center",
                                                  fontSize:"20px",
                                                  margin:"0",
                                                  fontWeight:'700',
                                                  padding:'7px 0'}}>
                                                Online Programming
                                              </p>
                                          </td>
                                          </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                            </tbody>
                            {/* End Online Programming Banner */}
                            {/* Start Online Programming Table */}
                            <tbody>
                              <tr>
                                <td>
                                  {/* Start top table */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} className='sjsu-online-programming-table-container'>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* Start Left column */}
                                          <table width="50%" align='left' cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                             <tbody>
                                               <tr>
                                                 <td>
                                                   {/* Start Image Table  */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <img src="/sjsu-newsletter1-images/black-haired-woman-money-zen.jpg" 
                                                            alt="black haired woman" style={{width:'85%'}}/>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Image Table */}
                                                   {/* Start Paragraph Table */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <h3>
                                                              Money Zen: The Secret to Beating the "Never Enough" Mindset - July 19
                                                            </h3>
                                                            <p style={{...paragraphStyle,textAlign:'left',lineHeight:1.2,fontSize:'14px'}}>
                                                            It is a long established fact that a reader will be distracted by the readable 
                                                            content of a page when looking at its layout. The point of using Lorem Ipsum 
                                                            is that it has a more-or-less normal distribution of letters, as opposed to 
                                                            using 'Content here, content here', making it look like readable English. Many 
                                                            desktop publishing packages and web page editors now use Lorem Ipsum as their 
                                                            default model text, and a search for 'lorem ipsum' will uncover many web sites 
                                                            still in their infancy. Various versions have evolved over the years, sometimes 
                                                            by accident, sometimes on purpose (injected humour and the like).
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Paragraph Table */}
                                                   {/* button table start */}
                                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{margin:"30px 0"}}>
                                                      <tbody>
                                                         <tr>
                                                           <td align='center'>
                                                            <a href="#" style={{
                                                                   backgroundColor:'#0055a2', 
                                                                   padding:'15px 20px',
                                                                   textDecoration:'none',
                                                                  textTransform:'uppercase',
                                                                  color:'white'}}>
                                                                 Learn more & register
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                   {/* button table end */}         
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>   
                                          {/* End Left column */}
                                          {/* Start Right column */}
                                          <table width="50%" align='right' cellPadding={0} cellSpacing={0} border={0}>
                                             <tbody>
                                               <tr>
                                                 <td>
                                                   {/* Start Image Table  */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{paddingTop:'20px'}}>
                                                      <tbody>
                                                        <tr>
                                                          <td align='center'>
                                                            <img src="/sjsu-newsletter1-images/grace-under-pressure.jpg" 
                                                            alt="gracefully lead through crisis" style={{width:'85%'}}/>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Image Table */}
                                                   {/* Start Paragraph Table */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <h3>
                                                              How to Gracefully Lead Through Change and Crisis - July 27
                                                            </h3>
                                                            <p style={{...paragraphStyle,textAlign:'left',lineHeight:1.2,fontSize:'14px'}}>
                                                            It is a long established fact that a reader will be distracted by the 
                                                            readable content of a page when looking at its layout. The point of 
                                                            using Lorem Ipsum is that it has a more-or-less normal distribution 
                                                            of letters, as opposed to using 'Content here, content here', making 
                                                            it look like readable English. Many desktop publishing packages and 
                                                            web page editors now use Lorem Ipsum as their default model text, and 
                                                            a search for 'lorem ipsum' will uncover many web sites still in their 
                                                            infancy. Various versions have evolved over the years, sometimes by accident, 
                                                            sometimes on purpose (injected humour and the like).
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Paragraph Table */}

                                                    {/* button table start */}
                                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:"67px"}}>
                                                      <tbody>
                                                         <tr>
                                                           <td align='center'>
                                                            <a href="#" style={{
                                                                   backgroundColor:'#0055a2', 
                                                                   padding:'15px 20px',
                                                                   textDecoration:'none',
                                                                  textTransform:'uppercase',
                                                                  color:'white'}}>
                                                                 Learn more & register
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                   {/* button table end */}         
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>   
                                          {/* End Right column */}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>      
                                  {/* End Top Table */}     
                                   {/* Start Bottom table */}
                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0} className='sjsu-online-programming-table-container'>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* Start Left column */}
                                          <table width="50%" align='left' cellPadding={0} cellSpacing={0} border={0}>
                                             <tbody>
                                               <tr>
                                                 <td>
                                                   {/* Start Image Table  */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td align="center">
                                                            <img src="/sjsu-newsletter1-images/microstress-man.jpg" 
                                                            alt="microstress effect book" style={{width:"85%"}}/>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Image Table */}
                                                   {/* Start Paragraph Table */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <h3 style={{textAlign:"left", margin:'0 0 30px'}}>
                                                            The Microstress Effect: How Little Things Pile Up and 
                                                            Create Big Problems - August 1
                                                            </h3>
                                                            <p style={{...paragraphStyle,textAlign:'left',lineHeight:1.2,fontSize:'14px'}}>
                                                              Have you ever felt that you don't measure up? Far too many of us feel 
                                                              trapped in a 24/7 hamster wheel of hustle culture, no matter our age, 
                                                              income, or profession. In a world that increasingly tells us the answer 
                                                              to virtually any problem is more - it is all too easy to believe that 
                                                              the amount of money you earn, accomplishments you achieve, or praise 
                                                              you receive is never enough. That you are never enough. In this 
                                                              enlightening webinar, author Manisha Thakor will provide the antidote 
                                                              to this destructive, never-enough mindset - so you can reclaim yourself 
                                                              and your life joyfully.
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Paragraph Table */}

                                                    {/* button table start */}
                                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{margin:"30px 0"}}>
                                                      <tbody>
                                                         <tr>
                                                           <td align='center'>
                                                            <a href="#" style={{
                                                                   backgroundColor:'#0055a2', 
                                                                   padding:'15px 20px',
                                                                   textDecoration:'none',
                                                                  textTransform:'uppercase',
                                                                  color:'white'}}>
                                                                 Learn more & register
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                   {/* button table end */}         
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>   
                                          {/* End Left column */}
                                          {/* Start Right column */}
                                          <table width="50%" align='right' cellPadding={0} cellSpacing={0} border={0}>
                                             <tbody>
                                               <tr>
                                                 <td>
                                                   {/* Start Image Table  */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                      <tbody>
                                                        <tr>
                                                          <td align='center'>
                                                            <img src="/sjsu-newsletter1-images/power-moms.jpg" 
                                                            alt="power moms book" style={{width:'85%'}}/>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Image Table */}
                                                   {/* Start Paragraph Table */}
                                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={paragraphTableStyle}>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <h3 style={{margin:'0 0 30px', padding:0}}>
                                                              How Working Mothers Can Thrive And Not Just Survive - August 10
                                                            </h3>
                                                            <p style={{...paragraphStyle,textAlign:'left',lineHeight:1.2,fontSize:'14px'}}>
                                                              Have you ever felt that you don't measure up? Far too many of us feel 
                                                              trapped in a 24/7 hamster wheel of hustle culture, no matter our age, 
                                                              income, or profession. In a world that increasingly tells us the answer 
                                                              to virtually any problem is more - it is all too easy to believe that 
                                                              the amount of money you earn, accomplishments you achieve, or praise 
                                                              you receive is never enough. That you are never enough. In this 
                                                              enlightening webinar, author Manisha Thakor will provide the antidote 
                                                              to this destructive, never-enough mindset - so you can reclaim yourself 
                                                              and your life joyfully.
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                   </table>
                                                   {/* End Paragraph Table */}

                                                    {/* button table start */}
                                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:'30px'}}>
                                                      <tbody>
                                                         <tr>
                                                           <td align='center'>
                                                            <a href="#" style={{
                                                                   backgroundColor:'#0055a2', 
                                                                   padding:'15px 20px',
                                                                   textDecoration:'none',
                                                                  textTransform:'uppercase',
                                                                  color:'white'}}>
                                                                 Learn more & register
                                                            </a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                   {/* button table end */}         
                                                 </td>
                                               </tr>
                                             </tbody>
                                           </table>   
                                          {/* End Right column */}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>      
                                  {/* End Top Table */}     
                                </td>
                              </tr>
                            </tbody>
                            {/* end Online Programming Table */}
                            {/*Start Learn alumni association membership */}
                            <tbody>
                              <tr>
                                <td>
                                    {/* Divider Line */}
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                          <p style={dividerStyle}>
                                            &nbsp;
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/* End Divider Line */}
                                   {/* Start Image Table  */}
                                   <table width="100%" cellPadding={0} cellSpacing={0} border={0} 
                                    style={{margin:'15px 0 45px'}}>
                                     <tbody>
                                       <tr>
                                        <td align='center'>
                                          <div style={{
                                                       width:'200px',
                                                       height:'200px',
                                                       backgroundColor:'black'   
                                                        }}/>
                                        </td>
                                       </tr>
                                     </tbody>
                                  </table>
                                  {/* End Image */}
                                  {/* button table start */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginBottom:'35px'}}>
                                    <tbody>
                                       <tr>
                                          <td align='center'>
                                          <a href="#" style={{
                                                 backgroundColor:'#0055a2', 
                                                 padding:'15px 20px',
                                                  textDecoration:'none',
                                                textTransform:'uppercase',
                                                color:'white'}}>
                                                Learn about alumni association membership
                                           </a>
                                         </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                 {/* button table end */} 
                                </td>
                              </tr>
                            </tbody>
                            {/*End Learn alumni association membership */}
                            {/* Start Update Contact Info */}
                            <tbody>
                              <tr>
                                <td>
                                  {/* Start Image Table  */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                     <tbody>
                                       <tr>
                                        <td align='center'>
                                          <img src="/sjsu-newsletter1-images/most-transformative-uni.png" 
                                          alt="SJSU most transformative univ" style={{width:'339px', height:'105.72px'}} />
                                        </td>
                                       </tr>
                                     </tbody>
                                  </table>
                                  {/* End Image */}
                                  {/* button table start */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{marginTop:'20px'}}>
                                    <tbody>
                                       <tr>
                                          <td align='center'>
                                          <a href="#" style={{
                                                 backgroundColor:'#0055a2', 
                                                 padding:'15px 20px',
                                                  textDecoration:'none',
                                                textTransform:'uppercase',
                                                color:'white'}}>
                                                Update your contect information
                                           </a>
                                         </td>
                                      </tr>
                                     </tbody>
                                  </table>
                                 {/* button table end */} 
                                </td>
                              </tr>
                            </tbody>
                            {/* End Update Contact Info */}
                            {/* Start Engage with us text */}
                            <tbody>
                              <tr>
                                <td align='center'>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} 
                                    style={{marginTop:'30px'}}>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                          <p style={{margin:0, padding:0, lineHeight:1, fontSize:'22px'}}>
                                            <b>Continue to engage with us - </b>
                                          </p>
                                          <p style={{margin:0, padding:0, lineHeight:1,fontSize:'22px'}}>
                                            <b>in-person, online and with Pride!</b>
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Engage with us text */}
                            {/* Start Social Links  */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" align='left' cellPadding={0} cellSpacing={0} border={0}
                                    style={{margin:'30px 0'}}>
                                    <tbody>
                                      <tr>
                                        <td align='center' width="25%">
                                          <table width="100%"  cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align="center">
                                                  <a href="#">
                                                    <img src='/sjsu-newsletter1-images/facebook-icon.png'
                                                      alt='facebook icon' style={{width:'16px',height:'29.59px',margin:0}}/>
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td align='center' width="25%">
                                          <table width="100%"  cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align="center">
                                                  <a href="#">
                                                    <img src='/sjsu-newsletter1-images/linkedin-icon.png'
                                                      alt='linkedin icon' style={{width:'27px',height:'28.34px',margin:0,padding:0}}/>
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td align='center' width="25%">
                                          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align="center">
                                                  <a href="#">
                                                    <img src='/sjsu-newsletter1-images/twitter-icon.png'
                                                      alt='twitter icon' style={{width:'36px',height:'29.14px',margin:0,padding:0}}/>
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td align='center' width="25%">
                                          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td align="center">
                                                  <a href="#">
                                                    <img src='/sjsu-newsletter1-images/instagram-icon.png'
                                                      alt='instagram icon' style={{width:'30px',height:'30px',margin:0,padding:0}}/>
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
                            {/* End Social Links */}
                            {/* Start Footer */}
                            <tbody>
                              <tr>
                                <td>
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0}
                                     style={{backgroundColor:"#0055a2", color:"white"}}>
                                    <tbody>
                                      <tr>
                                        <td align='center'>
                                         <table width="100%" cellPadding="0 20px" cellSpacing={0} border={0}>
                                            <tbody>
                                              <tr>
                                                <td width='50%'align='right' style={{paddingRight:"5px"}}>
                                                  <h1>
                                                    SJSU
                                                  </h1>
                                                </td>
                                                <td width='50%' style={{paddingLeft:"5px"}}>
                                                  <p style={{margin:0}}>
                                                    San Joose State 
                                                  </p>
                                                  <p style={{margin:0}}>
                                                    University
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
                                        <td align='center' style={{
                                                                lineHeight:0.2, 
                                                                fontSize:"12px", 
                                                                fontStyle:"italic",
                                                                paddingBottom:"20px"
                                                                }}>
                                          <p>
                                            San Joose State University Alumni Association
                                          </p>
                                          <p>
                                            Four Abraham Square
                                          </p>
                                          <p>
                                            San Joose, CA 29922
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody>
                                      <tr>
                                        <td align="center" style={{
                                                                  backgroundColor:"white", 
                                                                  color:"blue", 
                                                                  padding:"20px 0"
                                                                  }}>
                                          <p style={{fontSize:"10px"}}>
                                            Unsubscribe
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            {/* End Footer */}
                        </table>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default SjsuNewsletter1
