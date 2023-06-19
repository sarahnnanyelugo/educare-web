import "./_menu-tab.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { NavLink } from "react-router-dom";
import MenuLink from "../MenuLink/MenuLink";
import CBT2 from "../../../assets/images/computer-setting.svg";
import {
  columeOne,
  columeTwo,
  columeThree,
  columeFour,
  columeFive,
  columeSix,
  columeSeven,
} from "../../../TestData";

export const MenuTab = () => {
  let dt = {};
  return (
    <>
      <div className="col-md-12">
        {" "}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2} className="tab-headerss">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="menu-links list-group-item list-group-item-action drop-down-nav"
                  >
                    All Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="menu-links list-group-item list-group-item-action drop-down-nav"
                  >
                    For Businesses
                  </Nav.Link>
                </Nav.Item>{" "}
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    className="menu-links list-group-item list-group-item-action drop-down-nav"
                  >
                    For Schools
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to={"/"}
                    className="menu-links list-group-item list-group-item-action drop-down-nav"
                    type="button"
                  >
                    {" "}
                    Enterprise offer
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to={"/"} className="drop-down-nav">
                    Partner with Us
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10} className="tab-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="col-md-12 flexy">
                    <div className="col-md-2">
                      {columeOne.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeTwo.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeThree.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeFour.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeFive.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="col-md-12 flexy">
                    <div className="col-md-2">
                      {columeSix.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeSeven.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                  </div>
                </Tab.Pane>{" "}
                <Tab.Pane eventKey="third">
                  <div className="col-md-12 flexy">
                    <div className="col-md-2">
                      {columeOne.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeTwo.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeThree.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeFour.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>{" "}
                    <div className="col-md-2">
                      {columeFive.map((data, index) => (
                        <MenuLink data={data} />
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};
