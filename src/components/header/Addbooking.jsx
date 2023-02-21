import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Addbooking extends Component
{
    state = {
        name: '',
        number: '',
        package: '',
        pax: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveBooking = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-booking', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this,this.setState({
                name: '',
                number: '',
                package: '',
                pax: '',
            });
        }
    }


    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add Bookings
                               </h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.saveBooking} >
                                    <div className='form-group mb-3'>
                                        <label>Name</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Contact Number</label>
                                        <input type='text' name='number' onChange={this.handleInput} value={this.state.number} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Package</label>
                                        <input type='text' name='package' onChange={this.handleInput} value={this.state.package} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>No of Pax.</label>
                                        <input type='text' name='pax' onChange={this.handleInput} value={this.state.pax} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-success'>Save Booking</button>
                                    </div>
                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Addbooking