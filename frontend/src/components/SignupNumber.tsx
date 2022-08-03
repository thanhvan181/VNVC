
import { async } from '@firebase/util';
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { create } from '../api/number';




const SignupNumber = () => {
    const company = useSelector((state: any) => state.company.company)

    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =  async(dataInput:any) => {
          console.log("datanumber", dataInput)
          dataInput.rank = "thanh vien dong"
          const {data} = await create(dataInput);
          console.log("datanumber", data);





      }
    return (
        <div>
            <Container className='number-container'>
                <div className=" border-top p-4 text-white mb-3 bg-gray">
                    <h1 className="display-6 text-title">Đăng ký thành viên</h1>
                </div>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit(onSubmit)} >
                            <h6 className="text-h5">Thông tin cá nhân</h6>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Họ và Tên(*) </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Họ và tên"
                                    {...register("name", {required: true})}
                                    />
                                    {errors.name && <p>Không được để trống trường này</p>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Ngày sinh (*) </Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder=""
                                    {...register("birthday", {required: true})}
                                    
                                    />
                                </Form.Group>
                                {errors.birthday && <p>Không được để trống trường này</p>}
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Giới tính(*)</Form.Label>
                                    <input {...register("sex")} type="radio" value="male" />
                                    NAM
                                    <br />
                                    <input {...register("sex")} type="radio" value="female" />
                                    NỮ
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Mã khách hàng(Nếu có)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Mã khách hàng"
                                    {...register("code")}
                                    />
                                    
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Điện thoại(*)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                    {...register("phone", {required: true})}
                                    />
                                    {errors.phone && <p>Không được để trống trường này</p>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>CMND/CCCD(*)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="CMND/CCCD"
                                    {...register("cmnd", {required: true})}
                                    />
                                    {errors.cmnd && <p>Không được để trống trường này</p>}
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label> Email(*)</Form.Label>
                                <Form.Control
                                    placeholder="Nhập Email"
                                {...register("email", {required: true})}
                                />
                                {errors.email && <p>Không được để trống trường này</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Địa Chỉ(*)</Form.Label>
                                <Form.Control
                                    placeholder="Nhập địa chỉ liên hệ"
                                {...register("address", {required: true})}
                                />
                                {errors.address && <p>Không được để trống trường này</p>}
                            </Form.Group>

                            <h6 className="text-h5">Địa điểm nhận thẻ</h6>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Trung tâm muốn tiêm </Form.Label>
                                <Form.Select defaultValue="Choose..." {...register("company_id")}>
                                    <option>Choose...</option>
                                    {company &&
                                        company.map((compan: any) => {
                                            return (
                                                <>
                                                    <option>{compan.name}</option>
                                                </>
                                            );
                                        })}
                                </Form.Select>
                            </Form.Group>
                            <p>Lưu ý: Các mục dấu sao không được bỏ trống & phải điền đầy đủ, chính xác</p>
                            <Button variant="primary" type="submit" >
                                Đăng kí
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignupNumber
