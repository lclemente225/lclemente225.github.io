import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const contactMe = () => {
    const form = useRef();
    const [isHover, setIsHover] = React.useState(false);
    const [isFormSubmitted, formSubmit] = React.useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_j6a9iss', 'template_nx1qepi', form.current, 'FSKSni_ZsopGUjI3D')
        .then((result) => {
            formSubmit(true);
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            console.log("works",result.text);
        }, (error) => {
            console.log("failed",error.text);
        });
    };


    function closeSubmitThanks(){
        formSubmit(false)
    }

    function handleButtonHover(){
        setIsHover(true)
    }

    function handleButtonUnhovered(){
        setIsHover(false)
    }

    const inputStyling = {
                        width:'50%',
                        height: '50px',
                        minWidth: '200px',
                        margin: '20px 0',
                        borderRadius: '20px',
                        border: 0,
                        borderBottom: '3px solid black' ,
                        textAlign: 'center'
                    };
    const textInputStyling = {
                        width:'50%',
                        height: '200px',
                        minHeight: '15%',
                        maxWidth: '90%',
                        margin: '20px 0',
                        borderRadius: '5px'
                    };
    const contactButtonStyling = {
                                backgroundColor: isHover ?  '#FFB563' : '#A41623',
                                color: isHover ? '#A41623' : '#FFB563',
                                padding: '10px 0',
                                width: '90%',
                                borderRadius: '40px',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                margin: '30px 0 0',
                                justifySelf: 'flex-end', 
                                cursor: 'pointer'
                    };
  
  return (
    <div className='email-form' 
    style={{
        display: 'flex', 
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        height: '100vh', 
        width: '100%',
        margin: '200px 0'
        }}>
            <h1 className='email-form-header'>Contact me</h1>
            <form ref={form} onSubmit={sendEmail} 
            style={{
                position:'relative',
                display: 'flex', 
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center',
                width: '70%',
                minWidth: '270px',
                height: '90%',
                borderRadius: '40px',
                border: '2px solid black',
                padding: '50px 0',
                boxShadow: '0 0 10px 2px black, 0 0 20px 10px black',
                backgroundColor: 'var(--box-color)'
                
                }}>
                    <label>Name</label>
                    <input required type="text" name="user_name" style={inputStyling}/>
                    <label>Email</label>
                    <input required type="email" name="user_email" style={inputStyling} />
                    <label style={{
                                    width: '80%',
                                    textAlign: 'center',
                                    fontSize: '1em'
                                    }}>
                        Please let me know your intent
                    </label>
                    <textarea required name="message" style={textInputStyling}/>
                    <input type="submit" value="Send to Lawrence" style={contactButtonStyling} 
                    onMouseEnter={handleButtonHover} onMouseLeave={handleButtonUnhovered}/>

 { isFormSubmitted &&
                <div style={{
                            position:'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex', 
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            borderRadius: '37px',
                            fontWeight: 800,
                            color: ' var(--box-color)',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)'

                }}>
                    <div onClick={closeSubmitThanks}
                        style={{position: 'absolute', top: 30, right: 50, cursor: 'pointer'}}>
                        x
                    </div>
                    Thanks!
                    <p style={{width: '70%', textAlign:'center'}}>Your email was sent</p>
                    <p style={{width: '70%', textAlign:'center'}}>
                        I'll get back to you in a couple days
                    </p>
                </div>}
            </form>
    </div>
  )
}


