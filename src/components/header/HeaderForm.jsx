import React from "react";
import Form from "react-bootstrap/Form";

const HeaderForm = () => {
  return (
    <div className="p-3">
      <Form className="text-black">
        <Form.Group className="mb-3 pe-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Juan" />
        </Form.Group>
        <Form.Group className="mb-3 pe-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Dela Cruz" />
        </Form.Group>
        <div className="mb-3 row pe-3">
          <Form.Group className="col-md-6">
            <Form.Label>From</Form.Label>
            <Form.Control type="date" name="from" />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>To</Form.Label>
            <Form.Control type="date" name="from" />
          </Form.Group>
        </div>
        <Form.Label>Destination</Form.Label>
        <Form.Select aria-label="Destination" className="mb-3">
          <option>Choose...</option>
          <option>Baguio City</option>
          <option>Sagada</option>
          <option>Anawangin Cove</option>
          <option>Ilocos</option>
          <option>La Union</option>
        </Form.Select>
        <Form.Label>No. of PAX</Form.Label>
        <Form.Select aria-label="No. of PAX" className="mb-3">
          {[...Array(14).keys()].map((__, index) => (
            <option>{index + 1}</option>
          ))}
        </Form.Select>
      </Form>
    </div>
  );
};

export default HeaderForm;
