import { Layout } from '../components/layout';
import React from 'react';

const Contacts = () => {
  return(
    <>
    <Layout>
      <br></br>
      <table>
        <tbody>
          <tr>
            <td>phone:</td>
            <td>+930-499-949-484</td>
          </tr>
          <tr>
            <td>e-mail:</td>
            <td>tftdlfj@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </Layout>
    </>
  )
}

export default Contacts;

export const Head = () => <title>Contacts Page</title>