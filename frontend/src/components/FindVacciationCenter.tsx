import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { listCompany, readCompanyincity } from "../api/company";
import { listCity } from "../api/city"

interface Props { }

const FindVacciationCenter = (props: Props) => {
  const [companies, setCompany] = useState([]);
  const [mapUrl, setMapUrl] = useState('')
  const [city, setCity] = useState([]);

  useEffect(() => {
    const loadDataCompany = async () => {
      const { data } = await listCompany();
      setCompany(data);
      console.log("Data", data);
    };
    loadDataCompany();
    const loadCity = async () => {
      const { data } = await listCity();
      console.log("datacity", data)
      setCity(data)

    }
    loadCity()
  }, []);

  const hanlonClickCompany = (e: any) => {
    console.log(e.target.dataset.embed)
    setMapUrl(e.target.dataset.embed);

  }
  const hanldeClickCity = async (id: any) => {
    const { data } = await readCompanyincity(id);
    setCompany(data);

  }

  return (
    <div>
      <Container className="content-search">
        <Row className="col6">
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-kham-sang-loc-truoc-tiem-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/img_1-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-check-in-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
        </Row>
        <Row className="col6">
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-tiem-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-sanh-cho-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
          <div>
            <Col>
              <img
                src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-khu-vui-choi-1.png"
                width={400}
                height={300}
              />
            </Col>
          </div>
        </Row>
        <div>
          <p>
            L?? trung t??m ti??m ch???ng cho tr??? em v?? ng?????i l???n ch???t l?????ng h??ng ?????u,
            VNVC ??ang m??? r???ng h??? th???ng c??c trung t??m gi??p mang ch???t l?????ng d???ch
            v??? t???t nh???t v???i gi?? c???c k??? ??u ????i ?????n ng?????i d??n tr??n kh???p c??? n?????c.
            T???i h??? th???ng ti??m ch???ng VNVC, ch??ng t??i lu??n mong mu???n ??em l???i s???
            thu???n ti???n, tho???i m??i v?? y??n t??m cho kh??ch h??ng. Kh??ch h??ng s??? ???????c
            B??c s?? chuy??n khoa ki???m tra s???c kh???e v?? t?? v???n c??c m??i ti??m ph?? h???p
            v???i l???a tu???i. ?????i ng?? ??i???u d?????ng ???????c ????o t???o chuy??n bi???t v??? ti??m
            ch???ng c??ng v???i s??? chu ????o v?? nhi???t t??nh ch??m s??c tr???. Ph??ng ti??m v???i
            ?????y ????? c??c trang thi???t b??? y t??? ?????t chu???n cao c???p. Kh??ng gian ph??ng
            ch??? tr?????c ti??m v?? sau ti??m r???ng r??i, tho??ng m??t, ?????y m??u s???c cu???n
            h??t, t???o s??? th??n thi???n v???i tr???. Ngo??i ra m??? v?? b?? c??n c?? khu v???c
            ri??ng cho con b??, ph??ng thay t??, ph??ng pantry??? ????? con ???????c tho???i m??i
            nh?? ??ang ??? nh??. V???i c?? s??? v???t ch???t v?? ch???t l?????ng d???ch v??? 5 sao, gi??
            v???c xin t???i VNVC c???c k??? c???nh tranh v?? ?????c bi???t, ch??? t??nh ph?? v???c
            xin, c??c ti???n ??ch k??m theo ?????u ???????c mi???n ph?? nh??: kh??m s??ng l???c
            tr?????c ti??m, g???i xe, khu vui ch??i, n?????c u???ng, wifi, c??c ph??ng ri??ng
            cho m??? v?? b??...
          </p>
        </div>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col sm={8}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-custom-components">
                T??m theo khu v???c
              </Dropdown.Toggle>

              <Dropdown.Menu >
                {city && city.map((ci: any) => {
                  return (
                    <>
                      <Dropdown.Item eventKey="1"
                        onClick={() => hanldeClickCity(ci._id)}
                      >{ci.name}</Dropdown.Item>
                    </>



                  )
                })}

              </Dropdown.Menu>
            </Dropdown>

            {companies &&
              companies.map((company: any) => {
                console.log("company",companies )
                return (
                  <>

                    <div className="item_address">
                      <div className="title_chinhanh">{company.name}:</div>
                      <div className="address_chinhanh">
                        {company.address}
                        <br />
                        <a
                          rel="no-follow"
                          className="small"
                          target="_blank"
                          href={company.mapUrl}
                        >
                          Xem b???n ????? tr??n google
                        </a>{" "}
                      </div>
                      {/* <div className="text-right">
                        <span
                          className="timtrenbado"
                          data-title="VNVC ????ng Anh"
                          data-embed={company.mapUrl}
                          onClick={hanlonClickCompany}
                        >
                          T??m tr??n b???n ?????
                        </span>
                      </div> */}
                    </div>
                  </>
                );
              })}
          </Col>

          <Col sm={4}>
            <iframe
              src={mapUrl}
              width="400"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>

      <hr />
    </div>
  );
};

export default FindVacciationCenter;
