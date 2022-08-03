import React from "react";
import { Card, CardGroup } from "react-bootstrap";

interface Props {}

const VacsinSteps = (props: Props) => {
  return (
    <div className="bg-step">
      <h1 className="text-title">Tiêm chủng trong 3 bước dễ dàng</h1>
      <CardGroup className="vacsinsteps">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.cowin.gov.in/assets/images/Step_1.svg"
          />
          <Card.Body>
            <Card.Title className="text-title"> BƯỚC 1: KHAI BÁO Y TẾ, ĐO THÂN NHIỆT</Card.Title>
            <Card.Text className="text-bg">
              Tiếp nhận và phân loại đối tượng đến tiêm chủng tại nơi đón tiếp
              Hướng dẫn, kiểm tra đối tượng tiêm chủng và người nhà đi cùng thực
              hiện khai báo y tế điện tử Phát khẩu trang cho đối tượng tiêm
              chủng (Nếu đối tượng chưa có) Thực hiện đo thân nhiệt cho đối
              tượng tiêm chủng.
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.cowin.gov.in/assets/images/Step_2.svg"
          />
          <Card.Body>
            <Card.Title className="text-title"> BƯỚC 2: HOÀN THIỆN PHIẾU ĐỒNG Ý TIÊM CHỦNG</Card.Title>
            <Card.Text className="text-bg">
              Cung cấp phiếu đồng ý tiêm chủng vắc xin phòng COVID-19 theo mẫu
              tại phụ lục 2 ban hành kèm theo hướng dẫn này để người được tiêm
              chủng đọc, điền thông tin và ký nếu đồng ý tiêm chủng.
            </Card.Text>
          </Card.Body>
        
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.cowin.gov.in/assets/images/Step_3.svg"
          />
          <Card.Body>
            <Card.Title className="text-title">
              {" "}
              BƯỚC 3: HOÀN THIỆN SÀNG LỌC, TƯ VẤN TRƯỚC KHI TIÊM
            </Card.Title>
            <Card.Text className="text-bg">
              Sàng lọc, tư vấn cho đối tượng tiêm chủng, người giám hộ về tác
              dụng, lợi ích của vắc xin Giải thích những phản ứng có thể gặp sau
              tiêm chủng Thông báo cho đối tượng tiêm chủng, người giám hộ về
              tác dụng, liều lượng, đường dùng của loại vắc xin được tiêm chủng
              Tư vấn các thông tin về theo dõi sau tiêm chủng vắc xin 
            </Card.Text>
          </Card.Body>
        
        </Card>
      </CardGroup>
    </div>
  );
};

export default VacsinSteps;
