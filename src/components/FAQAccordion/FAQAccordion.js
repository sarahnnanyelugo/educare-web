import React, { useState } from "react";
import "./_faq--accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { FAQTab } from "../FAQTab/FAQTab";

const FAQAccordion = () => {
  return (
    <div className="faq-accordion-container">
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="page-headings">
              How long has Wellspring Academy been in Lagos State Nigeria?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The Wellspring College was founded in ------. Starting with grades
              K-6, the school added a grade level each year until our first
              senior class graduated in 1994. In each of the classes graduating
              since that time, every graduating senior has been accepted to
              college.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h2 className="page-headings">Is the school accredited?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College is accredited by the Florida Council of
              Independent Schools (FCIS), the Florida Kindergarten Council
              (FKC), the Southern Association of Independent Schools (SAIS), the
              Southern Association of Colleges and Schools (SACS), and the
              Association of Christian Schools International (ACSI).
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h2 className="page-headings">
              What are the tuition costs at Wellspring College?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Please visit the{" "}
              <Link to={"/tuition"} className="random-link">
                Tuition & Fees
              </Link>{" "}
              page for this year’s tuition expenses.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h2 className="page-headings">How many students are enrolled?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              There are more than 1,200 students enrolled in TFA’s Lower School,
              Middle School, Upper School, The Classical School, The First Hope,
              and Preschool.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h2 className="page-headings">
              Does Wellspring College accept international students?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College accepts international students. Students must
              have a F1 Visa, F2 Visa, or be a dependent on a parent’s Visa.
              Visitor Visas such as B1 and B2 are NOT accepted. Additionally,
              all students must be fluent at speaking, reading, and writing
              English
            </p>
            <p>
              In addition to tuition, there is an international fee of $3,750
              per student. Wellspring College does not offer boarding or
              homestay through the school for international students.
            </p>
            <p>For more information, visit TFA’s International FAQ page.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h2 className="page-headings">
              At what age is my child eligible for Wellspring College K4
              program?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Students should be four years old by September 1 to be eligible
              for our K4 program. See our Admissions Events for scheduled
              screening dates and times.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h2 className="page-headings">
              What are school hours or divisional schedules?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Students may be dropped off as early as 7:30am. Please reference
              the schedules below for appropriate pick-up times.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Preschool Schedule
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  {" "}
                  Lower School Schedule{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Middle School Schedule
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"} className="random-link">
                  Upper School Schedule
                </Link>
              </li>
            </ul>
            <p>
              The
              <Link to={"/"} className="random-link">
                After School Program
              </Link>{" "}
              provides supervised student activities KPrep through 12th grade,
              until 6:00 PM. Our Preschool students have the option to do
              <Link to={"/"} className="random-link">
                {" "}
                Wrap Around Care.
              </Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h2 className="page-headings">What does tuition cover?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Tuition includes most textbooks, technology, and lab use. Please
              see the{" "}
              <Link to={"/"} className="random-link">
                Activity Fee list
              </Link>
              , on the Tuition & Fees page, for a helpful list of most fees and
              optional charges that may apply to you.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h2 className="page-headings">
              Where do I purchase school uniforms?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Our{" "}
              <Link to={"/"} className="random-link">
                uniform provider is Dennis Uniforms.
              </Link>{" "}
              Items can be purchased online or in store at 1101 N. Keller Road,
              Suite G-3, Orlando, FL 32810. Please review our Uniform Policies
              in the{" "}
              <Link to={"/"} className="random-link">
                Parent-Student Handbook{" "}
              </Link>{" "}
              or{" "}
              <Link to={"/"} className="random-link">
                Back to School Packet{" "}
              </Link>{" "}
              . Sunshine uniforms are not permitted.
            </p>
            <p>
              Families may also purchase spirit wear, uniform tops, outwear, and
              additional Royal gear in person or online at our School Store
              located in the front of the Cramer Family Field House.
            </p>
            <p>
              Families may also purchase spirit wear, uniform tops, outwear, and
              additional Royal gear in person or online at our{" "}
              <Link to={"/"} className="random-link">
                School Store{" "}
              </Link>
              located in the front of the Cramer Family Field House.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h2 className="page-headings">
              Does Wellspring College accept Step Up or McKay Scholarships?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College accepts{" "}
              <Link to={"/"} className="random-link">
                multiple scholarships{" "}
              </Link>
              administered by Step Up for Students. However, these
              <Link to={"/"} className="random-link">
                scholarships
              </Link>{" "}
              will not cover the full cost of our{" "}
              <Link to={"/"} className="random-link">
                Tuition and Fees
              </Link>
              . Families will be financially responsible for the remaining
              balance. Please reach out to our Business Office for additional
              information, 407-206-8758.
            </p>
            <p>
              <Link to={"/"} className="random-link">
                The First Hope{" "}
              </Link>
              accepts the Family Empowerment Scholarship. To learn more please
              call 407-206-8801 or visit The First Hope.
            </p>
            <p>
              <Link to={"/"} className="random-link">
                The Classical School{" "}
              </Link>
              does not accept scholarships of any kind. To learn more about The
              Classical School Tuition and Fees, please call 407-206-8762 or
              visit The Classical School.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h2 className="page-headings">
              How do I get involved and connected?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <Link to={"/"} className="random-link">
                The Parent Association
              </Link>{" "}
              is a wonderful way to get involved and stay connected. There are
              several ways to serve!
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <h2 className="page-headings">
              Are there Fine Arts programs at Wellspring College?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Our Fine Arts department provides an outstanding education in the
              visual and performing arts with an emphasis on Christian Worldview
              of the Arts. The faculty and staff have created a supportive
              environment in which students can grow in the fields of visual
              arts, theatre, expressive arts and music, including band and vocal
              programs. Students participate in community art festivals and
              compete in districts and state vocal, band and theatre festivals.
              Please reference the links below to see what opportunities we have
              per division:
            </p>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="random-link">
                  Lower School Fine Arts
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  Middle School Fine Arts
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  Upper School Fine Arts
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            <h2 className="page-headings">
              What sports are offered at Wellspring College?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Wellspring College has a solid reputation in the state of Florida
              for its athletic competition for winning several state, regional
              and district awards. We are a competitive class 3A school, a
              member of the Florida High School Athletic Association, and offer
              23 different sports for boys and girls in grades 6 through 12.
              Please visit our{" "}
              <Link to={"/"} className="random-link">
                Athletics{" "}
              </Link>{" "}
              page to learn more.
            </p>
            <p>
              Additionally, Wellspring College offers a robust Lower School
              Program for students in KPrep through 5th grade. Students have the
              opportunity to learn and develop athletic skills and explore
              participation in multiple sports. Please visit our{" "}
              <Link to={"/"} className="random-link">
                ower School Athletics
              </Link>
              L page to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13">
          <Accordion.Header>
            <h2 className="page-headings">
              How does Wellspring College incorporate technology into the
              learning environment?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Classrooms are equipped with Wi-Fi, interactive projectors and
              often whiteboard technology. All students in Grades 7-12, will be
              issued a personal Macbook laptop for educational use. Students in
              grades 3rd-6th are issued a personal iPad for educational use.
              Students in grades KPrep-2 will have access to a classroom set of
              iPad’s. We also offer different elective opportunities in Middle
              and Upper School for students to learn more about technology.
              Please review our{" "}
              <Link to={"/"} className="random-link">
                Middle and Upper School Course Catalog
              </Link>{" "}
              to learn more.
            </p>
            <p>
              Additionally, our families enjoy FACTS, a Learning Management
              System, enabling them to view weekly lesson plans, assignments,
              grades, and test dates. It also allows our parents to change their
              information, access school directories, calendars, volunteer
              opportunities and receive electronic news from school staff.
            </p>
            <p>
              All students are issued a FACTS Account, and, from Grade 2 and on,
              receive an @thefirstacademy.org email address and Apple ID.
              Younger students will learn how to keyboard, while older students
              will learn the ins and outs of iOS and computing. By graduation,
              students will be proficient at taking eCourses, navigating eBooks,
              and researching from the web.
            </p>
            <p>
              For assistance or more information visit the
              <Link to={"/"} className="random-link">
                technology page
              </Link>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>
            <h2 className="page-headings">
              Are there after-school activities?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We offer a wide range of after-school activities for KPrep through
              12th grade. Please visit the links below to learn more about the
              opportunities we provide:
            </p>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="random-link">
                  Lower School Sports
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  FHSAA Sports for Middle and Upper School Students
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  Upper School Student Life
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  Upper School Student Life
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  After School Program (Grades KPrep-12)
                </Link>
              </li>
              <li>
                <Link to={"/"} className="random-link">
                  Fine Arts
                </Link>
              </li>
            </ul>
            <p>
              In addition to after-school activities, we also offer summer
              programming. Visit our Camp Roar page to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="15">
          <Accordion.Header>
            <h2 className="page-headings">
              Does Wellspring College offer after-school care?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer after-school care for students PreK2 through 12th
              grade. Click the links below to learn more.
            </p>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="random-link">
                  Wrap Around Care (PreK2 and PreK3)
                </Link>
              </li>{" "}
              <li>
                <Link to={"/"} className="random-link">
                  After School Program (Grades KPrep-12)
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="16">
          <Accordion.Header>
            <h2 className="page-headings">
              Can my child visit Wellspring College before deciding?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              For students in grades 2-12 we offer a prospective{" "}
              <Link to={"/"} className="random-link">
                Student Shadowing Program
              </Link>
              . However, our Student Shadowing Program is currently unavailable.
              For more information about touring our campus with your student or
              attending an upcoming Open House, please call 407-206-8602 or
              email{" "}
              <Link to={"/"} className="random-link">
                admissions@wellspringcollege.org
              </Link>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="17">
          <Accordion.Header>
            <h2 className="page-headings">
              Are there any rewards for referring a new family?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we are grateful for your kind words to every new family. You
              can find out more on the{" "}
              <Link to={"/"} className="random-link">
                Royal Reach Referral Program page
              </Link>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="18">
          <Accordion.Header>
            <h2 className="page-headings">What about Wait Lists?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              At Wellspring College, we have what is called a “wait pool”. The
              First Academy’s wait pool is an unranked group of students who
              have been accepted to Wellspring College, and who we prayerfully
              hope will be able to join our school family.{" "}
              <Link to={"/"} className="random-link">
                Click here
              </Link>{" "}
              to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header>
            <h2 className="page-headings">
              I need more information. What should I do?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Email{" "}
              <Link to={"/"} className="random-link">
                admissions@wellspringcollege.org
              </Link>
              or give us a call at (407) 206-8602 and we will be more than happy
              to help.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header>
            <h2 className="page-headings">
              Do you require Admissions testing?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Applicants for Preschool through Grade 2 are required to take
              in-house admission screening or testing at Wellspring College.
              Applicants for Grades 3 through 12 are required to take the
              Independent School Entrance Examination (ISEE) proctored at The
              First Academy. There is a cost of $125 for Grades 3-4 and $150 for
              Grades 5-12.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="21">
          <Accordion.Header>
            <h2 className="page-headings">
              How do I transfer divisions such as between The Classical School
              and the Upper, Middle or Lower Schools?
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Looking to transfer between The Classical School and the Upper,
              Middle or Lower Schools? Start by completing the form below:
            </p>
            <FAQTab />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordion;
