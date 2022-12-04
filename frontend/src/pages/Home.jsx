import React, { useEffect, useState } from "react";
import { BannerSlider } from "../components/Sliders/BannerSlider/BannerSlider";
import { BrandsSlider } from "../components/Sliders/BrandsSlider/BrandsSlider";
import { HomeWrapper } from "./Home.styled";
import RightBanner from "../assets/Images/HomePageBanner/right.webp";
import Careplan from "../assets/Images/homepage/careplan.png";
import Button from "../components/Button";
// import { BrandsSlider } from "../components/Sliders/BrandsSlider";
import { SliderTypeThree } from "../components/Sliders/SliderTypeThree/SliderTypeThree";
import axios from "axios";
import { ProductSlider } from "../components/Sliders/ProductSlider/ProductSlider";
import Upperfooter from "./Descripton/Upperfooter";
import { Footer } from "../components/Footer/Footer";
let Banner = [
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/1st.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/2nd.jpeg?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/3rd.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/4th.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/5th.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/7th.jpeg?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/8th.png?raw=true",
    link: "#",
  },
];

let BrandsData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/t0t6xw4ylmxeewhgfkmp.jpg",
    title: "Dr Willmar Schwabe India",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/i0wi0yt5wo90kggfzjsn.jpg",
    title: "Accu-Chek",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/g21x5fzignndb0ymzv8h.jpg",
    title: "MuscleBlaze",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/oi0ur8lo58nku2ixbqib.png",
    title: "Kapiva Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/haqfpvbtgym8a6cmx3pz.png",
    title: "Baidyanath(Nagpur)",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/hkm1q1azbrn668gdu062.png",
    title: "Pentasure",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/kevury9rkljlaiq5s66c.png",
    title: "Nivea",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/qbrvpif3g5sboyllfaxm.jpg",
    title: "Jiva Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/q6eiu5807jpnbagqgrzv.jpg",
    title: "Abzorb Products",
  },
];

let FullBodyHealthCheckupData = [
  {
    title: "Women Wellness Advanced Package",
    desc: "Includes 44 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹1499",
    strikeOfPrice: "₹2998",
    discount: "50% Off",
  },
  {
    title: "Comprehensive Platinum Full Body Checkup",
    desc: "Includes 91 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹3499",
    strikeOfPrice: "₹6998",
    discount: "50% Off",
  },
  {
    title: "Monsoon Health Screening",
    desc: "Includes 54 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹1299",
    strikeOfPrice: "₹2598",
    discount: "50% Off",
  },
  {
    title: "Good Health Silver Package",
    desc: "Includes 58 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹649",
    strikeOfPrice: "₹1298",
    discount: "50% Off",
  },
  {
    title: "Women Wellness Advanced Package",
    desc: "Includes 44 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹1499",
    strikeOfPrice: "₹2998",
    discount: "50% Off",
  },
  {
    title: "Comprehensive Platinum Full Body Checkup",
    desc: "Includes 91 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹3499",
    strikeOfPrice: "₹6998",
    discount: "50% Off",
  },
  {
    title: "Monsoon Health Screening",
    desc: "Includes 54 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹1299",
    strikeOfPrice: "₹2598",
    discount: "50% Off",
  },
  {
    title: "Good Health Silver Package",
    desc: "Includes 58 tests",
    imgUrl:
      "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    rating: "4.9",
    price: "₹649",
    strikeOfPrice: "₹1298",
    discount: "50% Off",
  },
];

let MonsoonSellData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/egh2aj4d1wjc5cdpwhri.png",
    title: "Baidyanath",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/cbpds7xlfxiuhxngnrny.jpg",
    title: "HealthKart",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/ojflleksz17wnmo99bhd.jpg",
    title: "Kerala Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/qd6uzql75dcbrxkmzoly.png",
    title: "Sugar Free",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/aubqz1qp0hvtr5mme3ac.png",
    title: "Cofsils",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/zl9ucofhexlvnbbqycfu.jpg",
    title: "Parachute",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/dwxy35ghnxc5bt1wavnq.png",
    title: "Sebamed",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/erijhlrytyh1wl1tflhu.png",
    title: "Lacto Calamine",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/sndv91v2nbfjomzol9qt.png",
    title: "OneTouch",
  },
];

let PopularCategoriesData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/cabpuknnlyyzgqfnb4x5.png",
    title: "Vitamins & Supplements",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/x2z8u1osqutmxvx56hlw.png",
    title: "Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/qjfdkz5njmk9n7vvrbb3.png",
    title: "Healthcare Devices",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/uq1gwxslqqrxxwv6zi6j.jpg",
    title: "Nutritional Drinks",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/p1blaka183nc1zlil8tq.png",
    title: "Sexual Wellness",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/j7ruar88gacbzksuadjn.png",
    title: "Homeopathy",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/xbppadk1l0w7wferh2uk.png",
    title: "Diabetes Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/bkhusfgfiu9qedowph2i.png",
    title: "Skin Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/htqiurbbhwmrxkvdzwkg.png",
    title: "Elderly Care",
  },
];

let ShopByHealthData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/hgzkyio2rphkn6wjif94.png",
    title: "Diabetes Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/zo7sc14nqpt6ebeojkvr.png",
    title: "Cardiac Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/ttagxlnxulsvkyv9fetr.png",
    title: "Stomach Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/ijgn7fhyq8ig0welmrcp.png",
    title: "Liver Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/zytsldnf5mvb0u19ydep.png",
    title: "Kidney Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/ywohqm4txnehsmibypaz.png",
    title: "Bone, Joint & Muscle Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/hn5bpr1ci2do5kdub51v.png",
    title: "Pain Relief",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/hr9vysj9cy0sfjs3mpg0.png",
    title: "Respiratory Care",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/t0ehbhfrkughfxoygvs2.png",
    title: "Eye Care",
  },
];

let HealthCareDevicesData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/swzbhfnn4l9ne02gxbzx.png",
    title: "BP Monitors",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/aj4m189e6lqbztkpumgc.png",
    title: "Pulse Oximeter",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/gb4pjl9kvpsh8urarzbs.png",
    title: "Masks(N95, Surgical and more)",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/wpz8xa7pxihfc8jxmrud.png",
    title: "Diabetes Monitors",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/wjlqywtlkidzwfdjks42.png",
    title: "Thermometers",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/bbsuxjqmag9kw0hiaxxo.png",
    title: "Weighing Scales",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/xs0gkng4tc7zbl1zmxsd.png",
    title: "Body Massager",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/z7s5ku6a7v3yoob5q3da.png",
    title: "Vaporizers",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/xdz6yrsfozqciryjxrz0.png",
    title: "Nebulizer",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/yavhuoq1vtfegm5erkzk.png",
    title: "Support Braces",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/epejaxqyr9obiqrbcydw.png",
    title: "Mobility Equipments",
  },
];

let HealthAndFoodData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/vuze6xhdat3watvwaro9.png",
    title: "Green Tea & Hearbs Tea",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/rxqxi3eybpds7l8mymrt.png",
    title: "Apple Clider Vinegar",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/odov6fsbhdgwfnqnqmyf.jpg",
    title: "Breaker Creals",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/rstb8fbortn6f868mznd.png",
    title: "Herbal Juice",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/rabrbljquehqgd6xza9j.png",
    title: "Nutrional Drinks",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/jvqtphggru8juyrasmj8.png",
    title: "Dry Fruits",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/tyislu0jse29jkwwegb8.jpg",
    title: "Honey",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/tyislu0jse29jkwwegb8.jpg",
    title: "Healthy Snacks",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/vchcj8b7onea3rmfml5z.png",
    title: "Superfoods",
  },
];
export const Home = () => {
  const [topsSellers, setTopSellers] = useState({
    data: [],
    height: "368px",
    width: "1280px",
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });
  const [calciumSupData, setCalciumSupData] = useState({
    data: [],
    height: "368px",
    width: "1280px",
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });

  const [trendingNowData, setTrendingNowData] = useState({
    data: [],
    height: "368px",
    width: "1280px",
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });

  const [dealsOfTheDayData, setDealsOfTheDayData] = useState({
    data: [],
    height: "368px",
    width: "1280px",
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });

  const [newArrivalsDay, setNewArrivalsDay] = useState({
    data: [],
    height: "368px",
    width: "1280px",
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  });

  //Getting Products Data
  useEffect(() => {
    let TopSellers = getData(12, 0).then((data) =>
      setTopSellers({ ...topsSellers, data })
    );

    let calc = getData(12, 12).then((data) => {
      setCalciumSupData({ ...calciumSupData, data });
    });

    let trending = getData(12, 24).then((data) => {
      setTrendingNowData({ ...calciumSupData, data });
    });

    let dealsOfTheDay = getData(12, 36).then((data) => {
      setDealsOfTheDayData({ ...calciumSupData, data });
    });

    let newArrivals = getData(12, 36).then((data) => {
      setNewArrivalsDay({ ...calciumSupData, data: data.reverse() });
    });
    // console.log(data);
  }, []);

  const getData = async (limit, skip) => {
    try {
      let { data } = await axios.get(
        `${process.env.REACT_APP_API}/slider?limit=${limit}&skip=${skip}`
      );
      return data.data;
    } catch (e) {
      console.log(e);
    }
  };
  //Data of banners and sliders
  // Type 1 Slider
  const data1 = {
    data: Banner,
    height: "250px",
    width: "100%",
    arrows: false,
  };

  // Type - 2 Slider
  const brandsProp = {
    data: BrandsData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  const MonsoonProp = {
    data: MonsoonSellData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };
  const PopularCategorise = {
    data: PopularCategoriesData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  const ShopByHealthConcerns = {
    data: ShopByHealthData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  const HealthCareDevices = {
    data: HealthCareDevicesData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  const HealthAndFoods = {
    data: HealthAndFoodData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };
  // Type-3 slider
  const FullBodyChekcup = {
    data: FullBodyHealthCheckupData,
    height: "154px",
    width: "1280px",
    cardHeight: "100%",
    cardWidth: "255px",
    cardPadding: "10px",
    arrows: true,
  };

  //ProductSlider
  const TopSellers = {
    data: PopularCategoriesData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  //Button
  const seeAllButton = {
    bg: "#ff6f61",
    text: "SEE ALL",
    width: "63px",
    br: "3px",
    fontWeight: "Bold",
    color: "#ffffff",
    height: "27px",
    fontSize: "12px",
  };

  return (
    <>
      <HomeWrapper>
        {/* <h1>Banner Slider</h1>
      <BannerSlider {...data1} />
      <h2>Brands Slider</h2>
      <BrandsSlider {...data2} /> */}

        {/* Top Courosal with banner */}
        <div className="topBanner">
          <div className="bannerSliderContainer">
            <BannerSlider {...data1} />
          </div>
          <div className="rightBanner">
            <img src={RightBanner} alt="" />
          </div>
        </div>
        {/* Heading  */}
        <div className="headingOf1mg">
          <h1>
            Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
          </h1>
        </div>
        {/* Add Care Plan */}
        <div className="addOfCarePlan">
          <span>
            <img src={Careplan} alt="careplan" />
          </span>
        </div>
        {/* Featured Brands */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span> Featured Brands</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...brandsProp} />
          </div>
        </div>

        {/* Full body health Checkup */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Full body health checkups</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier" style={{ height: "184px" }}>
            {/* <BrandsSlider {...brandsProp} /> */}
            <SliderTypeThree {...FullBodyChekcup} />
          </div>
        </div>
        {/* Monsoon Sell */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Monsoon Wellness Sale</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...MonsoonProp} />
          </div>
        </div>
        {/* Popular Categories Sell */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Popular Categories</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...PopularCategorise} />
          </div>
        </div>
        {/* Top sellers */}
        {/* If height is more , give height to featuredBrands as well  */}
        <div className="featuredBrands" style={{ height: "415px" }}>
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Top Sellers </span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier" style={{ height: "368px" }}>
            <ProductSlider {...topsSellers} />
          </div>
        </div>
        {/* Calcium| Supplement of the week */}
        <div className="featuredBrands" style={{ height: "415px" }}>
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Calcium| Supplement of the week</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier" style={{ height: "368px" }}>
            <ProductSlider {...calciumSupData} />
          </div>
        </div>
        {/* Shop by Health Concerns */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Shop by Health Concerns</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...ShopByHealthConcerns} />
          </div>
        </div>
        {/* Trending Now */}
        <div className="featuredBrands" style={{ height: "415px" }}>
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Trendng Now</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier" style={{ height: "368px" }}>
            <ProductSlider {...trendingNowData} />
          </div>
        </div>

        {/* Deals of the day */}
        <div className="featuredBrands" style={{ height: "415px" }}>
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Deals of the day</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier" style={{ height: "368px" }}>
            <ProductSlider {...dealsOfTheDayData} />
          </div>
        </div>
        {/*Shop by Health Concerns */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Shop by Health Concerns</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...HealthCareDevices} />
          </div>
        </div>
        {/* New Arrivals on TATA 1mg */}
        <div className="featuredBrands" style={{ height: "415px" }}>
          {/* New arrivals on TATA 1mg */}
          <div className="headingOfComponent">
            <span>New arrivals on TATA 1mg</span>
            <Button styles={seeAllButton} />
          </div>
          {/*New arrivals on TATA 1mg */}
          <div className="sliderContaier" style={{ height: "368px" }}>
            <ProductSlider {...newArrivalsDay} />
          </div>
        </div>
        {/* Health and Foods */}
        <div className="featuredBrands">
          {/* Heading of Comp */}
          <div className="headingOfComponent">
            <span>Shop by Health Concerns</span>
            <Button styles={seeAllButton} />
          </div>
          {/* Slider Container */}
          <div className="sliderContaier">
            <BrandsSlider {...HealthAndFoods} />
          </div>
        </div>
        {/* Description */}
        <Upperfooter />
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
