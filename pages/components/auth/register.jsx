import { useRouter } from 'next/router'
import { useState } from 'react';
import { set } from '../../../lib';

import s from '../../../styles/components/auth/register.module.css'

const Register = () => {

  const router = useRouter();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const cheState = (st = "") => {
    return (st = "") ? false : true;
  }

  const atClick = () => {    
    
    const staMail = cheState(mail);
    const staPass = cheState(pass);

    if(staMail && staPass){
      set("Register", {mail, pass});
      router.push('/page/next-register');
    }
    else if(!staMail){
      alert("Email Kosong!");
    }
    else if(!staPass){
      alert("Password Kosong");
    }
  }

  return(
    <>
    <div className={s.container}>
      <div className={`${s.form}`}>
        <form>
          <p className={s.label}>Your Email</p>
          <input onChange={(e)=>{setMail(e.target.value)}} type="email" name="email" id="email" className={s.input} placeholder="Enter your email" autoComplete="off" required={true} />

          <p className={s.label}>Your Password</p>
          <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="password" id="password" className={s.input} placeholder="Enter your password" autoComplete="off" required={true} />

          <div className={s.formFeature}>
            <input type="checkbox" name="check" id="check" className={s.checkbox} required={true} /> 
            <span className={s.txt}>I am certify that email still active </span>
          </div>

          <input onClick={atClick} type="submit" name="register" id="register" value="Register" className={s.btn}/>        
        </form>
      </div>
    </div>
    </>
  )
}

export default Register