import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Bookings extends Component 
{   

    state = {
        student: [],
        loading: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/bookings');
        // console.log(res);
        if(res.data.status === 200)
        {
            this.setState({
                booking: res.data.booking,
                loading:false,  
            });
        }
    }

    render() {

        var booking_HTMLTABLE = "";
        if(this.state.loading)
        {
            booking_HTMLTABLE = <tr><td colSpan="8"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            booking_HTMLTABLE = 
            this.state.booking.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.package}</td>
                        <td>{item.pax}</td>                        
                        <td>
                            <Link to={`edit-booking/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type='button' className="btn btn-danger btn-sm" >Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Bookings
                                </h4>                        
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Contact Number</th>
                                            <th>Package</th>
                                            <th>No. of Pax</th>                                            
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {booking_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}

export default Bookings