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
            Là trung tâm tiêm chủng cho trẻ em và người lớn chất lượng hàng đầu,
            VNVC đang mở rộng hệ thống các trung tâm giúp mang chất lượng dịch
            vụ tốt nhất với giá cực kỳ ưu đãi đến người dân trên khắp cả nước.
            Tại hệ thống tiêm chủng VNVC, chúng tôi luôn mong muốn đem lại sự
            thuận tiện, thoải mái và yên tâm cho khách hàng. Khách hàng sẽ được
            Bác sĩ chuyên khoa kiểm tra sức khỏe và tư vấn các mũi tiêm phù hợp
            với lứa tuổi. Đội ngũ điều dưỡng được đào tạo chuyên biệt về tiêm
            chủng cùng với sự chu đáo và nhiệt tình chăm sóc trẻ. Phòng tiêm với
            đầy đủ các trang thiết bị y tế đạt chuẩn cao cấp. Không gian phòng
            chờ trước tiêm và sau tiêm rộng rãi, thoáng mát, đầy màu sắc cuốn
            hút, tạo sự thân thiện với trẻ. Ngoài ra mẹ và bé còn có khu vực
            riêng cho con bú, phòng thay tã, phòng pantry… để con được thoải mái
            như đang ở nhà. Với cơ sở vật chất và chất lượng dịch vụ 5 sao, giá
            vắc xin tại VNVC cực kỳ cạnh tranh và đặc biệt, chỉ tính phí vắc
            xin, các tiện ích kèm theo đều được miễn phí như: khám sàng lọc
            trước tiêm, gửi xe, khu vui chơi, nước uống, wifi, các phòng riêng
            cho mẹ và bé...
          </p>
        </div>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col sm={8}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-custom-components">
                Tìm theo khu vực
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
                          Xem bản đồ trên google
                        </a>{" "}
                      </div>
                      {/* <div className="text-right">
                        <span
                          className="timtrenbado"
                          data-title="VNVC Đông Anh"
                          data-embed={company.mapUrl}
                          onClick={hanlonClickCompany}
                        >
                          Tìm trên bản đồ
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
