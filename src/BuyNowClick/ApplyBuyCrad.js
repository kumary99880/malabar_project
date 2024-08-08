import React from 'react'
import { Link } from 'react-router-dom'

function ApplyBuyCrad() {
    return (
        <>
            <div>
                <div style={{
                    backgroundColor: 'white',
                    margin: '-20px 10px 0px 90px', padding: '30px 10px', width: '78%', height: '160px'
                    , border: '1px solid #afaeac '
                }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid red', borderRadius: '50%' }}>
                            <i class="bi bi-percent" style={{ fontSize: '10px', marginTop: '-30px' }}></i>

                        </div>
                    </div>
                    <div style={{ marginLeft: '30px', marginTop: '-20px' }}>
                        <h4 style={{ fontSize: '15px' }}>Apply Coupen Code</h4>
                    </div>
                    <div style={{ display: 'flex', marginTop: '26px' }}>
                        <div style={{ display: 'flex' }}>
                            <input type='text' name='text' style={{ padding: '5px 20px' }} />
                            <button style={{ borderRadius: '0px 8px 8px 0px' }}>Apply</button>
                        </div>
                    </div>
                </div>


                {/*========= Order Summary ========== */}

                <h6 style={{ marginLeft: '85px', marginTop: '20px' }}>Order Summary</h6>

                <div style={{
                    backgroundColor: 'white',
                    margin: '40px 10px 0px 90px', padding: '30px 20px', width: '78%', height: '260px'
                    , border: '1px solid #afaeac '
                }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Subtaotal :</p>
                        <div >
                            <p>
                                <i className="bi bi-currency-rupee"></i> 869,369

                            </p>
                        </div>
                    </div>
                    {/* ======Khli Div =====*/}
                    <div style={{ width: '320px', height: '1px', backgroundColor: '#ebeae8 ', marginTop: '-3px' }}></div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                        <p>You Saved :</p>
                        <div >
                            <p>
                                -<i className="bi bi-currency-rupee"></i> 52,042

                            </p>
                        </div>
                    </div>

                    <div style={{ width: '320px', height: '1px', backgroundColor: '#ebeae8 ', marginTop: '-3px' }}></div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <h6>TOTAL :</h6>
                        <div >
                            <p>
                                <i className="bi bi-currency-rupee"></i> 817,327

                            </p>
                        </div>
                    </div>
                    <Link to='/HomePlace'>
                        <button style={{ padding: '10px 20px', width: '330px' }}>PLACE ORDERED</button>

                    </Link>

                </div>

            </div>
        </>
    )
}

export default ApplyBuyCrad