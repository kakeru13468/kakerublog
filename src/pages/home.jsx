import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData';
import projects from '../data/projectData';
import Typewriter from 'typewriter-effect';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // 引用整個頁面容器
  const containerRef = useRef(null);

  // 滾動進度控制
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  // 監控滾動進度
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // 獲取最新的 3 篇博客文章
  const latestPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  ).slice(0, 3);

  // 確保有博客文章數據
  console.log("Latest posts:", latestPosts);

  // 首頁元素的動畫轉換
  const homeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const homeY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // 背景顏色隨滾動變化
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.45, 0.5, 0.75, 1],
    [
      "rgb(0, 0, 0)", // 黑色
      "rgb(0, 0, 0)",
      "rgb(17, 24, 39)", // 灰黑色
      "rgb(17, 24, 39)",
      "rgb(0, 0, 0)", // 回到黑色
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)"
    ]
  );

  // React 圖標元素的動畫轉換
  const reactX = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [-500, -100, -100, -500]);
  const reactOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const reactRotate = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [-15, 0, 0, -15]);

  // 資料夾圖標元素的動畫轉換
  const folderX = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [-300, 0, 0, -300]);
  const folderOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const folderRotate = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [-10, 0, 0, -10]);
  const folderScale = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0.9, 1, 1, 0.9]);

  // 首頁區塊參考 - 保留用於導航點判斷
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  // React 區塊和資料夾區塊的參考 - 保留用於導航點判斷
  const { ref: reactSectionRef, inView: reactSectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: folderSectionRef, inView: folderSectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // 添加專案區塊引用
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // 添加文章區塊引用
  const { ref: articlesRef, inView: articlesInView } = useInView({
    threshold: 0.05,
    triggerOnce: false
  });

  // React 技能列表 - 階梯式排列的 Hooks
  const skillStack = [
    {
      id: 1,
      title: "React",
      description: "使用React開發網頁應用程式",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-full h-full"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      url: "https://reactjs.org"
    },
    {
      id: 2,
      title: "Tailwind CSS",
      description: "使用Tailwind CSS設計網頁外觀",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 33"
          className="w-full h-full"
        >
          <g clipPath="url(#prefix__clip0)">
            <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
          </g>
        </svg>
      ),
      url: "https://tailwindcss.com"
    },
    {
      id: 3,
      title: "PostgreSQL",
      description: "使用PostgreSQL作為資料庫",
      icon: (
        <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
          <g>
            <path d="M255.007926,158.085617 C253.473109,153.437413 249.452194,150.199279 244.251788,149.42182 C241.799982,149.055852 238.991667,149.211935 235.668988,149.897164 C229.877358,151.092028 225.580342,151.546679 222.44449,151.635363 C234.280794,131.650217 243.905921,108.859714 249.446873,87.4065589 C258.406282,52.7182633 253.61855,36.9154365 248.023797,29.7669469 C233.217182,10.8477783 211.614448,0.683454965 185.55152,0.371879908 C171.649478,0.202198614 159.443658,2.94725173 153.077358,4.92075751 C147.149155,3.87547344 140.774577,3.29134411 134.08606,3.18315012 C121.550337,2.9833164 110.473164,5.71595381 101.008259,11.332582 C95.7670577,9.56127483 87.3580785,7.06335335 77.6460416,5.46882217 C54.8035104,1.71868822 36.3939769,4.64110855 22.9282587,14.153903 C6.62230023,25.6721293 -0.937090069,45.6838799 0.461154734,73.6339954 C0.904572748,82.5082679 5.86908083,109.507695 13.6850624,135.114199 C18.1771824,149.831538 22.9672794,162.053912 27.9223279,171.443732 C34.9490254,184.758688 42.4676212,192.600092 50.9085266,195.415501 C55.6400924,196.992296 64.2358984,198.09552 73.2774873,190.566873 C74.4232794,191.953885 75.9515935,193.33321 77.9812656,194.613801 C80.5578199,196.239076 83.7090439,197.566965 86.8555381,198.353885 C98.1969885,201.189395 108.820102,200.479926 117.882975,196.506309 C117.93855,198.117986 117.981709,199.658125 118.018365,200.987788 C118.07867,203.145164 118.137792,205.259972 118.217016,207.237617 C118.753848,220.612286 119.663741,231.011326 122.359723,238.286928 C122.507529,238.687778 122.706771,239.29733 122.917247,239.943538 C124.261691,244.062005 126.511298,250.955677 132.232573,256.355326 C138.158411,261.947714 145.325229,263.663446 151.888998,263.662855 C155.180933,263.662855 158.322106,263.231261 161.076619,262.640628 C170.897441,260.536462 182.050291,257.329663 190.118134,245.84218 C197.745515,234.981986 201.453672,218.625182 202.124711,192.851363 C202.211621,192.122975 202.292028,191.427104 202.369478,190.763751 C202.421506,190.316194 202.474716,189.858587 202.528517,189.402162 L204.325838,189.560018 L204.788767,189.591353 C214.791095,190.047187 227.021155,187.925875 234.532065,184.437062 C240.467363,181.68255 259.485857,171.642383 255.007926,158.085617" fill="#000000">

            </path>
            <path d="M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 206.121386,156.78788 C237.521885,110.194697 250.64824,51.0516028 239.320388,36.5766651 C208.417109,-2.90823095 154.921977,15.7655797 154.029229,16.2503834 L153.741894,16.3018199 C147.866309,15.0821247 141.290716,14.3555104 133.900416,14.2349007 C120.443566,14.0143741 110.236083,17.7627344 102.490457,23.636545 C102.490457,23.636545 7.06039723,-15.6768961 11.4987159,73.0806097 C12.4429007,91.9631224 38.5625866,215.954032 69.7171363,178.502947 C81.1041109,164.808425 92.1061986,153.229303 92.1061986,153.229303 C97.5708822,156.859418 104.112776,158.711132 110.970975,158.046005 L111.503667,157.593718 C111.338125,159.294079 111.413801,160.957192 111.717099,162.925968 C103.691233,171.893062 106.049626,173.467492 90.0055797,176.770069 C73.7711594,180.115806 83.308194,186.072388 89.5349654,187.629081 C97.0837136,189.516859 114.54788,192.190965 126.34812,175.672166 L125.877506,177.556988 C129.022226,180.075603 131.230448,193.940397 130.860342,206.508637 C130.490236,219.077469 130.243104,227.706383 132.720924,234.446337 C135.198744,241.186291 137.668286,256.351187 158.759612,251.831871 C176.383409,248.055132 185.516046,238.268009 186.786587,221.94254 C187.688203,210.336222 189.728517,212.051954 189.857404,201.675381 L191.493912,196.762901 C193.381099,181.029838 191.793663,175.95418 202.651492,178.314938 L205.290125,178.546697 C213.2817,178.9103 223.741044,177.261376 229.879723,174.408129 C243.098309,168.273589 250.93794,158.031224 237.904406,160.722476 L237.905589,160.722476" fill="#336791">

            </path>
            <path d="M108.076342,81.5250624 C105.396915,81.152 102.969349,81.4972748 101.741376,82.426679 C101.050236,82.9499122 100.836804,83.5559169 100.779455,83.973321 C100.625145,85.0783187 101.399649,86.2997875 101.874993,86.9300323 C103.220619,88.7137552 105.18703,89.9399538 107.133339,90.2101432 C107.415353,90.249164 107.695594,90.2680831 107.974651,90.2680831 C111.220471,90.2680831 114.170679,87.7411917 114.430818,85.8758799 C114.755991,83.5399538 111.36473,81.9826697 108.076342,81.5250624" fill="#FFFFFF">

            </path>
            <path d="M196.860453,81.5989654 L196.859861,81.5989654 C196.604453,79.7679446 193.345626,79.2458938 190.253524,79.6757136 C187.166152,80.1061247 184.171603,81.4996397 184.421691,83.3347991 C184.622707,84.7620139 187.19867,87.198448 190.249386,87.1978568 C190.506568,87.1978568 190.766707,87.1807113 191.028619,87.1440554 C193.064794,86.8620416 194.558818,85.5690346 195.268286,84.8235012 C196.349635,83.688351 196.974559,82.4219492 196.860453,81.5989654" fill="#FFFFFF">

            </path>
            <path d="M247.802088,160.025423 C246.66812,156.596323 243.018494,155.492508 236.954309,156.745312 C218.949173,160.461155 212.501284,157.886965 210.38352,156.327908 C224.378975,135.007187 235.89188,109.236323 242.102688,85.1906513 C245.04521,73.8007206 246.670485,63.2231316 246.802919,54.601903 C246.949543,45.1375889 245.338457,38.1842032 242.014005,33.9362587 C228.611547,16.8108637 208.942115,7.62501617 185.131751,7.37256351 C168.763122,7.18869284 154.93321,11.3781062 152.252009,12.5558245 C146.60582,11.1516674 140.450587,10.2896628 133.750245,10.1796952 C121.461654,9.98104388 110.840314,12.9229746 102.045857,18.9191686 C98.2259584,17.4978661 88.3536998,14.10897 76.2814965,12.1644342 C55.4089238,8.80332564 38.8233164,11.3497275 26.9870115,19.7350577 C12.8638522,29.740933 6.34383372,47.626642 7.60727945,72.8943741 C8.03236952,81.3961755 12.8756767,107.547788 20.5202032,132.593219 C30.5822448,165.556915 41.5192979,184.218309 53.0280647,188.056536 C54.374873,188.505866 55.9286097,188.820397 57.6407945,188.820397 C61.8390762,188.820397 66.9856813,186.927889 72.3409885,180.490051 C81.2359538,169.788896 89.5408776,160.821801 92.6022356,157.563566 C97.1262818,159.992314 102.09552,161.347991 107.179455,161.483972 C107.188323,161.616998 107.201921,161.750023 107.213746,161.882457 C106.193885,163.092102 105.357303,164.152166 104.644286,165.05733 C101.122365,169.528166 100.389247,170.458753 89.0519353,172.793497 C85.8273995,173.458624 77.2611547,175.224018 77.1364065,181.227898 C76.9998337,187.787529 87.2605266,190.542633 88.4299677,190.834697 C92.5040924,191.854559 96.4286374,192.357691 100.171677,192.357691 C109.275344,192.357099 117.285838,189.365506 123.688203,183.576831 C123.490734,206.962697 124.466254,230.006836 127.273977,237.028212 C129.573247,242.775501 135.191649,256.822984 152.93842,256.821801 C155.54158,256.821801 158.408425,256.519095 161.561423,255.843326 C180.082106,251.872074 188.124527,243.686577 191.236139,225.640055 C192.901025,215.995418 195.758411,192.963695 197.101672,180.610069 C199.937774,181.49454 203.589173,181.899529 207.536185,181.898938 C215.768388,181.898938 225.266993,180.150097 231.224166,177.384942 C237.91564,174.277469 249.991982,166.650679 247.802088,160.025423 L247.802088,160.025423 Z M203.696185,76.5445912 C203.634697,80.1918522 203.132748,83.5027067 202.600647,86.9590023 C202.028342,90.6760277 201.435935,94.5189838 201.286947,99.1843326 C201.139732,103.724342 201.706716,108.444674 202.255372,113.008924 C203.363326,122.228471 204.500249,131.720573 200.098587,141.086744 C199.41454,139.871778 198.754143,138.546254 198.14873,137.078245 C197.601848,135.752129 196.414079,133.621949 194.769885,130.673515 C188.370476,119.197857 173.385312,92.3243603 181.056443,81.3583372 C183.340933,78.0935982 189.139658,74.7384018 203.696185,76.5445912 L203.696185,76.5445912 Z M186.052286,14.7581339 C207.386014,15.2293395 224.261321,23.2102725 236.209958,38.4780416 C245.373931,50.1890069 235.282919,103.476028 206.069949,149.446651 C205.781432,149.080092 205.487594,148.709986 205.183704,148.33042 C205.062503,148.178476 204.938938,148.024166 204.814189,147.868083 C212.362938,135.400942 210.886651,123.066236 209.572952,112.129774 C209.033164,107.641792 208.523529,103.402716 208.653007,99.4214134 C208.787215,95.2000739 209.34533,91.5811917 209.884527,88.0811455 C210.548471,83.7675751 211.223058,79.3050162 211.036822,74.0437136 C211.17576,73.4921016 211.231926,72.8399815 211.159206,72.0660693 C210.683861,67.0205635 204.924157,51.9224758 193.18363,38.2551501 C186.762346,30.7808961 177.396767,22.4156674 164.609774,16.7736166 C170.109931,15.6337367 177.631483,14.5707159 186.052286,14.7581339 L186.052286,14.7581339 Z M66.6741062,175.777995 C60.7742818,182.871501 56.6995658,181.512277 55.3598522,181.065903 C46.6292471,178.153533 36.499806,159.702023 27.568776,130.441755 C19.8408868,105.123769 15.3245266,79.6650716 14.9674273,72.5260416 C13.8387806,49.9483788 19.3117413,34.2129515 31.2349561,25.7572656 C50.6389284,11.9965266 82.5413764,20.2328684 95.3602956,24.4104573 C95.1758337,24.591963 94.9842771,24.7622356 94.8015889,24.9466975 C73.7664296,46.1911501 74.2654226,82.4875751 74.3168591,84.7058476 C74.3150855,85.56194 74.3866236,86.7739492 74.485358,88.4412009 C74.8471871,94.5455889 75.5205912,105.907732 73.7214965,118.775132 C72.0489238,130.732046 75.7346143,142.435326 83.8320185,150.883917 C84.6703741,151.758337 85.5453857,152.579547 86.4493672,153.352277 C82.8446744,157.212379 75.0115473,165.74788 66.6741062,175.777995 L66.6741062,175.777995 Z M89.1530346,145.78461 C82.6265127,138.975483 79.6627067,129.503483 81.020157,119.795584 C82.920351,106.202753 82.2185681,94.3646744 81.8419584,88.0048776 C81.7893395,87.1150855 81.7426328,86.335261 81.7148453,85.7197968 C84.7880277,82.9954365 99.0288406,75.3645081 109.184296,77.6915658 C113.819492,78.7534042 116.642587,81.9087667 117.816758,87.3373857 C123.893358,115.440037 118.621413,127.153367 114.385293,136.565654 C113.512055,138.504868 112.687298,140.337663 111.982559,142.234309 L111.436859,143.699954 C110.054577,147.406337 108.768665,150.851991 107.971695,154.124416 C101.034273,154.103132 94.2848591,151.139917 89.1530346,145.78461 L89.1530346,145.78461 Z M90.2178291,183.685025 C88.1922956,183.178938 86.3701432,182.299788 85.3012102,181.570808 C86.1939584,181.150448 87.7831686,180.579326 90.5388637,180.011751 C103.876286,177.265515 105.93552,175.328074 110.433552,169.61685 C111.465238,168.30788 112.634088,166.823316 114.252859,165.015353 C114.25345,165.014171 114.254042,165.01358 114.254633,165.012988 C116.666236,162.31346 117.768868,162.771067 119.768979,163.600554 C121.390115,164.271594 122.968684,166.303039 123.608979,168.539048 C123.911686,169.594975 124.252231,171.599815 123.138956,173.158873 C113.742633,186.31479 100.051067,186.1457 90.2178291,183.685025 L90.2178291,183.685025 Z M160.016554,248.637487 C143.700545,252.133395 137.923695,243.80837 134.116804,234.291436 C131.659677,228.146845 130.452397,200.440314 131.309081,169.84388 C131.320314,169.436527 131.262374,169.043363 131.150042,168.673848 C131.05249,167.96024 130.902319,167.238356 130.694208,166.511741 C129.419529,162.059824 126.315012,158.335704 122.5903,156.792018 C121.110467,156.178919 118.393792,155.05382 115.129644,155.888628 C115.826106,153.0206 117.033386,149.782467 118.341764,146.275326 L118.891012,144.79963 C119.509432,143.136517 120.284527,141.413691 121.105145,139.590356 C125.538143,129.741746 131.609423,116.25297 125.020231,85.7795104 C122.551871,74.3659307 114.310208,68.7924619 101.815871,70.0866513 C94.3250624,70.861746 87.472776,73.8840831 84.0549099,75.6169607 C83.3200185,75.9894319 82.6477968,76.3488961 82.0199169,76.6994919 C82.9735612,65.1990023 86.578254,43.707418 100.060527,30.1098568 C108.54873,21.548933 119.854115,17.3210901 133.628453,17.5487113 C160.768591,17.9933118 178.172453,31.9213672 187.994457,43.5276859 C196.457829,53.5294226 201.040998,63.6038799 202.870245,69.0372286 C189.115418,67.6389838 179.76048,70.3544758 175.017681,77.1340416 C164.700822,91.8815335 180.662097,120.506236 188.333229,134.262836 C189.739751,136.784406 190.954125,138.963067 191.336055,139.888924 C193.833977,145.943058 197.067972,149.984665 199.429321,152.935464 C200.152979,153.839446 200.855353,154.716231 201.389229,155.481866 C197.223464,156.683233 189.740342,159.457848 190.422023,173.328554 C189.872185,180.289035 185.960647,212.874938 183.974134,224.387843 C181.351464,239.597672 175.754346,245.263372 160.016554,248.637487 L160.016554,248.637487 Z M228.120831,170.700564 C223.861062,172.678208 216.732083,174.161589 209.959612,174.479667 C202.479446,174.830263 198.671963,173.641903 197.776259,172.91115 C197.355307,164.267455 200.573339,163.364065 203.978199,162.408055 C204.513256,162.257293 205.035307,162.111261 205.53903,161.935076 C205.852379,162.189894 206.195289,162.442938 206.570716,162.690661 C212.582873,166.658956 223.306494,167.087002 238.444785,163.962383 C238.50036,163.950559 238.555935,163.939917 238.610919,163.928684 C236.569423,165.837746 233.075289,168.400111 228.120831,170.700564 L228.120831,170.700564 Z" fill="#FFFFFF"></path>
          </g>
        </svg>
      ),
      url: "https://www.postgresql.org"
    },
    {
      id: 4,
      title: "Japanese",
      description: "日文 N2 證照",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 600"
          className="w-full h-full"
        >
          <circle cx="450" cy="300" r="180" fill="#BC002D" />
        </svg>
      ),
      url: "https://www.jlpt.jp/e/"
    },
    {
      id: 5,
      title: "Process Management",
      description: "使用Process Management管理專案",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
          <line x1="12" y1="15" x2="16" y2="15" />
          <line x1="12" y1="18" x2="16" y2="18" />
        </svg>
      ),
      url: "https://www.pmi.org"
    }
  ];

  // 在這裡添加狀態來追蹤當前選擇的技能
  const [activeSkill, setActiveSkill] = useState(1);

  // 最新文章區塊的動畫參數 - 調整參數讓文章區塊更容易顯示
  const articlesOpacity = useTransform(
    scrollYProgress, 
    [0.55, 0.6, 0.95, 1], 
    [0, 1, 1, 0.8]
  );
  const articlesY = useTransform(
    scrollYProgress, 
    [0.55, 0.65, 0.9, 1], 
    [50, 0, 0, 0]
  );

  return (
    <motion.div
      ref={containerRef}
      className="text-white overflow-x-hidden"
      style={{ backgroundColor }}
    >
      {/* 滾動進度指示器 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-400 z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      {/* 右側滾動指示器 */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className={`w-2 h-2 rounded-full cursor-pointer ${homeInView ? 'bg-blue-400' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <motion.div
            className={`w-2 h-2 rounded-full cursor-pointer ${reactSectionInView ? 'bg-blue-400' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.5 }}
            onClick={() => document.querySelector('section:nth-child(2)').scrollIntoView({ behavior: 'smooth' })}
          />
          <motion.div
            className={`w-2 h-2 rounded-full cursor-pointer ${folderSectionInView ? 'bg-blue-400' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.5 }}
            onClick={() => document.querySelector('section:nth-child(3)').scrollIntoView({ behavior: 'smooth' })}
          />
          <motion.div
            className={`w-2 h-2 rounded-full cursor-pointer ${articlesInView ? 'bg-blue-400' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.5 }}
            onClick={() => document.querySelector('section:nth-child(4)').scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>

      {/* 返回頂部按鈕 */}
      <motion.button
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollProgress > 0.1 ? 1 : 0,
          y: scrollProgress > 0.1 ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* 首頁打字機效果區塊 */}
      <motion.section
        ref={homeRef}
        style={{ opacity: homeOpacity, y: homeY }}
        className="h-screen flex flex-col items-center justify-center px-4 py-16 relative"
      >
        {/* 視差背景元素 */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-10"
          style={{
            y: useTransform(scrollYProgress, [0, 0.4], [0, -200]),
            rotate: useTransform(scrollYProgress, [0, 0.4], [0, 15])
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-blue-400"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 w-20 h-20 md:w-40 md:h-40 opacity-10"
          style={{
            y: useTransform(scrollYProgress, [0, 0.4], [0, -150]),
            x: useTransform(scrollYProgress, [0, 0.4], [0, -80])
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-purple-400"
            fill="currentColor"
          >
            <rect width="100" height="100" />
          </svg>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-white z-10">
          <Typewriter
            options={{
              strings: [
                '大家好，我是游凱翔',
                'Hello, I am Kai-xiang Yu',
                'こんにちは、私は游凱翔です'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000,
              wrapperClassName: 'text-blue-400',
              cursorClassName: 'text-blue-400'
            }}
          />
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto mt-8 font-light text-center">
          前端獨立開發者，熱愛學習新技術，喜歡研究新奇的東西
        </p>


      </motion.section>

      {/* React 技能區塊 */}
      <section
        ref={reactSectionRef}
        className="min-h-screen py-12 md:py-16 px-4 md:px-12 relative flex items-center"
      >
        {/* 視差背景元素 */}
        <motion.div
          className="absolute top-10 left-5 md:left-20 w-48 h-48 md:w-96 md:h-96 opacity-5 z-0"
          style={{
            y: useTransform(scrollYProgress, [0.2, 0.7], [-80, 100]),
            rotate: useTransform(scrollYProgress, [0.2, 0.7], [0, 360])
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
            className="w-full h-full text-gray-400"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* 左側圖標區塊 - 顯示當前選中的技能圖標 */}
            <motion.div
              className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center relative z-10 overflow-visible"
              style={{
                x: reactX,
                opacity: reactOpacity,
                rotate: reactRotate
              }}
            >
              <motion.div
                className="w-64 h-64 md:w-96 md:h-96 text-blue-400"
                key={activeSkill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skillStack.find(skill => skill.id === activeSkill)?.icon}
              </motion.div>
            </motion.div>

            {/* 技能列表 - 階梯式排列 */}
            <div className="w-full md:w-1/2 md:pl-16 relative z-0">
              <h2 className="text-3xl font-light tracking-wider mb-6 text-blue-400">Skill Stack</h2>

              <div className="space-y-6 md:space-y-8">
                {skillStack.map((skill, index) => {
                  const hookX = useTransform(
                    scrollYProgress,
                    [0.15 + index * 0.01, 0.25 + index * 0.01, 0.45 + index * 0.01, 0.55 + index * 0.01],
                    [200, 0, 0, 200]
                  );
                  const hookOpacity = useTransform(
                    scrollYProgress,
                    [0.15 + index * 0.01, 0.25 + index * 0.01, 0.45 + index * 0.01, 0.55 + index * 0.01],
                    [0, 1, 1, 0]
                  );

                  return (
                    <motion.div
                      key={skill.id}
                      className={`border-l-2 ${activeSkill === skill.id ? 'border-blue-400 bg-gray-900 bg-opacity-50' : 'border-gray-700'} 
                        pl-4 py-2 md:py-3 ${index % 2 === 0 ? 'ml-0' : 'ml-4 md:ml-16'} 
                        hover:border-blue-400 cursor-pointer transition-colors`}
                      style={{ x: hookX, opacity: hookOpacity }}
                      onClick={() => setActiveSkill(skill.id)}

                    >
                      <div className="block">
                        <h3 className="text-xl font-medium text-white flex items-center">
                          {skill.title}
                        </h3>
                        <p className="text-gray-400">{skill.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 專案區塊 */}
      <section
        ref={folderSectionRef}
        className="min-h-screen py-12 md:py-16 px-4 md:px-12 relative flex items-center"
      >
        {/* 視差背景元素 */}
        <motion.div
          className="absolute bottom-10 right-5 md:right-20 w-32 h-32 md:w-64 md:h-64 opacity-5 z-0"
          style={{
            y: useTransform(scrollYProgress, [0.5, 1], [-80, 150]),
            x: useTransform(scrollYProgress, [0.5, 1], [0, 80])
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-gray-400"
            fill="currentColor"
          >
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* 資料夾圖標 */}
            <motion.div
              className="w-full md:w-2/5 mb-12 md:mb-0 flex justify-center"
              style={{
                x: folderX,
                opacity: folderOpacity,
                rotate: folderRotate,
                scale: folderScale
              }}
            >
              <svg
                className="w-48 h-48 md:w-56 md:h-56 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clipRule="evenodd"
                />
                <path
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
            </motion.div>

            {/* 專案列表 */}
            <div className="w-full md:w-3/5" ref={projectsRef}>
              <h2 className="text-3xl font-light tracking-wider mb-6 text-blue-400">我的專案</h2>
              <div className="space-y-5 md:space-y-6">
                {projects.map((project, index) => {
                  const projectX = useTransform(
                    scrollYProgress,
                    [0.45 + index * 0.02, 0.55 + index * 0.02, 0.75 + index * 0.01, 0.85 + index * 0.01],
                    [100, 0, 0, 100]
                  );
                  const projectOpacity = useTransform(
                    scrollYProgress,
                    [0.45 + index * 0.02, 0.55 + index * 0.02, 0.75 + index * 0.01, 0.85 + index * 0.01],
                    [0, 1, 1, 0]
                  );

                  return (
                    <motion.div
                      key={project.id}
                      className="border-l-2 border-blue-400 pl-4 py-2 md:py-3 hover:bg-gray-900/30 hover:border-blue-300 transition-all duration-300"
                      style={{ x: projectX, opacity: projectOpacity }}
                    >
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        查看詳情
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 文章區塊 */}
      <motion.section
        ref={articlesRef}
        className="min-h-screen flex items-center px-4 py-16 md:py-24 relative overflow-hidden"
        style={{ opacity: articlesOpacity, y: articlesY }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">最新文章</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts && latestPosts.length > 0 ? (
              latestPosts.map(post => (
                <Link to={`/blog/${post.id}`} key={post.id} className="block group h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
                  >
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm">
                          閱讀更多
                          <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-blue-300 transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">{post.summary}</p>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-400 py-12">
                <p>目前沒有文章</p>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
