import React from 'react'
import p from '../PlaceOrderClick/Image/nkwav20051_z_1.jpg'

function ClickPlaceMain() {
    return (
        <div style={{ display: 'flex', backgroundColor: '#dfdedd ', width: '1350px', height: '940px',marginTop:'0px' }}>
            <div style={{ width: '971px', height: '840px', padding: '40px', backgroundColor: '#dfdedd ' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        {/*=== khali div ===*/}
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#9A0056', color: 'white' }}>
                            <span style={{ marginLeft: '5px', marginTop: '-8px' }}>1</span>
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                            <h2 style={{ fontSize: '20px' }}>Login & Register</h2>
                        </div>

                    </div>
                    {/*== shopping == */}
                    <div style={{ display: 'flex' }}>
                        {/*=== khali div ===*/}
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#a1a09e  ', color: 'white', border: '1px solid #dfdedd ' }}>
                            <span style={{ marginLeft: '5px', marginTop: '-8px' }}>2</span>
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                            <h2 style={{ fontSize: '20px', color: '#b9b8b6' }}>Shopping</h2>
                        </div>

                    </div>
                    {/* Payment selection */}
                    <div style={{ display: 'flex' }}>
                        {/*=== khali div ===*/}
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', color: '#b9b8b6', backgroundColor: '#a1a09e ' }}>
                            <span style={{ marginLeft: '5px', marginTop: '-8px', color: 'white ' }}>3</span>
                        </div >
                        <div style={{ marginLeft: '10px' }}>
                            <h2 style={{ fontSize: '20px', color: '#b9b8b6  ' }}>Payment Selection</h2>
                        </div>

                    </div>

                </div>
                <div style={{ width: '920px', height: '1px', backgroundColor: '#b9b8b6 ', marginTop: '13px' }}></div>


                {/* Login or register */}
                <div style={{ marginTop: '10px' }}>
                    <h6>Login and Register</h6>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div style={{ width: '500px', height: '62px', backgroundColor: '#9A0056', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '25px', padding: '3px', marginTop: '11px' }}>Login</h2>
                    </div>
                    <div style={{ width: '500px', marginLeft: '1px', height: '62px', backgroundColor: '#ddd6cb  ', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '25px', marginTop: '11px' }}>Register</h2>
                    </div>
                </div>

                {/* ===form */}
                <div style={{
                    width: '808px', height: '340px', border: '1px solid pink', marginTop
                        : '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <div style={{ width: '408px', height: '350px', backgroundColor: 'white' }}>
                        <form >
                            <div >
                                <label style={{ marginTop: '20px' }}>Email Address*</label>

                            </div>
                            <div>
                                <input type='text' style={{ width: '300px' }} />
                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <label>Email Address*</label>

                            </div>
                            <div>
                                <input type='email' style={{ width: '300px' }} />
                            </div>

                            <button style={{ width: '300px', height: '40px', marginTop: '20px' }}>LOGIN TO CONTINUE</button>
                            <div style={{ marginTop: '15px' }}>
                                <a style={{ color: '#9A0056', marginLeft: '70px' }}>Forgot Pasword ?</a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

            {/*======== Mine Diamond =========*/}
            <div style={{display:'flex'}}>
                <div style={{ backgroundColor: 'white', width: '380px', height: '500px', padding: '10px' }}>
                    <h6 style={{ marginBottom: '30px', marginTop: '10px' }}>Order Summary</h6>
                    <div style={{ display: 'flex', width: '360px', height: '60px', justifyContent: 'space-between' }}>
                        <div>
                            <img src={p} style={{ width: '50px', height: '50px', border: '1px solid #ddd6cb ', marginLeft: '3px' }} />
                        </div>
                        <div style={{ marginLeft: '20px', width: '350px', height: '50px' }}>
                            <h6 style={{ fontSize: '13px', color: 'black' }}>Maine Diamond Necklace</h6>
                            <h6 style={{ fontSize: '13px', color: 'black', marginTop: '-2px' }}>NKWAV20051</h6>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <div style={{ display: 'flex' }}>
                                <del style={{ display: 'flex' }}> <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                    <p style={{ fontSize: '13px' }}>290,263</p></del>
                            </div>
                            <div style={{ display: 'flex', marginTop: '-13px' }}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '13px' }}>290,263</p>
                            </div>

                        </div>
                    </div>
                    <div style={{ width: '360px', height: '1px', backgroundColor: '#b9b8b6 ', marginTop: '1px' }}></div>

                    <div style={{ display: 'flex', width: '360px', height: '60px', justifyContent: 'space-between' ,marginTop:'20px'}}>
                        <div>
                            <img src={p} style={{ width: '50px', height: '50px', border: '1px solid #ddd6cb ', marginLeft: '3px' }} />
                        </div>
                        <div style={{ marginLeft: '20px', width: '350px', height: '50px' }}>
                            <h6 style={{ fontSize: '13px', color: 'black' }}>Maine Diamond Necklace</h6>
                            <h6 style={{ fontSize: '13px', color: 'black', marginTop: '-2px' }}>NKWAV20051</h6>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <div style={{ display: 'flex' }}>
                                <del style={{ display: 'flex' }}> <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                    <p style={{ fontSize: '13px' }}>290,263</p></del>
                            </div>
                            <div style={{ display: 'flex', marginTop: '-13px' }}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '13px' }}>290,263</p>
                            </div>

                        </div>
                    </div>
                    <div style={{ width: '360px', height: '1px', backgroundColor: '#b9b8b6 ', marginTop: '1px' }}></div>

                    <div style={{ display: 'flex', width: '360px', height: '60px', justifyContent: 'space-between' ,marginTop:'20px'}}>
                        <div>
                            <img src={p} style={{ width: '50px', height: '50px', border: '1px solid #ddd6cb ', marginLeft: '3px' }} />
                        </div>
                        <div style={{ marginLeft: '20px', width: '350px', height: '50px' }}>
                            <h6 style={{ fontSize: '13px', color: 'black' }}>Maine Diamond Necklace</h6>
                            <h6 style={{ fontSize: '13px', color: 'black', marginTop: '-2px' }}>NKWAV20051</h6>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <div style={{ display: 'flex' }}>
                                <del style={{ display: 'flex' }}> <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                    <p style={{ fontSize: '13px' }}>290,263</p></del>
                            </div>
                            <div style={{ display: 'flex', marginTop: '-13px' }}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '13px' }}>290,263</p>
                            </div>

                        </div>
                    </div>
                    <div style={{ width: '360px', height: '1px', backgroundColor: '#b9b8b6 ', marginTop: '1px' }}></div>
                     {/* 2  Stop  Maine Diamond */}
                        
                        {/*--- subtotal start-- */}
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginLeft:'20px'}}>
                            <p>Subtotal</p>
                            <div style={{ display: 'flex', marginTop: '0px' }}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '13px' }}>869,369</p>
                            </div>
                        </div>
                         {/*---2 subtotal start-- */}
                         <div style={{display:'flex',justifyContent:'space-between',marginTop:'-10px',marginLeft:'20px'}}>
                            <p>You Saved</p>
                            <div style={{ display: 'flex', marginTop: '0px' }}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '13px' }}>52,042</p>
                            </div>
                        </div>
                         {/*--- subtotal start-- */}
                         <div style={{display:'flex',justifyContent:'space-between',marginTop:'-10px',marginLeft:'20px'}}>
                            <h6 style={{color:'#9A0056',fontSize:'18px'}}>Total</h6>
                            <div style={{ display: 'flex', marginTop: '0px' ,color:'#9A0056'}}>
                                <i className="bi bi-currency-rupee" style={{ fontSize: '13px' }}></i>
                                <p style={{ fontSize: '16px' }}>817,324</p>
                            </div>
                        </div>
                </div>


             
                 
                
                
            </div>



        </div>
    )
}

export default ClickPlaceMain