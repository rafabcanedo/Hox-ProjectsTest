import React from 'react';
import styles from './styles.module.scss';

const LayoutComponents = (props) => {
 return (
  <div className={styles.container}>
   <div className={styles.containerLogin}>
    <div className={styles.wrapLogin}>
        {props.children}
    </div>
    </div>
    </div>
 );
}

export default LayoutComponents;