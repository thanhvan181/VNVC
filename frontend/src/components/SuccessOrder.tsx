import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'

const SuccessOrder = () => {
    return (
        <div>
                 
    <Container>
  <Row className="justify-content-center">
    {/* <Col xs lg="2">
      1 of 3
    </Col> */}
    <Col md="auto">
      <img src="https://verify.cowin.gov.in/static/media/verify-certificate.29230f43.png" alt="" />
    <h1 className="text-h1">Đặt hàng thành công</h1>
        <p>Quý khách đã đăt hàng thành công .
          
            Kính mời quý khách đến trung tâm Vaxi để được phục vụ và tiêm chủng theo đúng yêu cầu và vui lòng cân nhắc tiêm vào buổi chiều để có không gian thoáng đoãng hơn, không phải chờ đợi. Rất mong được đón tiếp quý khách. Trân trọng
            
        </p>
        <h4 className='text-h1'>Hệ thống trung tâm tiêm chủng</h4>
        <p>Hotline: 0299838820</p>
        <Button variant="success"><a className="text-a" href="dangkytiemchung">Tiếp tục đăt hàng</a></Button>{' '}
        <Button variant="success"><a  className="text-a" href="/">Trở về trang trủ</a></Button>{' '}

    </Col>
    
  </Row>
</Container>
            
        </div>
    )
}

export default SuccessOrder
