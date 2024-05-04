import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';

function MoreDetails() {
  const [docData, setDocData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const base_url = 'http://localhost:4000';

  const fetchDoc = async () => {
    try {
      const result = await axios.get(`${base_url}/${id}`);
      setDocData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., set an error state or display an error message to the user.
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Row>
          <Col className='m-5'>
            <MDBCard alignment='center'>
              <MDBCardBody className='m-5'>
                <img
                  src="https://th.bing.com/th/id/OIP.Lbsbt8CA5M6-1lypd7JjogHaFG?w=680&h=468&rs=1&pid=ImgDetMain"
                  style={{ height: '130px' }}
                  alt=""
                />
                <MDBCardTitle style={{ color: '#3c92de', fontWeight: '1000', fontSize: '30px' }}>
                  ({docData.hospital})
                </MDBCardTitle>
                <MDBCardText style={{ color: 'black' }}>
                  ({docData.name}) ({docData.specialty}) <br />
                  Phone: ({docData.phone})
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className='text-center m-5 py-5' style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '15px' }}>
            Address: {docData.address}
            <br />
            <br />
            Available Days: {docData.available_days}
            <br />
            <br />
            Available time: {docData.available_hours}
            <br />
            <br />
            Email: {docData.email}
          </Col>
        </Row>
      )}
      <h1 className='text-center'>Reviews</h1>
      <Row className='px-5' style={{ opacity: '90%' }}>
        {docData.reviews?.map(item => (
          <Card className='my-4' key={item.id} body>
            <h5>{item.patient_name}</h5>
            <h6>({item.date})</h6>
            Rating: <i className="fa-solid text-warning fa-star"></i>
            {item.rating}
            <br />
            <br />
            <p>
              Comments: <br />
              {item.comments}
            </p>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default MoreDetails;
