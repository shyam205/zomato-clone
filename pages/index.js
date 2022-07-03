import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { zomatofeatures, collectionyourlocation, popularlocality } from '../data.js'
import { useState } from 'react'
export default function Home() {
    const [locationbox,setLocationbox] = useState(false);
    const [emailshow,setEmailshow] = useState(true);

    const focusHandler = () => {
       setLocationbox(true);
    }
    const blurlocaionbox = () => {
      setLocationbox(false);
    }

    const handlesetEmail = (e) => {
      if(e.target.checked){
        setEmailshow(true)
      }
      
    }
    const handlesetPhone = (e) => { 
      if(e.target.checked){
        setEmailshow(false)
      }
      
     }
  return (
    <div className={styles.container}>
      <Head>
        <title>Zomato App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {/* banner for logout user */}
      <div className='banner'>
         <div className={styles.banner}>
             <div className={styles.header}>
                 <div className='header-left-section'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" style={{"height":"15px"}} viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg>
                 <Link href="/mobile"><span className={styles.apptext}>Get The App</span></Link>
                 </div>
                 <div className='header-right-section'>
                   <nav>
                      <ul className={styles.nav}>
                        <li>
                          <Link href="#">Investor Relations</Link>
                        </li>
                        <li>
                          <Link href="#">Add restaurant</Link>
                        </li>
                        <li>
                          <Link href="#">Log in</Link>
                        </li>
                        <li>
                          <Link href="#">Sign up</Link>
                        </li>
                      </ul>
                   </nav>
                 </div>
             </div>
            <div className={styles.bannermidtag}>
             <div className={styles.bannermiddlecontainer}>
              <Image src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" height="100px" width="250px" objectFit='contain' alt="bannerlogo" />
              {/* <h1 className={styles.zomatotag}>ZOMATO</h1> */}
              <p className={styles.discovertag}>Discover the best food & drinks in </p>
              <div className={styles.zomatoloactionsearch}>
                  <div className={styles.zomatoloactioncontainer}>
                      <div className={styles.zomatoloaction}>
                          <svg xmlns="http://www.w3.org/2000/svg" className={styles.location} fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                          <input type="text" placeholder="Location" className={styles.inputlocation} onFocus={focusHandler} onBlur={blurlocaionbox} />
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
                      </div>
                      <div className={styles.zomatosearchcontainer}> 
                        <div className={styles.zomatosearch}>
                        <div className={styles.linebar}></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.search} fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish " />  
                        </div>
                      </div>
                  </div>
                  
                  {   locationbox && 
                   <div className={styles.zomatosearchoption}>
                   <div className={styles.zomatosearchoptionconainer}>
                       <div className={styles.zomatosearchoptionicon}>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>current-location</title><path d="M13.58 10c0 1.977-1.603 3.58-3.58 3.58s-3.58-1.603-3.58-3.58c0-1.977 1.603-3.58 3.58-3.58v0c1.977 0 3.58 1.603 3.58 3.58v0zM20 9.52v0.96c0 0.265-0.215 0.48-0.48 0.48v0h-1.72c-0.447 3.584-3.256 6.393-6.802 6.836l-0.038 0.004v1.72c0 0.265-0.215 0.48-0.48 0.48v0h-0.96c-0.265 0-0.48-0.215-0.48-0.48v0-1.72c-3.575-0.455-6.375-3.262-6.816-6.802l-0.004-0.038h-1.74c-0.265 0-0.48-0.215-0.48-0.48v0-0.96c0-0.265 0.215-0.48 0.48-0.48v0h1.74c0.445-3.578 3.245-6.385 6.781-6.836l0.039-0.004v-1.72c0-0.265 0.215-0.48 0.48-0.48v0h0.96c0.265 0 0.48 0.215 0.48 0.48v0 1.72c3.584 0.447 6.393 3.256 6.836 6.802l0.004 0.038h1.72c0.265 0 0.48 0.215 0.48 0.48v0zM15.96 10c0-3.292-2.668-5.96-5.96-5.96s-5.96 2.668-5.96 5.96c0 3.292 2.668 5.96 5.96 5.96v0c3.292 0 5.96-2.668 5.96-5.96v0z"></path></svg>
                       </div>
                       <div className={styles.zomatosearchoptiontext}>
                            <p className={styles.zomatodetactlocation}>Detect current location</p>
                            <p className={styles.zomatgpstag}>Using GPS</p>
                       </div>
                   </div>
                 </div>
              }
              </div>
              
             
             </div>
         </div>
         </div>
      </div>
      {/* banner for logout user */}

      {/* zomato feature start */}
      <div className={styles.zomatofeature}>
          <div className={styles.zomatofeaturecontainer}>
              {
                zomatofeatures && zomatofeatures.map((feature,i) => (
                  <div className={styles.zomatofeatureboxes} key={i}>
                    <Image src={feature.image} alt={feature.description} layout="fill" />
                      <div className={styles.zomatofeaturetext}>
                          <p className={styles.zomatofeaturetitle}>{feature.title}</p>
                          <span className={styles.zomatofeaturedescription}>{feature.description}</span>
                      </div>
                  </div>
                ))
              }
          </div>
      </div>
      {/* zomato feature end */}

       {/* collection start */}
       <div className={styles.collection}>
           <div className={styles.collectioncontainer}>
               <div className={styles.collectiontext}>
                    <div className={styles.collectiontextleft}>
                      <h2 className={styles.collectionheader}>Collections</h2>
                      <div className={styles.collectionsecondtext}>
                            <p className={styles.collectiondescription}>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</p>
                            <Link href="#" >
                              <div>
                              <span className={styles.collectionplaces}>All collections in Kolkata</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
                              </div>  
                            </Link>
                      </div>
                    </div>
               </div>
               <div className={styles.collectionimages}>
                   {
                    collectionyourlocation && collectionyourlocation.map((item,i) => (
                      <div className={styles.collectionimagesbox} key={i}>
                          <Image src={item.image} alt={item.description} layout="fill" />
                          <div className={styles.collectionimagestext}>
                             <p className={styles.collectionimagestextdesc}>{item.description}</p>
                             <div className={styles.collectionimagestextdescplace}>
                                <h6 className={styles.collectionimagestextplaces}>{item.places}<p className={styles.collectionplace}>Places</p></h6>
                                <span>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
                                </span>
                             </div>
                          </div>
                      </div>
                    ))
                   }
               </div>
           </div>
       </div>
       {/* collection end */}

       {/* popular locality start */}
         <div className={styles.popularlocality}>
              <div className={styles.popularlocalitycontainer}>
                   <h1 className={styles.popularlocalitymainheader}>Popular localities in and around Kolkata</h1>
                    <div className={styles.popularlocalityboxes}>
                        {
                           popularlocality && popularlocality.map((item,i) => (
                              <div className={styles.popularlocalitybox} key={i}>
                                 <h2 className={styles.popularlocalityheader}>{item.title}</h2>
                                 <p className={styles.popularlocalityplaces}>{item.places} <span>Places</span></p>
                              </div>
                           ))
                        }
                    </div>
              </div> 
         </div>

       {/* popular locality end */}


       {/* Zomato app start */}

        <div className={styles.zomatoapp}>
            <div className={styles.zomatoappcontainer}>
                 <div className={styles.zomatoappimagebox}>
                     <img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" alt="zomatoapp" />
                 </div>
                 <div className={styles.zomatoapptextbox}>
                     <h2>Get the Zomato app</h2>
                     <p>We will send you a link, open it on your phone to download the app</p>
                     <div className={styles.radiobutton}>
                        <label className={styles.labelemail}>
                            <input type="radio" name="radiobutton" value="email" className={styles.radiobuttonselect} onChange={handlesetEmail} />
                            { emailshow === true  && <svg viewBox="0 0 20 20" className="sc-djusq7-2 ctMLcL"><circle cx="10" cy="10" r="8" name="radio" value="email" label="Email" checked="" className="sc-djusq7-3 bIgyOk" stroke="rgb(239, 79, 95)" strokeWidth="1px" fill="rgb(255, 255, 255)"></circle><circle cx="10" cy="10" r="5" name="radio" value="email" label="Email" className="sc-djusq7-4 hLkMFn" fill="rgb(239, 79, 95)"></circle></svg> }
                            <span>Email</span>
                        </label>
                        <label className={styles.labelphone}>
                            <input type="radio" name="radiobutton" value="email" className={styles.radiobuttonselect} onChange={handlesetPhone} />
                            { emailshow === false  && <svg viewBox="0 0 20 20" className="sc-djusq7-2 ctMLcL"><circle cx="10" cy="10" r="8" name="radio" value="email" label="Email" checked="" className="sc-djusq7-3 bIgyOk" stroke="rgb(239, 79, 95)" strokeWidth="1px" fill="rgb(255, 255, 255)"></circle><circle cx="10" cy="10" r="5" name="radio" value="email" label="Email" className="sc-djusq7-4 hLkMFn" fill="rgb(239, 79, 95)"></circle></svg> }
                            <span>Phone</span>
                        </label>
                     </div>
                     <div className={styles.emailphonebox}>
                         <div className={styles.emailphoneboxcontainer}>
                             <form>
                                {
                                  emailshow === true && <input type="text" className={styles.emailphoneboxinput} placeholder="Email" name="email" />
                                }
                                {
                                  emailshow === false && <input type="text" className={styles.emailphoneboxinput} placeholder='Phone' name="phone" />
                                }
                                 <button type="submit" className={styles.shareapplink}>Share App Link</button>
                             </form>
                             <span className={styles.downloadapp}>Download app from</span>
                             <div className={styles.downloadappbox}>
                              <div className={styles.downloadappimage}><Image src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" width={150} height={40} layout="responsive" alt="downloadapp" /></div>
                              <div className={styles.downloadappimage}><Image src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" width={150} height={40} layout="responsive" alt="downloadapp" /></div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

       {/* Zomato app end */}


      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
