import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'


const InfoCenter = () => {
    return (
        <div className='b-info'>
           <Container >
               <h1 className='text-title'>ABHA (ID sức khỏe) và các lợi ích của nó</h1>
               <p>ABHA (trước đó được gọi là Health ID) là từ viết tắt của Ayushman Bharat Health Account. Sử dụng ABHA (ID sức khỏe) là bước đầu tiên hướng tới việc tạo hồ sơ sức khỏe kỹ thuật số an toàn và hiệu quả hơn cho bạn và gia đình bạn. Nó cho phép bạn tương tác với các nhà cung cấp dịch vụ chăm sóc sức khỏe tham gia và cho phép bạn nhận các báo cáo phòng thí nghiệm kỹ thuật số, đơn thuốc và chẩn đoán của bạn một cách liền mạch từ các chuyên gia chăm sóc sức khỏe và nhà cung cấp dịch vụ y tế đã được xác minh.</p>
                <Row >
                    <Col>
                    <a href="https://www.youtube.com/watch?v=5ZvLR1DcNBo">
                    <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/abha-preview.jpg" />
                    </a>
                  
                       
                    </Col>
                    <Col>
                    <a href="https://www.youtube.com/watch?v=5ZvLR1DcNBo">
                    <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/abha-preview.jpg" />

                    </a>
                   


                    </Col>
                </Row>


            </Container>

            
        </div>
    )
}

export default InfoCenter
