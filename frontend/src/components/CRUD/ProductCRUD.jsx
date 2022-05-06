import React,{ useState } from 'react';
import TableProduct from '../Table/TableProduct';
import AddProduct from '../Table/AddProduct';
import Menu from '../navigation/Menu/index';
import Footer from '../layout/footer/footer';

const ProductCRUD = () => {
 return(

     <div>
         <Menu />
         <AddProduct />
         <TableProduct />
         <Footer />
   </div>
 );
}

export default ProductCRUD;