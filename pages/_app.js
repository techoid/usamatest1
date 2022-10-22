import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "../public/assets/css/custom.css";
import "../public/assets/css/home.css";
import "../public/assets/css/contactus.css";
import "../public/assets/css/menu.css";
import "../public/assets/css/faqus.css";
import "../public/assets/css/aboutus.css";
import "../public/assets/css/blog.css";
import "../public/assets/css/blogdetails.css";
import "../public/assets/css/sliderbar.css";

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"/>
      <Script src="../assets/js/custom.js"/>
      <Script src="../assets/js/menu.js"/>
    </>
}

export default MyApp
