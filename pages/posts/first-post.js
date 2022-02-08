import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "@components/Layout";
import Footer from "@components/Footer";
import styles from "@components/Layout.module.css";
import utilStyles from "@components/utils.module.css";

const food = [
  {
    breakfast: "Nope",
    lunch: "牛肉丸＋雞胸肉＋蕃薯＋萵苣",
    bonus: "香蕉",
    dinner: "小黃瓜炒雞蛋"
  },
  {
    breakfast: "Nope",
    lunch: "牛肉丸＋雞胸肉＋蕃薯＋萵苣",
    bonus: "香蕉",
    dinner: "牛肉丸＋青菜＋金針菇＋瓜類蔬菜（小黃瓜、冬瓜等任選）"
  },
  {
    breakfast: "蘋果＋雞蛋＋黑咖啡",
    lunch: "蝦＋菠菜＋花椰菜＋蕃薯",
    bonus: "Nope",
    dinner: "雞蛋＋青菜＋蝦＋小白菜"
  },
  {
    breakfast: "蛋白＋黑咖啡",
    lunch: "蝦＋荷蘭豆＋花椰菜＋木耳",
    bonus: "Nope",
    dinner: "蝦＋荷蘭豆＋萵苣＋白菜＋木耳"
  },
  {
    breakfast: "Nope",
    lunch: "蝦＋牛肉＋蓮藕＋花椰菜＋菠菜",
    bonus: "Nope",
    dinner: "少鹽料理的海鮮"
  },
  {
    breakfast: "Nope",
    lunch: "蝦＋蛋白＋蕃薯＋豌豆＋紅蘿蔔",
    bonus: "Nope",
    dinner: "牛肉＋蝦＋荷蘭豆＋花椰菜"
  },
  {
    breakfast: "Nope",
    lunch: "蝦＋蛋白＋芹菜＋青菜＋萵苣",
    bonus: "Nope",
    dinner: "蝦＋雞胸肉＋香菇＋油麥菜"
  },
  {
    breakfast: "蛋白＋黃瓜＋香蕉＋黑咖啡",
    lunch: "蝦＋雞胸肉＋花椰菜＋蕃薯＋青菜",
    bonus: "Nope",
    dinner: "牛肉丸＋蝦＋青菜＋萵苣"
  },
  {
    breakfast: "蛋白＋蘋果",
    lunch: "蝦＋花椰菜＋荷蘭豆＋木耳",
    bonus: "Nope",
    dinner: "雞蛋＋花椰菜＋萵苣"
  },
  {
    breakfast: "Nope",
    lunch: "牛肉＋小黃瓜＋生菜＋蕃薯",
    bonus: "Nope",
    dinner: "去皮雞肉＋花椰菜＋萵苣"
  },
  {
    breakfast: "蛋白＋黑咖啡",
    lunch: "生菜＋青菜＋胡蘿蔔＋蕃薯",
    bonus: "Nope",
    dinner: "雞腿排＋花椰菜＋紫薯"
  },
  {
    breakfast: "蛋白＋紅茶（無糖或極少糖）",
    lunch: "牛肉＋花椰菜＋芹菜＋紅蘿蔔",
    bonus: "Nope",
    dinner: "蝦＋花椰菜＋小黃瓜＋菇類"
  },
  {
    breakfast: "蛋白＋黑咖啡/紅茶（無糖或極少糖）",
    lunch: "蝦＋雞肉＋荷蘭豆＋紅蘿蔔",
    bonus: "Nope",
    dinner: "牛肉＋玉米雞胸肉"
  },
  {
    breakfast: "雞蛋＋生菜",
    lunch: "蝦",
    bonus: "Nope",
    dinner: "少鹽料理的海鮮"
  }
];

export default function FirstPost() {
  const { query } = useRouter();
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [bonus, setBonus] = useState(0);

  const randomCities = (e) => {
    let len = food.length;
    setBreakfast(Math.floor(Math.random() * len));
    setLunch(Math.floor(Math.random() * len));
    setDinner(Math.floor(Math.random() * len));
    setBonus(Math.floor(Math.random() * len));
  };

  return (
    <div onLoad={randomCities}>
      {breakfast}, {lunch},{dinner},{bonus}
      <button onClick={randomCities}>Change</button>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>{query.name}</h1>
        <div className="flex-container">
          <div className="item">
            <img
              src="/icons/breakfast.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h4>早餐:{food[breakfast].breakfast}</h4>
          </div>
          <div className="item">
            <img
              src="/icons/lunch.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h4>午餐:{food[lunch].lunch}</h4>
          </div>
          <div className="item">
            <img
              src="/icons/dinner.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h4>晚餐:{food[dinner].dinner}</h4>
          </div>
          <div className="item">
            <img
              src="/icons/bonus.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h4>甜點:{food[bonus].bonus}</h4>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
