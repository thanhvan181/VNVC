import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

interface Props {

}

const VacsinReview = (props: Props) => {
    return (
        <div>
            <Container >
                <Row className='row-container'>
                    <Col>
                        <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/corbevax_img.svg" />
                    </Col>
                    <Col>
                        <h1 className='text-h1'>
                            Thuốc chủng ngừa Corbevax cho trẻ em

                        </h1>
                        <p>Trẻ em không chỉ sống sót mà còn sống an toàn trong đại dịch COVID-19 bằng cách tiêm phòng. Corbevax là vắc xin duy nhất có sẵn cho Trẻ em từ 12-14 tuổi. Còn khoảng cách 28 ngày sau khi tiêm liều Corbevax đầu tiên. Cả trực tuyến và đi bộ đều có sẵn.</p>
                        <Button variant="success">Đăt lịch </Button>


                    </Col>
                </Row>


            </Container>

        </div>
    )
}

export default VacsinReview
