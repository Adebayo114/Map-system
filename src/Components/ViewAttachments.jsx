    import "../Styles/view.css"; // Create a CSS file for styles
    import { FaBell, FaComments, FaChevronDown} from "react-icons/fa";
    import img from "../assets/prof.png";
    const ViewAttachments = () => {
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
                        src={img}  // Update this path to match your image location
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

            <div className="request-info-container">
      <div className="header">
        <h3>Request Information</h3>
        <button className="edit-button">
          <img
            src="edit-icon.png" // Replace with actual edit icon path
            alt="Edit"
          />
        </button>
      </div>
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Title</span>
          <span className="value">Request for Equipments</span>
        </div>
        <div className="info-item">
          <span className="label">RFQ No</span>
          <span className="value">#RQ 01234</span>
        </div>
        <div className="info-item requester">
          <span className="label">Requestor</span>
          <div className="value">
            <div className="avatar">JD</div>
            <div>
              <span className="name">Jane Doe</span>
              <br />
              <span className="designation">Head Nurse, Paediatrics</span>
            </div>
          </div>
        </div>
        <div className="info-item">
          <span className="label">Department</span>
          <span className="value">Maternity</span>
        </div>
        <div className="info-item">
          <span className="label">Expected delivery date</span>
          <span className="value">2024-12-02</span>
        </div>
      </div>
    </div>

            {/* Items Section */}
            <div className="items-section">
                <h3>Item(s)</h3>
                <table className="items-table">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Items</th>
                            <th>Variants</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Expected Delivery Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td className="item-detail">
                                <img
                                    src={img}  // Replace with actual image path
                                    alt="Oxygen concentrator"
                                    className="item-thumbnail"
                                />
                                Oxygen concentrator <br /> <span className="item-code">#28373</span>
                            </td>
                            <td>Blue</td>
                            <td>100 pieces</td>
                            <td>$200.00</td>
                            <td>$2,000.00</td>
                            <td>2024-08-07</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td className="item-detail">
                                <img
                                    src={img} // Replace with actual image path
                                    alt="Mechanical ventilator"
                                    className="item-thumbnail"
                                />
                                Mechanical ventilator <br /> <span className="item-code">#28373</span>
                            </td>
                            <td>NIL</td>
                            <td>45 Kg</td>
                            <td>$350.00</td>
                            <td>$2,500.00</td>
                            <td>2024-08-07</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td className="item-detail">
                                <img
                                    src={img}  // Replace with actual image path
                                    alt="Patient Monitor"
                                    className="item-thumbnail"
                                />
                                Patient Monitor <br /> <span className="item-code">#28373</span>
                            </td>
                            <td>Blue</td>
                            <td>30 Units</td>
                            <td>$300.00</td>
                            <td>$1,500.00</td>
                            <td>2024-08-07</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td className="item-detail">
                                <img
                                    src={img} // Replace with actual image path
                                    alt="Mechanical ventilator"
                                    className="item-thumbnail"
                                />
                                Mechanical ventilator <br /> <span className="item-code">#28373</span>
                            </td>
                            <td>Blue</td>
                            <td>35 Units</td>
                            <td>$200.00</td>
                            <td>$1,500.00</td>
                            <td>2024-08-07</td>
                        </tr>
                    </tbody>
                </table>
                <div className="totals">
                    <div className="subtotal">
                        <span>Sub Total</span>
                        <span>$8,000.00</span>
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <span>$8,750.00</span>
                    </div>
                </div>
            </div>

            {/* Terms and Attachments Section */}
            <div className="terms-section">
                <h3>Terms and Attachments</h3>
                <p>Review payment and delivery terms</p>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button type="button" className="cancel-button">Cancel</button>
                <button type="button" className="draft-button">Save as draft</button>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </>
    );
    }

    export default ViewAttachments;
