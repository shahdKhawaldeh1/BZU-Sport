import React from 'react'
import './Schedule.css'
import { Footer } from '../Footer/Footer'


export const Gym = () => {
  return (
<div>
  <div className="headerGym">
  </div>
  <div className="heading-container">
    <h2 className="heading-schedule">Welcome to Our Gym Club</h2>
  </div>
  <table>
    <tbody><tr>
        <td className="title-table">Time of the Gym Club</td>
        <td className="title-table">Girls Students</td>
        <td className="title-table">Mens</td>
      </tr>
      <tr>
        <td className="content-table">Saturday</td>
        <td className="content-table">8:00am - 12:00pm</td>
        <td className="content-table">12:00pm - 4:00pm</td>
      </tr>
      <tr>
        <td className="content-table">Monday</td>
        <td className="content-table">12:00pm - 4:00pm</td>
        <td className="content-table">8:00am - 12:00pm</td>
      </tr>
      <tr>
        <td className="content-table">Tuesday</td>
        <td className="content-table">8:00am - 12:00pm</td>
        <td className="content-table">12:00pm - 4:00pm</td>
      </tr>
      <tr>
        <td className="content-table">Wednesday</td>
        <td className="content-table">12:00pm - 4:00pm</td>
        <td className="content-table">8:00am - 12:00pm</td>
      </tr>
      <tr>
        <td className="content-table">Thursday</td>
        <td className="content-table">8:00am - 12:00pm</td>
        <td className="content-table">12:00pm - 4:00pm</td>
      </tr>
    </tbody></table>
    <Footer/>
</div>

  )
}
