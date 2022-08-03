import React from "react";
import { Card, Figure } from "react-bootstrap";

const AddProduct = () => {
  const cartFill = JSON.parse(localStorage.getItem("cartItems") as any);
  // console.log("maycart", cartFill);
  return (
    <div className="add_pr">
      <h4 className="text-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-card-checklist"
          viewBox="0 0 16 16"
        >
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
        </svg>
        DANH SÁCH VACCINE CHỌN MUA
      </h4>
      {cartFill &&
        cartFill.map((item: any) => {
          return (
            <>
              <Card border="gray">
                <Card.Img  style={{ width: '18rem', textAlign: "center" }} src="https://upload.wikimedia.org/wikipedia/commons/3/30/Animaci%C3%B3n_de_la_vacuna_Pfizer.png"></Card.Img>

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Title>{item.price}</Card.Title>
                  <Card.Text>{item.description.slice(0, 30)}</Card.Text>
                </Card.Body>
              </Card>
              <br />
            </>
          );
        })}
    </div>
  );
};

export default AddProduct;
