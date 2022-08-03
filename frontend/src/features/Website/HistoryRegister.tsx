import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listHistoryDetails } from './Register/RegisterSlide'
import { readoneInjection } from '../Admin/InjectionPark/InjectionPark'
// import { historyDetails } from './Register/RegisterSlide'


const HistoryRegister = () => {
    const dispatch = useDispatch()
    const users = useSelector((state:any) => state.user.userInfo);
    // console.log("user", users)

    const iduser = users._id;
    // console.log("idsuer", iduser)
    const resgisterdetails  = useSelector((state:any) => state.register.resgiter)
    const idinjection = resgisterdetails.map((i:any) => i.product_injection)
    console.log("injection", idinjection);
    
    console.log("register", resgisterdetails)
    useEffect(() => {
        dispatch(listHistoryDetails(iduser))
        
       
    }, [iduser])
    useEffect(() => {
        // dispatch(readoneInjection(resgisterdetails.))

    },[])
    

  return (
    

      <div className="card1 mt-50 mb-50">
          
        <div className="col d-flex"><span className="text-muted" id="orderno"></span></div>
        <div className="gap">
       
          <div className="col-2 d-flex mx-auto">
         
        
          </div>
          <div className="title mx-auto"> Lịch sử đăng ký tiêm </div>
        </div>
     
       
        <div className="main"> 
        <div className="row row-main">
        <h2 className='text-h5'>Thông tin Vaccine đã đăng ký</h2>
            
                {/* <div className="col-3"> <img className="img-fluid" src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${item.image}`} /> </div> */}
                <div className="col-6">
                  <div className="row d-flex">
                    <p><b></b></p>
                  </div>
                  <div className="row d-flex">
                    <p className="text-muted"></p>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <p><b></b></p>
                </div>
              </div>


          <hr />
          {
              resgisterdetails && resgisterdetails.map((item:any) => {

                  return (
                    <div className="total">
                    <h2 className='text-h5'>Thong tin Đăng ký Vaccine</h2>
                    <div className="row">
                      <div className="col"> <b>Tên: </b> </div>
                      <div className="col d-flex justify-content-end"> <b>{item.name}</b> </div>
                    </div>
                    <div className="row">
                      <div className="col"> <b>Ngày sinh: </b> </div>
                      <div className="col d-flex justify-content-end"> <b>{item.birthday.slice(0,10)}</b> </div>
                    </div>
                    <div className="row">
                      <div className="col"> <b>Địa chỉ: </b> </div>
                      <div className="col d-flex justify-content-end"> <b>{item.address}</b> </div>
                    </div>
                    <div className="row">
                      <div className="col"> <b>Tên người thân liên hệ: </b> </div>
                      <div className="col d-flex justify-content-end"> <b>{item.contact_person_name}</b> </div>
                    </div>
                    <div className="row">
                      <div className="col"> <b>Số điện thoại: </b> </div>
                      <div className="col d-flex justify-content-end"> <b>{item.relativeship_phone}</b> </div>
                    </div>
                  
                 
                  </div>
                      
                  )
              })
               
          }
        
        </div>
      </div>

   
  )
}

export default HistoryRegister