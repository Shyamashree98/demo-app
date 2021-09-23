import '../styles/globals.css'
import App from 'next/app';

export default class MyApp extends App{

  componentDidMount(){
    const userId = window.localStorage.getItem("userId");
    const {router} = this.props;
    if(userId){
      // userId is there
      if(router.pathname === '/MyLoginPage'){ //if tries to access login
        // throw the user to the dashboard
        router.replace("/");
      }
    } else {
      // userId is absent
      if(router.pathname === '/'){
        router.replace("/MyLoginPage");
      }
    }
  }

  render()
  {
    //index.js
    const {Component, pageProps} = this.props;
    return(
      <Component {...pageProps}/>
    );
  }
}
