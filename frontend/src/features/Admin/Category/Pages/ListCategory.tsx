import React from "react";
import { Col, Row } from "react-bootstrap";
import TableCategory from "../Components/TableCategory";

const ListCategory = () => {
  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col  xl={24}>
          <TableCategory />
        </Col>
      </Row>
    </div>
  );
};

export default ListCategory;
