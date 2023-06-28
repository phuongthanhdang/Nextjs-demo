import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import { Link} from '../components';
import {userService} from '../services'
import { useRouter } from "next/router";
import { Children, useEffect, useState } from "react";
import Head from 'next/head';
import {Header, Banner } from '../components'
import { RootLayout } from './layout'
import { from } from 'rxjs';
const inter = Poppins({
  weight: ["300", "400", "500" , "600" , "700" , "800"],
  style:["normal"],
  subsets: ["latin"]
})
export const metadata = {
  title: 'hello nextjs',
  description: 'demo nextjs'
}
export default function Home() {
  const router = useRouter();
  const [usernameStr,SetUsernameStr] = useState('');
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user'));
    if(local){
      SetUsernameStr(local.data.username);}
      // console.log('username',usernameStr);
}, [usernameStr]);
  return (
    //   <div className={inter.className}>
    //   <div className="container">
    //       <h1>Hi {usernameStr}!</h1>
    //       <p>You&apos;re logged in with Next.js & JWT!!</p>
    //       <p><Link href="/account/login">Manage Users</Link></p>
    //   </div>
    // </div>
    // <html lang='en'>
    //    <Head>
    //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    //         <link rel="icon" href="./logo.webp" />
    //     </Head>
    //     <body className={inter.className}>
    //      <h1>hello</h1>
    //     </body>
    // </html>
   
    <main>
        <RootLayout/>
        <Header/>
        <Banner></Banner>
    </main>
  )
}
