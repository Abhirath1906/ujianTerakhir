"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const introRef = useRef(null);
  const swiperRef = useRef(null);
  const aboutRef = useRef(null);
  const profileImgRef = useRef(null);
  const detailsRef = useRef(null);
  const footerRef = useRef(null);
  const thankyou = useRef(null);
  const gambarAkhir = useRef(null);

  useEffect(() => {

    gsap.from(introRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(swiperRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "end end",
        scrub: true,
      },
      opacity: 0,
      x: -100,
    });

    gsap.from(profileImgRef.current, {
      scrollTrigger: {
        trigger: profileImgRef.current,
        start: "top 80%",
        end: "end end",
        scrub: true,
      },
      opacity: 0,
      scale: 0.8,
    });

    gsap.from(detailsRef.current, {
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 80%",
        end: "end end",
        scrub: true,
      },
      opacity: 0,
      x: 100,
    });

    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "end end",
        scrub: true,
      },
      y: 100,
      opacity: 0,
    });

    gsap.fromTo(thankyou.current, { x: -100, opacity: 0 }, {
      opacity: 1, x: 1, duration: 1, scrollTrigger: {
        trigger: thankyou.current
      }
    })

    gsap.fromTo(".gambar1", { y: 50, opacity: 0 }, {
      opacity: 1, y: -50, stagger: 1, duration: 1, scrollTrigger: {
        trigger: gambarAkhir.current,
        scrub: true,
        start: "1000px center",
        end: "2000px center"
      }
    })
  }, []);

  return (
    <div>
      <p className="color">.</p>


      <footer className="footer" ref={footerRef}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/HurufA.png"
            width={50}
            height={50}
            alt="A"
            className="gambarA"
          />
          <p
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              fontSize: "30px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Abhi<span className="colorr">rath</span>
          </p>

          <div
            style={{
              marginTop: "20px",
              fontSize: "30px",
              marginLeft: "300px",
              fontWeight: "bold",
            }}
          >
            <p>
              <span style={{ color: "white" }}>My</span> Art Space
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
              fontSize: "30px",
              marginLeft: "300px",
              fontWeight: "bold",
            }}
          >
            <a href="">Click this</a>
          </div>
        </div>
      </footer>

      <div style={{ display: "flex" }}>
        <p
          ref={introRef}
          style={{
            marginTop: "190px",
            marginLeft: "100px",
            fontSize: "65px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Hi,
          <br />
          i'm{" "}
          <span
            style={{
              color: "grey",
              textShadow: "-8px 8px 8px rgba(0,0,0,0.5)",
            }}
          >
            A
          </span>
          bhi,
          <br />
          <span className="web">Web developer</span>
        </p>

        <div
          ref={swiperRef}
          style={{ width: "500px", marginLeft: "100px", marginTop: "120px" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            style={{
              borderRadius: "50%",
              boxShadow: "0 10px 50px rgba(0, 0, 0, 0.5)",
              border: "1px solid black",
              overflow: "hidden",
              width: "450px",
              height: "450px",
            }}
          >
            <SwiperSlide>
              <Image
                src="/Gambar1.jpeg"
                width={450}
                height={450}
                alt="Slide 1"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Gambar2.jpeg"
                width={450}
                height={450}
                alt="Slide 2"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Gambar3.jpeg"
                width={450}
                height={450}
                alt="Slide 3"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AboutMe">
        <p style={{ marginLeft: "50px" }}>Profile:</p>

        <div
          style={{
            marginTop: "100px",
            marginLeft: "30px",
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <p
            ref={aboutRef}
            style={{ color: "white", fontSize: "20px" }}
          >
            <span
              style={{
                fontSize: "40px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              About Me
            </span>
            <br />
            Hi, I'm Abhi a passionate and<br />
            creative web developer<br />
            with a strong focus on building<br />
            responsive, user-friendly,<br />
            and visually appealing websites.<br />
            I specialize in modern<br />
            front-end technologies like React.js,<br />
            Next.js, and Tailwind CSS,<br />
            and I enjoy turning complex<br />
            problems into simple, elegant solutions.
          </p>

          <Image
            ref={profileImgRef}
            src="/Gambar4.jpeg"
            width={300}
            height={300}
            alt="Slide 4"
            style={{
              borderRadius: "50%",
              boxShadow: "0 10px 50px rgba(0, 0, 0, 0.5)",
              border: "1px solid black",
              overflow: "hidden",
              width: "300px",
              height: "300px",
            }}
          />

          <div
            ref={detailsRef}
            style={{
              color: "white",
              fontSize: "20px",
              gap: "50px",
              marginTop: "-150px",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Details
            </p>

            <li>Full Name: Abhirath</li>
            <li>Nickname: Abhi</li>
            <li>Age: 15</li>
            <li>Status: Student</li>
          </div>

        </div>



      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "100px", }}>
        <p style={{
          fontSize: "40px",
          color: "white",
          fontWeight: "bold",
        }}>My Model Art</p>
      </div>



      <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "100px", }}>
        <Image

          src="/gambar1.jpeg"
          width={350}
          height={350}
          alt="1"
          className="gambar1"
          style={{ borderRadius: "50px", border: "3px solid black" }}
        />
        <Image

          src="/gambar2.jpeg"
          width={350}
          height={350}
          alt="1"
          className="gambar1"
          style={{ borderRadius: "50px", border: "3px solid black" }}
        />
      </div>


      <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "100px", }}>
        <Image

          src="/gambar3.jpeg"
          width={350}
          height={350}
          alt="1"
          className="gambar1"
          style={{ borderRadius: "50px", border: "3px solid black" }}
        />
        <Image

          src="/gambar4.jpeg"
          width={350}
          height={350}
          alt="1"
          className="gambar1"
          style={{ borderRadius: "50px", border: "3px solid black" }}
        />
      </div>

      <div style={{
        fontSize: "40px", display: "flex", justifyContent: "center", marginTop: "50px"
        , backgroundColor: "#5d5f83", border: "3px solid black", borderRadius: "5px"
      }} >
        <p ref={thankyou} style={{ fontWeight: "bold" }}>Thank You</p>
      </div>


    </div>
  );
}
