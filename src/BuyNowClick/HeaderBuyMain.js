import React from 'react'
import CardBuyNacklace from '../BuyNowClick/CardBuyNacklace'
import ApplyBuyCrad from '../BuyNowClick/ApplyBuyCrad'

import Pro1 from '../BuyNowClick/Image/lifetime (2).png'
import Pro2 from '../BuyNowClick/Image/Your_Jewellery-is_Insured.png'
import Pro3 from '../BuyNowClick/Image/14_Days-Return_Policy.png'
import Pro4 from '../BuyNowClick/Image/Complete-Transparency.png'
import Pro5 from '../BuyNowClick/Image/imgpsh_fullsize_anim.png'
import Pro6 from '../BuyNowClick/Image/Certified-Diamonds.png'
import Pro7 from '../BuyNowClick/Image/BIS_916-Hallmarked.png'
import Pro8 from '../BuyNowClick/Image/Zero_Deduction-Gold_Exchange.png'
import Pro9 from '../BuyNowClick/Image/imgpsh_fullsize_anim_2_.png'

function HeaderBuyMain() {
    return (
        <>
            <nav style={{ backgroundColor: '#e1dedc ', height: '100%' ,marginTop:'0px'}}>
                <div style={{ height: '110px' }}>
                    <div>
                        <h1 style={{ fontSize: '20px', color: 'black', padding: '20px', marginLeft: '-10px' }}>Shopping Cart</h1>

                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ marginLeft: '10px' }}>Tatal (3 Items)</p>
                        <div style={{ marginLeft: '620px' }}>
                            <i className="bi bi-currency-rupee"></i> 545,477
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{ display: 'flex' }}>
                    <div>
                        <CardBuyNacklace />
                        <p style={{ fontSize: '13px' }}>Note: This product will be Dispatch in 25 Days</p>
                        <CardBuyNacklace />
                        <p>Note: This product will be Dispatch in 25 Days</p>
                        <CardBuyNacklace />
                    </div>
                    <div>
                        <ApplyBuyCrad />

                    </div>

                </div>

                {/* ==========BuyPromise ========= */}
                
                <div style={{ display: 'flex' }}>
                <div style={{ width: '869px', height: '420px', marginTop: '20px', backgroundColor: 'white', padding: '20px 15px' }}>
                    {/* <div style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
                        <div>
                            <img src={Pro} />
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                <div style={{ width: '220px', height: '2px', backgroundColor: '#cfcdcd ', marginLeft: '-20px' }}></div>
                            </div>
                        </div>
                    </div> */}

                    {/* --------middle -----------*/}
                    <div >
                        <div >
                            <div style={{ display: 'flex', marginTop: '20px' }}>
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro1} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Lifetime<br />
                                            Maitenance
                                        </p>
                                    </div>
                                </div>


                                {/*--- 2 ------*/}
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{
                                        width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '10px'
                                    }}>
                                        <img src={Pro2} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Your_Jewellery<br />
                                            is Insured
                                        </p>
                                    </div>
                                </div>
                                {/*--- 3 ------*/}
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro3} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>14 Days<br />
                                            Return Policy
                                        </p>
                                    </div>
                                </div>
                                {/*--- 4 ------*/}
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro4} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div>
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Complete<br />
                                            Transparency
                                        </p>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro5} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Easy<br />
                                            Exchange
                                        </p>
                                    </div>
                                </div>


                            </div>

                            <div style={{display:'flex',marginLeft:'-20px'}}>
                                <div style={{ marginLeft: '30px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro6} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Certified<br />
                                            Diamonds
                                        </p>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro7} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>BIS 916<br />
                                            Hallmarked
                                        </p>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro8} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Zero Deduction<br />
                                            Gold Exchange
                                        </p>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '50px' }}>
                                    <div style={{ width: '118px', height: '118px', backgroundColor: '#e1dedc', boxShadow: '2px 2px 2px white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src={Pro9} style={{ width: '56px', height: '56px' }} />
                                    </div>
                                    <div >
                                        <p style={{ marginLeft: '20px', fontSize: '14px', marginTop: '10px' }}>Gurasnteed<br />
                                            BuyBack
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>



                    </div>
                </div>

                {/* --------------------Card -----------------*/}






            </div>
            </nav>
        </>
    )
}

export default HeaderBuyMain