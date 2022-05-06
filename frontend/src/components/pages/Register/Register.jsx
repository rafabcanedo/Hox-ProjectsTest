import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LayoutComponents from '../../layout/LayoutComponents/LayoutComponents';

import Logo from '../../../assets/HoxLogo.png';
import styles from './styles.module.scss';

export const Register = () => {

   // reconhecendo o valor de email
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 return(
    <LayoutComponents>
     <form className={styles.loginForm}>
      
      <span className={styles.loginFormTitle}>
       <img src={Logo} alt="Logo Hox" />
      </span>
      <span className={styles.loginFormTitle}>Crie sua conta</span>

      <div className={styles.wrapInput}>
       <input 
        className={styles.input}
        placeholder="Seu Nome" 
        type="text" 
        id="name1" 
        value={nome}
        onChange={e => setNome(e.target.value)}
        />
       <span className={styles.focusInput}></span>
      </div>


      <div className={styles.wrapInput}>
       <input 
        className={styles.input}
        placeholder="Email" 
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
        placeholder="Coloque sua senha" 
        type="password" 
        id="pwd1" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
       <span className={styles.focusInput}></span>
      </div>

      <div className={styles.wrapInput}>
       <input 
        className={styles.input} 
        placeholder="Confirme sua senha" 
        type="password" 
        id="pwd2" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
       <span className={styles.focusInput}></span>
      </div>

      <div className={styles.containerLoginBtn}>
       <button className={styles.loginFormBtn}>Logar</button>
      </div>

      <div className={styles.textCreate}>
        <span className={styles.text1}>Já possui uma conta?</span>
        <Link className={styles.text2} to='/'>
          Entre com sua conta
        </Link>
      </div>

     </form>
    </LayoutComponents>
 );
}