import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
type Props = {}

const VacsinReviewthree = (props: Props) => {
    return (
        <div>
            <Container >
                <Row className='row-container'>
                    <Col>
                        <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/share_illustration.svg" />
                    </Col>
                    <Col>
                        <h1 className='text-h1'>

                            Chia sẻ tình trạng tiêm chủng của bạn


                        </h1>
                        <p>Trở thành một chiến binh! Nếu bạn đã được tiêm chủng đầy đủ hoặc một phần, giờ đây bạn có thể chia sẻ tình trạng tiêm chủng của mình trong mạng xã hội của bạn. Hãy khuyến khích bạn bè và những người theo dõi của chúng ta tham gia trận chiến chống lại COVID-19 của VIETNAM..</p>
                        <Button variant="success">Chia Sẻ</Button>


                    </Col>
                </Row>


            </Container>


        </div>
    )
}

export default VacsinReviewthree