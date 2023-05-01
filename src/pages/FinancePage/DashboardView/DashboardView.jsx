// import React, { useEffect } from "react";
import Finance from "../../../assets/images/finance-dash.png";
import Requisition from "../../../assets/images/requisition.png";
import Statement from "../../../assets/images/statement.png";
import Inventory from "../../../assets/images/store-inventory.png";
// import { Carousel } from "react-bootstrap";

// function DashboardView() {
//   useEffect(() => {
//     var myCarousel = document.querySelector("#myCarousel");
//     var carousel = new Carousel(myCarousel, {
//       interval: 2000,
//       wrap: true,
//     });
//     var slides = document.querySelectorAll(".carousel .carousel-item");

//     slides.forEach((el) => {
//       // number of slides per carousel-item
//       const minPerSlide = slides.length;
//       let next = el.nextElementSibling;
//       for (var i = 1; i < minPerSlide; i++) {
//         if (!next) {
//           // wrap carousel by using first child
//           next = slides[0];
//         }
//         let cloneChild = next.cloneNode(true);
//         el.appendChild(cloneChild.children[0]);
//         next = next.nextElementSibling;
//       }
//     });
//   });
//   return (
//     <>
//       <div className="container-fluid dashboard-view">
//         <div className="row">
//           <div className="col-12 text-center">
//             <h3>Bootstap 5 Carousel</h3>
//             <h6>
//               Customized to advance a single slide, and reveal part of adjacent
//               slides
//             </h6>
//             <div className="carousel " id="myCarousel">
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#myCarousel"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#myCarousel"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//               <div className="carousel-inner">
//                 <div className="row g-0 carousel-item active">
//                   <div className="col-4 border">
//                     <a href="#">
//                       {" "}
//                       <img
//                         classNameName=""
//                         src={Finance}
//                         alt="Scholar"
//                         width="95%"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="row g-0 carousel-item">
//                   <div className="col-4">
//                     <a href="#">
//                       {" "}
//                       <img
//                         classNameName=""
//                         src={Requisition}
//                         alt="Scholar"
//                         width="95%"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="row g-0 carousel-item">
//                   <div className="col-4">
//                     <a href="#">
//                       {" "}
//                       <img
//                         classNameName=""
//                         src={Statement}
//                         alt="Scholar"
//                         width="95%"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="row g-0 carousel-item">
//                   <div className="col-4">
//                     <a href="#">
//                       <img
//                         classNameName=""
//                         src={Inventory}
//                         alt="Scholar"
//                         width="95%"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DashboardView;

import { useEffect } from "react";
import { Carousel } from "bootstrap";
import "./dashboard-view.scss";

export default function DashboardView() {
  useEffect(() => {
    var myCarousel = document.querySelector("#myCarousel");
    var carousel = new Carousel(myCarousel, {
      interval: 2000,
      wrap: true,
    });
    var slides = document.querySelectorAll(".carousel .carousel-item");
    slides.forEach((el) => {
      // number of slides per carousel-item
      const minPerSlide = slides.length;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = slides[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center col-md-12">
          <div
            className="carousel slide carousel-fade col-md-12 "
            id="myCarousel"
          >
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-inner">
              <div className="row g-0 carousel-item active">
                <div className="col-10 border">
                  <img
                    classNameName=""
                    src={Finance}
                    alt="Scholar"
                    width="95%"
                  />
                </div>
              </div>
              <div className="row g-0 carousel-item">
                <div className="col-10">
                  <img
                    classNameName=""
                    src={Requisition}
                    alt="Scholar"
                    width="95%"
                  />
                </div>
              </div>
              <div className="row g-0 carousel-item">
                <div className="col-10">
                  <img
                    classNameName=""
                    src={Statement}
                    alt="Scholar"
                    width="95%"
                  />
                </div>
              </div>
              <div className="row g-0 carousel-item">
                <div className="col-10">
                  <img
                    classNameName=""
                    src={Inventory}
                    alt="Scholar"
                    width="95%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
