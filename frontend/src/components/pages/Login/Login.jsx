import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LayoutComponents from '../../layout/LayoutComponents/LayoutComponents';

// Import externos
import Logo from '../../../assets/HoxLogo.png';
import styles from './styles.module.scss';

import { Context } from '../../../Context/AuthContext';

export const Login = () => {

  // reconhecendo o valor de email
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // useContext Auth
  const { authenticated, handleLogin } = useContext(Context);

  // Test no console.log
  console.log('Login',authenticated);
  //console.degub('Login', authenticated);

 return(
   <LayoutComponents>
     <form className={styles.loginForm}>
      
      <span className={styles.loginFormTitle}>
       <img src={Logo} alt="Logo Hox" />
      </span>
      <span className={styles.loginFormTitle}>Bem Vindo!</span>

      <div className={styles.wrapInput}>
       <input 
        className={styles.input}
        placeholder="Entre com seu email" 
        type="email" 
        id="emil1" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
       <span className={styles.focusInput}></span>
      </div>

      <div className={styles.wrapInput}>
       <input 
        className={styles.input} 
        placeholder="Entre com sua senha" 
        type="password" 
        id="pwd1" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
       <span className={styles.focusInput}></span>
      </div>

       <Link to='/dashboard' >
       <div className={styles.containerLoginBtn}>
        <button className={styles.loginFormBtn} onClick={handleLogin}>Login</button>
       </div>
       </Link>

      <div className={styles.textCreate}>
        <span className={styles.text1}>Não possui uma conta?</span>
        <Link className={styles.text2} to='/register'>
          Criar Conta
        </Link>
      </div>

     </form>
     </LayoutComponents>
  );
};

/*

      <div className={styles.wrapInput}>
       <input className={styles.input} type="email" />
       <span className={styles.focusInput} data-placeholder="Email"></span>
      </div>

      <div className={styles.wrapInput}>
       <input className={styles.input} type="password" />
       <span className={styles.focusInput} data-placeholder="Password"></span>
      </div>
*/

 /*<Link to='/dashboard'>
       <div className={styles.containerLoginBtn}>
        <button className={styles.loginFormBtn} onClick={handleLogin}>Login</button>
       </div>
      </Link>*/