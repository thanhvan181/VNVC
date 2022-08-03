import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { loadCategory } from "../features/Website/Category/CategorySlide";
import { getProductinCategory } from "../features/Website/ProductClient/ProductClientSlide";



const VaccineCate = () => {
    const showcate = useSelector((state: any) => state.category.category);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(loadCategory())

        
    }, [])
    const showProductinCategory = (id:any) => {
      console.log("idcate", id);

      dispath(getProductinCategory(id))
    }

    
  return (
    <div className="bg-cate">

      <Container>
          <h1 className="text-title">Danh mục Vaccine tiêm chủng </h1>
        <Row className="row-container">
            {showcate && showcate.map((cateitems:any) => {

                return(
                    <Col className="col-h">
                    <Card style={{ height: '18rem' }}>
                    <Card.Body className="card-bo" >
                    <Card.Title className="title-cate"><a href="#"
                    onClick={() => showProductinCategory(cateitems._id)}
                    
                    >{cateitems.name}</a></Card.Title>
                           

                    </Card.Body>
                   
                    <Card.Img className="img-cate" src="https://www.cowin.gov.in/assets/images/what's_new_on_cowin.svg" />
                    

                    
                  
                    
                       
                      
                      
                    
                   
                    </Card>
                  </Col>

                )
            })}
        
           
        </Row>
      </Container>
    </div>
  );
};

export default VaccineCate;
