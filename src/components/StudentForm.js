import React from 'react';


export default function StudentForm(props) {
    // console.log("General Student form props:", this.props)
    return (
        <div>
             <form className="new-student-form" handleSubmit={(e) => console.log(e)}>
                        <label>Name:</label>
                        <input name="name" placeholder='name' className="student-input" value={this.props.student.name} onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>School id:</label>
                        <input name="school_id" value={this.props.student.school_id} placeholder="SchoolId" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Reason:</label>
                        <input name="reason" value={this.props.student.reason} placeholder="reason" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Start Date:</label>
                        <input name="date" value={this.props.student.date} type="date" placeholder="Start date" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Hours: </label>
                        <input name="hours" value={this.props.student.hours} type="number" placeholder="10" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>School: </label>
                        <input name="school" value={this.props.student.school} placeholder="school" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Grade:</label>
                        <input name="grade" value={this.props.student.grade} type="number" min="0" max="12" placeholder=" k - 12" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Subject:</label>
                        <input name="subject" value={this.props.student.subject} type="text" placeholder=" subject" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>SPED: </label>
                        <select name="sped " value={this.props.student.sped} type="text" placeholder="Special Ed" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} >
                            <option value="Yes" > --- </option>
                            <option value="true" > Yes </option>
                            <option value="false" > No </option>
                        </select>
                        <label>Councilor Info:</label>
                        <textarea row="5" col="60" value={this.props.student.counselor_info} placeholder="Counselor Info" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        {/* <br /> */}
                        <h3>Guardian Info</h3>
                        <label>Name:</label>
                        <input value={this.props.student.guardian} placeholder="guardian" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Address:</label>
                        <input value={this.props.student.address} placeholder="address" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Cell:</label>
                        <input value={this.props.student.home_no} type="tel" placeholder="Cell Phone" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} name="cell" />
                        <label>Home Phone:</label>
                        <input value={this.props.student.cell} type="tel" placeholder="Home Phone" className="student-input" onChange={this.handleChange} name="home_no" style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        <label>Email:</label>
                        <input name="email" value={this.props.student.email} type="email" placeholder="email" className="student-input" onChange={this.handleChange} style={{ width: "75%", fontSize: ".50em", borderRadius: ".25em" }} />
                        {/* <br />
                        <br /> */}
                        <input type="submit" className="student-input" onClick={this.handleSubmit} style={{ width: "75%", fontSize: "1em", borderRadius: ".25em" }} />
                    </form>
        </div>
    )
}
