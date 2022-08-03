import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

interface Props {
    
}

const VacsinReviewtwo = (props: Props) => {
    return (
        <div className='container-two'>
             <Container >
                <Row className='row-container'>
                <Col>
                        <h1 className='text-h1'>
                        Liều lượng Đề phòng và Tiêm chủng cho Trẻ em

                        </h1>
                        <p>Bảo vệ Người cao tuổi và Trẻ em của chúng ta. Liều đề phòng có sẵn cho NVYT / FLW đã được tiêm chủng đầy đủ và Người cao tuổi (60 tuổi trở lên) mà không mắc bệnh đi kèm sau 39 tuần kể từ liều thứ hai. Công dân từ 60 tuổi trở lên và có các bệnh đồng mắc, nên dùng các liều thuốc thận trọng, chỉ sau khi được tư vấn y tế. Ngoài ra, đưa Con bạn (12-18 tuổi) đi tiêm phòng là điều tốt nhất bạn có thể làm để bảo vệ con mình chống lại COVID-19. Cả trực tuyến và đi bộ đều có sẵn.</p>
                        <Button variant="success">Đăt lịch </Button>


                    </Col>
                    <Col>
                        <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/Precaution_dose.svg" />
                    </Col>
                   
                </Row>


            </Container>
            
        </div>
    )
}

export default VacsinReviewtwo
