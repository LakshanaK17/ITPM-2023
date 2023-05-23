import { useEffect, useState } from "react";
import axios from "axios";

function OrganizationMgmt() {
  // #1 - create foodAidRequests state
  // #2 - create ongoingDonations state
  // #3 - create ongoingDeliveries state

  //States to store Data
  const [stationeryRequests, setStationeryRequests] = useState([]);
  const [ongoingDonations, setOngiongDonations] = useState(null);
  const [ongoingDeliveries, setOngiongDeliveries] = useState(null);
  const [updateStationeryRequests, setUpdateStationeryRequests] = useState({
    _id: null,
    productno: "",
    productname: "",
    productdescription: "",
    filename: "",
  });

  //useEffects
  //Get all Food Aid Request
  useEffect(() => {
    fetchStationeryRequests();
  }, []);

  //Get all Ongoing Donations
  useEffect(() => {
    fetchStationeryRequestsById();
  }, []);

  //Get all Ongoing Deliveries
  // useEffect(() => {
  //   fetchOngoingDeliveries();
  // }, []);

  //Function to fetch Stationery Requests

  const fetchStationeryRequests = async () => {
    //Fetch Stationery Requests
    await axios
      .get("http://localhost:3600/admin/getAllstationary")
      .then((res) => {
        console.log(res, "+======================correct");
        setStationeryRequests(res.data.data);
      })
      .catch((err) => {
        console.log(
          err,
          "=================================================errrr"
        );
      });

    //Set to State
  };

  //Function to fetch Ongoing Donations (Self-Delivery)

  const fetchStationeryRequestsById = async (_id) => {
    //Fetch Ongoing Donations
    const response = await axios.get(
      `http://localhost:3600/admin/getstationarybyid/${_id}`
    );

    setStationeryRequests(response.data);
  };

  // //Function to fetch Ongoing Deliveries

  // const fetchOngoingDeliveries = async () => {

  //   //Fetch Ongoing Donations
  //   const response = await axios.get("http://localhost:3600/volunteer/delivery-jobs");

  //   setOngiongDeliveries(response.data);

  // }

  //Delete Food Aid Request Function

  const deleteRequest = async (_id) => {
    //Delete the Food Aid Request
    const response = await axios.delete(
      `http://localhost:3600/deletetationarybyid/${_id}`
    );

    if (response) {
      fetchStationeryRequests();
    }
  };

  //Delete Ongoing Self Delivery Function
  // const deleteSelfDelivery = async (_id) =>{

  //   const response = await axios.delete(`http://localhost:3600/donor/${_id}`)

  // if (response) {
  //   console.log(response);
  //   fetchOngoingDonations();

  // }

  // }

  //Delete Ongoing Volunteer Delivery Function
  // const deleteVolunteerDelivery = async (_id) =>{

  //   const response = await axios.delete(`http://localhost:3600/volunteer/delivery-jobs/${_id}`)

  // if (response) {
  //   console.log(response)
  //   fetchOngoingDeliveries();

  // }

  // }

  //Confirm Delivery of Ongoing Self Delivery  - Function
  // const confirmSelfDonation = async (ongoingDonation) =>{

  //   const completedDonation = {

  //     orgId:ongoingDonation.orgId,
  //     orgName:ongoingDonation.orgName,
  //     requestTitle:ongoingDonation.requestTitle,
  //     population:ongoingDonation.population,
  //     dueDate:ongoingDonation.dueDate,
  //     orgOtherDetails:ongoingDonation.orgOtherDetails,
  //     orgLocation:ongoingDonation.orgLocation,
  //     orgTelephone:ongoingDonation.orgTelephone,
  //     donorId:ongoingDonation.donorId,
  //     donorName:ongoingDonation.donorName,
  //     donationSize:ongoingDonation.donationSize,
  //     deliveryMethod:ongoingDonation.deliveryMethod,
  //     donorTelephone:ongoingDonation.donorTelephone,
  //     donorOtherDetails:ongoingDonation.donorOtherDetails,
  //     donorLocation:ongoingDonation.donorLocation
  //   }

  // // Post the donation to Completed Donation Collection
  // const postResponse = await axios.post("http://localhost:4000/donors/completed",completedDonation);
  // console.log(postResponse);

  // //  Check if Post Successful

  // //  If Post Successful - Delete Ongoing Self Delivery Record
  // if (postResponse){

  //   const deleteResponse = await axios.delete(`http://localhost:4000/donor/${ongoingDonation._id}`);
  //   console.log(deleteResponse);

  //   // If delete Successful
  //   // Rerun FetchOngoingDonations function
  //   if(deleteResponse){

  //     alert("Donation Successfully Completed");
  //     fetchOngoingDonations();
  //   }

  // }

  // }

  //Confirm Delivery of Ongoing Volunteer Delivery  - Function
  // const confirmVolunteerDonation = async (ongoingDelivery) =>{

  //   const completedDonation = {

  //     orgId:ongoingDelivery.orgId,
  //     orgName:ongoingDelivery.orgName,
  //     requestTitle:ongoingDelivery.requestTitle,
  //     population:ongoingDelivery.population,
  //     dueDate:ongoingDelivery.dueDate,
  //     orgOtherDetails:ongoingDelivery.orgOtherDetails,
  //     orgLocation:ongoingDelivery.orgLocation,
  //     orgTelephone:ongoingDelivery.orgTelephone,
  //     donorId:ongoingDelivery.donorId,
  //     donorName:ongoingDelivery.donorName,
  //     donationSize:ongoingDelivery.donationSize,
  //     deliveryMethod:ongoingDelivery.deliveryMethod,
  //     donorTelephone:ongoingDelivery.donorTelephone,
  //     donorOtherDetails:ongoingDelivery.donorOtherDetails,
  //     donorLocation:ongoingDelivery.donorLocation,
  //     volunteerId:ongoingDelivery.volunteerId,
  //     volunteerName:ongoingDelivery.volunteerName,
  //     NIC:ongoingDelivery.NIC,
  //     vehicleNo:ongoingDelivery.vehicleNo,
  //     volunteerTelephoneNo:ongoingDelivery.volunteerTelephoneNo
  //   }

  //   // Post the donation to Completed Donation Collection
  // const postResponse = await axios.post("http://localhost:4000/donors/completed",completedDonation);
  // console.log(postResponse);

  // //  Check if Post Successful

  // //  If Post Successful - Delete Ongoing Self Delivery Record
  // if (postResponse){

  //   const deleteResponse = await axios.delete(`http://localhost:4000/volunteer/delivery-jobs/${ongoingDelivery._id}`);
  //   console.log(deleteResponse);

  //   // If delete Successful
  //   // Rerun FetchOngoingDonations function
  //   if(deleteResponse){

  //     alert("Donation Successfully Completed");
  //     fetchOngoingDeliveries();
  //   }

  // }

  // }

  //Update Food Aid Request

  //#1 - get the Food Aid Request Details to a State
  //#2 - Handle Update Field Change
  //#3 - create submit function

  const toggleUpdateRequest = (stationeryRequest) => {
    console.log(stationeryRequest);

    setUpdateStationeryRequests({
      _id: stationeryRequest._id,
      productno: stationeryRequest.productno,
      productname: stationeryRequest.productname,
      productdescription: stationeryRequest.productdescription,
      filename: stationeryRequest.filename,
    });
  };

  //Handle Update Field Change
  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateStationeryRequests({
      ...updateStationeryRequests,
      [name]: value,
    });
    console.log(updateStationeryRequests);
  };

  // Update Food Aid Request

  const updateStationeryRequest = async (e) => {
    e.preventDefault();

    const stationeryDetails = {
      productno: updateStationeryRequests.productno,
      productname: updateStationeryRequests.productname,
      productdescription: updateStationeryRequests.productdescription,
      filename: updateStationeryRequests.filename,
    };

    //Send the update request
    const response = await axios.put(
      `http://localhost:3600/admin/updatestationary/${updateStationeryRequests._id}`,
      stationeryDetails
    );
    console.log(response);

    //Update the Delivery Jobs List

    if (response) {
      fetchStationeryRequests();

      //Update the updateDelivery State
      setUpdateStationeryRequests({
        _id: null,
        productno: "",
        productname: "",
        productdescription: "",
        filename: "",
      });
    }
  };

  return (
    <div>
      <h2 id="page-title">Stationery Management</h2>
      <div className="home home-margin">
        <div className="workouts">
          <h3>List of Stationeries</h3>
          {JSON.stringify(stationeryRequests)}
          {stationeryRequests.length > 0 &&
            stationeryRequests &&
            stationeryRequests.map((stationeryRequest) => (
              <div className="workout-details" key={stationeryRequest._id}>
                <h4>{stationeryRequest.requestTitle}</h4>
                {/* <label>Product Number</label>
                <input
                  type="text"
                  name="productNo"
                  value={stationeryRequest.productno}
                  onChange={(e) =>
                    handleUpdateFieldChange(e, stationeryRequest._id)
                  }
                /> */}
                <p>
                  <strong>Product Number:</strong> {stationeryRequest.productno}
                </p>
                <p>
                  <strong>Product Name:</strong> {stationeryRequest.productname}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {stationeryRequest.productdescription}
                </p>
                <p>
                  <strong>Image:</strong> {stationeryRequest.filename}
                </p>
                <span>
                  <div>
                    <button
                      onClick={() => deleteRequest(stationeryRequest._id)}
                    >
                      Delete Stationery
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => toggleUpdateRequest(stationeryRequest)}
                    >
                      Edit
                    </button>
                  </div>
                </span>
              </div>
            ))}
          {/* <h3>Ongoing Donations</h3> */}
          {/* {ongoingDonations && ongoingDonations.map(ongoingDonation => (
    <div className="workout-details ongoing-donation" key={ongoingDonation._id}>
      <h4>{ongoingDonation.requestTitle}</h4>
      <p><strong>Population : </strong>{ongoingDonation.population}</p>
      <p><strong>Due Date : </strong>{ongoingDonation.dueDate}</p>
      <p><strong>Donor Name : </strong>{ongoingDonation.donorName}</p>
      <p><strong>Donor Telephone : </strong>{ongoingDonation.donorTelephone}</p>
      <p><strong>Donor Location : </strong>{ongoingDonation.donorLocation}</p>
      <p><strong>Extra Details : </strong>{ongoingDonation.donorOtherDetails}</p>
      <span>
        <div><button onClick={() =>deleteSelfDelivery(ongoingDonation._id)}>Delete Donation</button></div>
        <div><button onClick={() =>confirmSelfDonation(ongoingDonation)}>Confirm Delivery</button></div>
      </span>
    </div>
    ))} */}

          {/* <h3>Ongoing Deliveries</h3> */}

          {/* {ongoingDeliveries && ongoingDeliveries.map(ongoingDelivery => (
    <div className="workout-details ongoing-delivery" key={ongoingDelivery._id}>
      <h4>{ongoingDelivery.requestTitle}</h4>
      <p><strong>Population : </strong>{ongoingDelivery.population}</p>
      <p><strong>Due Date : </strong>{ongoingDelivery.dueDate}</p>
      <p><strong>Donor : </strong>{ongoingDelivery.donorName}</p>
      <p><strong>Donor Telephone : </strong>{ongoingDelivery.donorTelephone}</p>
      <p><strong>Donor Location : </strong>{ongoingDelivery.donorLocation}</p>
      <p><strong>Extra Details : </strong>{ongoingDelivery.donorOtherDetails}</p>
      <p><strong>Deliverer : </strong>{ongoingDelivery.volunteerName}</p>
      <p><strong>Deliverer Telephone : </strong>{ongoingDelivery.volunteerTelephoneNo}</p>
      <span>
        <div><button onClick={()=>deleteVolunteerDelivery(ongoingDelivery._id)}>Delete Donation</button></div>
        <div><button onClick={() =>confirmVolunteerDonation(ongoingDelivery)}>Confirm Delivery</button></div>
      </span>
    </div>
    ))} */}
        </div>

        <div>
          <form className="create" onSubmit={updateStationeryRequests}>
            <h3>Update Stationery</h3>
            {JSON.stringify(updateStationeryRequests)}
            <h4>Stationery : </h4>

            <label>Product Number</label>
            <input
              type="text"
              name="productNo"
              onChange={handleUpdateFieldChange}
              value={updateStationeryRequests.productno}
            />

            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              onChange={handleUpdateFieldChange}
              value={updateStationeryRequests.productname}
            />

            <label>Description</label>
            <input
              type="number"
              name="productDescription"
              onChange={handleUpdateFieldChange}
              value={updateStationeryRequests.productdescription}
            />

            <label>Image</label>
            <input
              type="file"
              name="image"
              onChange={handleUpdateFieldChange}
              value={updateStationeryRequests.filename}
            />
            {/* 
    <div>
      <label>Other Details</label>
      <textarea 
      className="form-text-area"
      type =  "text"
      name="orgOtherDetails"
      onChange={handleUpdateFieldChange}
      value={updateStationeryRequests.orgOtherDetails}
      />
    </div>

    <label>Location</label>
    <input 
    type="text"
    name="orgLocation"
    onChange={handleUpdateFieldChange}
    value={updateStationeryRequests.orgLocation}
    /> */}

            <button>Update Stationery</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default OrganizationMgmt;
