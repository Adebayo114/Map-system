import "../Styles/Tcondition.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaComments, FaChevronDown} from "react-icons/fa";
const TCondition = () => {
  const [formData, setFormData] = useState({
    paymentTerms: 'Net 30',
    deliverySchedule: 'Immediate delivery',
    shippingMethod: 'Courier Services',
    leadTime: 10,
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };
  return (
    <>



            {/* Header Section */}
            <div className="header">
            <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search here..."
            />
            </div>
            <div className="header-right">
            <FaBell className="icon" />
            <FaComments className="icon" />
            <img
                src="/profile.jpg" // Update this path to match your image location
                alt="Profile"
                className="profile-image"
            />
            <FaChevronDown className="icon" />
            </div>
        </div>

        {/* Page Header */}
        <div className="quote-header">
            <h2>Quotes / Quote Response</h2>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
            <div className="step active">
            <span className="step-number">1</span>
            <div className="step2">
                <p className="step-info">Request Information</p>
                <small className="info-small">Provide details about the RFQ</small>
                </div>
            </div>

            <div className="step">
            <span className="step-number">2</span>
            <div className="step2">
            <p className="step-info">Terms and Attachments</p>
            <small className="info-small">Payment and delivery terms</small>
            </div>
            </div>
            
            <div className="step">
            <span className="step-number">3</span>
            <div className="step2">
            <p className="step-info">Review</p>
            <small className="info-small">Confirm all information provided</small>
            </div>

            </div>
        </div>

        <h2>Terms and Attachments</h2>
        <p>Provide detailed information on payment and delivery terms</p>
     <form onSubmit={handleSubmit} className="quote-response-form">

      <div className="form-mains">
      <div className="form-group">
        <label htmlFor="paymentTerms">Payment Terms</label>
        <select
          id="paymentTerms"
          name="paymentTerms"
          value={formData.paymentTerms}
          onChange={handleChange}
        >
          <option value="Net 30">Net 30</option>
          <option value="Net 60">Net 60</option>
          <option value="Net 90">Net 90</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="deliverySchedule">Delivery Schedule</label>
        <select
          id="deliverySchedule"
          name="deliverySchedule"
          value={formData.deliverySchedule}
          onChange={handleChange}
        >
          <option value="Immediate delivery">Immediate delivery</option>
          <option value="Within 1 week">Within 1 week</option>
          <option value="Within 2 weeks">Within 2 weeks</option>
        </select>
      </div>
      </div>

      <div className="form-mains2">
      <div className="form-group">
        <label htmlFor="shippingMethod">Shipping Method</label>
        <select
          id="shippingMethod"
          name="shippingMethod"
          value={formData.shippingMethod}
          onChange={handleChange}
        >
          <option value="Courier Services">Courier Services</option>
          <option value="Freight">Freight</option>
          <option value="Air Cargo">Air Cargo</option>
        </select>
      </div>

    <div className="form-group lead-time-group">
  <label htmlFor="leadTime">Lead Time</label>
  <div className="lead-time-wrapper">
    <input
      type="number"
      id="leadTime"
      name="leadTime"
      placeholder="0"
      value={formData.leadTime}
      onChange={handleChange}
      min="1"
    />
    <span className="lead-time-unit">Days</span>
  </div>
  </div>
</div>



      <div className="form-group2">
        <label htmlFor="attachments">Attachments</label>
        <div className="file-upload">
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleChange}
          />
          <p>Click to upload or drag and drop</p>
          <p>SVG, PNG, JPG, or GIF (max, 800x400px)</p>
        </div>
      </div>

    </form>
      
    <div className="form-actions3">
        <button className="cancel-btn">Cancel</button>
        <button type="button" onClick={() => console.log('Save as Draft')}>
          Save as Draft
        </button>
        <Link to="/view">
          <button type="submit">Continue</button>
        </Link>
      </div>
    </>
  )
}

export default TCondition