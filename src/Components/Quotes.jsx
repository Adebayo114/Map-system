    import "../Styles/Quote.css";
    import { Link } from "react-router-dom";
    import img from "../assets/prof.png";
    import { FaBell, FaComments, FaChevronDown,FaCalendar } from "react-icons/fa";

    const Quotes = () => {
    return (
        <div className="quote-request">
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
                src={img} // Update this path to match your image location
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



        {/* Form Section */}
        <div className="container">
            <div className="quote-form">
            <h3 className="form-header">Request for Quote</h3>
            <p className="form-subtext">Fill out these details to send the RFQ</p>
            <div className="form-main">
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="rfqNo">RFQ No</label>
                    <input type="text" id="rfqNo" value="RFQ-10234" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    placeholder="Request for Equipments"
                    />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" value="Maternity" readOnly />
                </div>
                <div className="form-group">
    <label htmlFor="expectedDate">Expected Delivery Date</label>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaCalendar style={{ fontSize: '16px', color: '#555' }} />
        <input type="date" id="expectedDate" placeholder="2024-12-02" />
    </div>
    <small className="form-info">
        Calculated based on lead time and issue date
    </small>
    </div>

                </div>
            </div>
            </div>
        </div>

        {/* Items Section */}
        <h4 className="item-name">Add Items</h4>
        <table className="items-table">
            <thead>
            <tr>
            <th className="wide-column">Items</th>
                <th >Variant</th>
                <th className="narrow-column">Quantity</th>
                <th className="p">Price</th>
                <th className="ed">Expected Delivery Date</th>
                <th className="am">Amount</th>
                <th className="ac">Action</th>
            </tr>
            </thead>
            <tbody>
            {Array.from({ length: 4 }).map((_, index) => (
                <tr key={index}>
                <td>
                    <select>
                    <option>Oxygen Concentrator</option>
                    <option>Mechanical Ventilator</option>
                    <option>Patient Monitor</option>
                    </select>
                </td>
                <td>
                    <select>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>White</option>
                    </select>
                </td>
                <td>
                    <input  id="td-table" type="number" defaultValue="100" />
                    
                </td>
                <td>
                    <input id="Price" type="text" defaultValue="$12.00" readOnly />
                </td>
                <td>
                    <input id="date" type="date" defaultValue="2023-12-02" readOnly />
                </td>
                <td id="amount">$1200.00</td>
                <td>
                    <button id="btn" className="delete-btn">🗑</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        {/* Note Section */}
        <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
            id="note"
            maxLength="200"
            placeholder="Enter note here"
            ></textarea>
            <small>0/200</small>
        </div>

        {/* Actions */}
        <div className="form-actions">
            <button className="cancel-btn">Cancel</button>
            <button className="save-draft-btn">Save as Draft</button>
            <Link to="/tcondition">
            <button className="continue-btn">Continue</button>            
            </Link>


        </div>
        </div>
    );
    };

    export default Quotes;
