import React from "react";
import "./JobDetails.css";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../Images/logo.jpeg";

export default function JobDetails() {
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <section className="job-details">
        <div className="company-header">
          <div class="company-logo-container ">
            <img src={logo} alt="profile" class="image" />
          </div>
          <div className="name-container">
            <span className="title">Sortitt</span>
            <span className="location">London, UK</span>
          </div>
        </div>

        <div>
          <a href="#" className="company-web-link">
            www.sortitt.com
          </a>
        </div>

        <div className="apply-buttons">
          <button className="apply-button1">
            Apply as a SEO Expert
            <FaArrowRight />
          </button>
          <button className="apply-button">
            Apply as a Digital Marketer
            <FaArrowRight />
          </button>
        </div>

        <hr />

        <div className="job-keywords">
          <div className="job-item">
            <span className="item-title">Department:</span>
            <span className="item-value">IT Department</span>
          </div>
          <div className="job-item">
            <span className="item-title">Job Role:</span>
            <span className="item-value">Programmer</span>
          </div>
          <div className="job-item">
            <span className="item-title">Work Type:</span>
            <span className="item-value">Remote</span>
          </div>
          <div className="job-item">
            <span className="item-title">Salary:</span>
            <span className="item-value">$15/hr</span>
          </div>
          <div className="job-item">
            <span className="item-title">Educaion:</span>
            <span className="item-value">Maters / S1</span>
          </div>
          <div className="job-item">
            <span className="item-title">Job Type:</span>
            <span className="item-value">Full - Time (5 Days)</span>
          </div>
          <div className="job-item">
            <span className="item-title">Work Location:</span>
            <span className="item-value">Stratford, London</span>
          </div>
          <div className="job-item">
            <span className="item-title">Contract Length</span>
            <span className="item-value">3 Months</span>
          </div>
        </div>

        <div className="job-description">
          <span className="jd-heading">Job Descriptions</span>
          <span className="jd-title">Job Title: SEO Expert</span>
          <span className="jd-desc">
            Job Description: Sortitt is seeking a skilled and detail-oriented
            SEO Expert to optimize our clients’ websites and digital presence.
            The ideal candidate will have a deep understanding of search engine
            algorithms, keyword strategies, and performance analysis to increase
            organic traffic and improve search rankings.
            <br />
            Responsibilities:
            <ul>
              <li>
                Conduct comprehensive SEO audits and implement on-page and
                off-page SEO strategies.
              </li>
              <li>
                Perform keyword research and develop effective keyword
                strategies for various industries.
              </li>
            </ul>
          </span>
        </div>
      </section>
    </div>
  );
}
