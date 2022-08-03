import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import {useState, useEffect} from "react";
import { getproducts } from '../api/product';

interface Props {
    
}

const VacineProduct = (props: Props) => {

    const [vacineproduct, setVacineProduct]  = useState([])
    useEffect(() => {
       const loadVacineProduct = async () => {
        //    const {data} = await getproducts();
        //    setVacineProduct(data);



       }
       loadVacineProduct();
    }, [])
    return (
        <div>
            <h1 className='text-title'>Dịch vụ tiêm Vacine Theo Gói</h1>
             <CardGroup className="card-product">
              {vacineproduct &&
                vacineproduct.map((productitem: any) => (
                  <div className="product-container">
                    <Card className='product-details'>
                      <Card.Img
                        variant="top"
                        src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                      />
                      <Card.Body>
                        <Card.Title>
                          <a href={`/vaccine/${productitem.id}`}>
                            {productitem.name}
                          </a>
                        </Card.Title>
                        <Card.Text>
                          <span>Phòng bệnh: </span>
                          <p>{productitem.description}</p>
                          <span>{productitem.price}</span>
                        </Card.Text>
                      </Card.Body>
                      <Button variant="success" className="btn-pro">
                        Chọn Mua
                      </Button>
                    </Card>
                  </div>
                ))}
            </CardGroup>
            
        </div>
    )
}

export default VacineProduct
