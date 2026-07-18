function naverSearch(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function parkingSearch(location) {
  if (location.type === "stay" || location.skipParking) return null;
  if (location.parkingUrl) {
    return {
      label: location.parkingLabel || (location.type === "food" ? "附近公營停車" : "景點停車場"),
      url: location.parkingUrl
    };
  }
  const query =
    location.type === "food"
      ? `${location.korean} 주변 공영주차장`
      : `${location.korean} 주차장`;

  return {
    label: location.type === "food" ? "附近公營停車" : "景點停車場",
    url: naverSearch(query)
  };
}

const locations = [
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "大田",
    name: "大田站",
    korean: "대전역",
    url: naverSearch("대전역"),
    note: "8/1 全員集合點。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "food",
    city: "大田",
    name: "聖心堂大田站店",
    korean: "성심당 대전역점",
    url: naverSearch("성심당 대전역점"),
    note: "大田站二樓麵包店。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "大田",
    name: "樂天租車大田店取車",
    korean: "롯데렌터카 대전지점",
    url: naverSearch("롯데렌터카 대전지점"),
    note: "11:00 UBER 前往樂天租車大田店取車；預計 12:00 取車完畢後前往扶餘。此項為 Naver Map 搜尋連結。",
    skipParking: true
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "扶餘",
    name: "定林寺址",
    korean: "정림사지",
    url: "https://naver.me/IxsqyI5i",
    note: "百濟遺跡，UNESCO 世界文化遺產相關景點。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "扶餘",
    name: "宮南池",
    korean: "궁남지",
    url: "https://naver.me/Gsj28pqV",
    note: "韓國早期人工庭園，夏季蓮花景觀。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "扶餘",
    name: "國立扶餘博物館",
    korean: "국립부여박물관",
    url: "https://naver.me/5GpYsFyU",
    note: "百濟文化與文物展示。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "spot",
    city: "扶餘",
    name: "扶蘇山城",
    korean: "부소산성",
    url: "https://naver.me/xiqu1hqQ",
    note: "百濟都城防禦遺跡。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "food",
    city: "扶餘",
    name: "鄉村炸雞",
    korean: "시골통닭",
    url: "https://naver.me/GaldxpRC",
    note: "扶餘知名炸雞店。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "food",
    city: "扶餘",
    name: "百濟家",
    korean: "백제의집",
    url: "https://naver.me/5134tW0T",
    note: "蓮葉飯定食與百濟風格餐點。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "food",
    city: "扶餘",
    name: "長元蕎麥冷麵",
    korean: "장원막국수",
    url: "https://naver.me/FSw7R2Bi",
    note: "蕎麥冷麵與水煮肉片。"
  },
  {
    day: "8/1",
    dayTitle: "大田集合往扶餘",
    type: "stay",
    city: "扶餘",
    name: "Green Mate 獨立民宿",
    korean: "Green Mate",
    url: "https://naver.me/Fm31NkyW",
    note: "8/1 扶餘住宿點；15:00 後入住，入住資訊出發前另行確認。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "spot",
    city: "扶餘",
    name: "扶餘百濟文化園區",
    korean: "백제문화단지",
    url: "https://naver.me/x2jQnSH4",
    note: "大型百濟歷史文化園區。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "spot",
    city: "公州",
    name: "宋山里古墳群 / 武寧王陵",
    korean: "무령왕릉과 왕릉원",
    url: "https://naver.me/F0z2wAIm",
    note: "熊津時代百濟王陵，UNESCO 世界遺產相關景點。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "spot",
    city: "公州",
    name: "國立公州博物館",
    korean: "국립공주박물관",
    url: "https://naver.me/Gsj2Ootm",
    note: "公州與忠清南道出土文物。",
    parkingUrl: naverSearch("국립공주박물관 주차장 공주"),
    parkingLabel: "博物館停車場"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "food",
    city: "公州",
    name: "梅香蕎麥麵",
    korean: "매향",
    url: "https://naver.me/5ZJxlxym",
    note: "清爽蕎麥麵與豬肉片涼拌。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "food",
    city: "公州",
    name: "皮湯金湯",
    korean: "피탕김탕",
    url: "https://naver.me/FfeOrO6j",
    note: "公州特色泡菜金湯。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "food",
    city: "公州",
    name: "Lucia 的庭園",
    korean: "하루카페&밤떡명가",
    url: "https://naver.me/FcmABZH8",
    note: "栗子甜點與咖啡。",
    parkingUrl: naverSearch("하루카페 밤떡명가 주변 공영주차장"),
    parkingLabel: "附近公營停車"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "food",
    city: "公州",
    name: "栗子村麵包店",
    korean: "베이커리밤마을",
    url: "https://naver.me/5Rh0tqf8",
    note: "栗子甜點與麵包名店。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "stay",
    city: "公州",
    name: "Gongju Goma Guesthouse",
    korean: "공주 고마 게스트하우스",
    url: "https://naver.me/FRLnII5f",
    note: "8/2 公州住宿點；15:00 入住，提供車位，2 樓客廳 08:00-10:00 有簡易早餐。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "spot",
    city: "公州",
    name: "公山城",
    korean: "공산성",
    url: "https://naver.me/xf5AR5s5",
    note: "8/3 上午預定景點。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "spot",
    city: "公州",
    name: "公州山城市場",
    korean: "공주산성시장",
    url: "https://naver.me/5qDjljGp",
    note: "8/3 上午預定地點。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "spot",
    city: "水原",
    name: "水原星空圖書館",
    korean: "별마당도서관 수원",
    url: naverSearch("별마당도서관 수원"),
    note: "8/3 預定景點，位於 Starfield 水原大型購物中心內。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "food",
    city: "水原",
    name: "本水原排骨",
    korean: "본수원갈비",
    url: naverSearch("본수원갈비"),
    note: "水原三大排骨名店之一，開業超過 50 年。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "food",
    city: "水原",
    name: "明成豬排骨",
    korean: "명성돼지갈비",
    url: naverSearch("명성돼지갈비 수원"),
    note: "位於長安門附近二樓的豬排骨店，用餐時段人潮較多。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "food",
    city: "水原",
    name: "麻浦本家排骨",
    korean: "마포본가",
    url: naverSearch("마포본가 수원"),
    note: "水原地區評價不錯的排骨候選店。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "food",
    city: "水原",
    name: "水原雙龍閣炸醬麵",
    korean: "쌍용각",
    url: naverSearch("쌍용각 수원"),
    note: "炸醬麵候選店，規劃書標註份量大、價格便宜。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "food",
    city: "水原",
    name: "行宮刨冰",
    korean: "행궁빙수",
    url: naverSearch("행궁빙수"),
    note: "水原華城行宮與長安門一帶的刨冰候選店。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/3",
    dayTitle: "公州往水原",
    type: "stay",
    city: "水原",
    name: "Dono 1796 Hotel Suwon",
    korean: "도노 1796 호텔",
    url: "https://naver.me/xGIPa4Ml",
    note: "8/3 水原華城內住宿點；15:00 入住，提供車位，不含早餐，可現場加購。"
  },
  {
    day: "8/4",
    dayTitle: "水原往仁川",
    type: "spot",
    city: "水原",
    name: "水原華城",
    korean: "수원 화성",
    url: naverSearch("수원 화성"),
    note: "8/4 上午預定景點。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/4",
    dayTitle: "水原往仁川",
    type: "spot",
    city: "仁川",
    name: "月尾島",
    korean: "월미도",
    url: naverSearch("월미도"),
    note: "8/4 仁川預定景點。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/4",
    dayTitle: "水原往仁川",
    type: "stay",
    city: "仁川",
    name: "Orakai Songdo Park Hotel",
    korean: "오라카이 송도파크 호텔",
    url: "https://naver.me/5HkaBiQw",
    note: "8/4-8/5 仁川松島住宿點。"
  },
  {
    day: "8/5",
    dayTitle: "江華島一日行",
    type: "spot",
    city: "江華島",
    name: "高麗宮址",
    korean: "고려궁지",
    url: naverSearch("고려궁지"),
    note: "文件中 Day 7 日期疑似應為 8/5。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/5",
    dayTitle: "江華島一日行",
    type: "spot",
    city: "江華島",
    name: "傳燈寺",
    korean: "전등사",
    url: naverSearch("전등사"),
    note: "文件中 Day 7 日期疑似應為 8/5。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/5",
    dayTitle: "江華島一日行",
    type: "food",
    city: "江華島",
    name: "江華風物市場",
    korean: "강화풍물시장",
    url: naverSearch("강화풍물시장"),
    note: "文件中 Day 7 日期疑似應為 8/5。此項為 Naver Map 搜尋連結。"
  },
  {
    day: "8/5",
    dayTitle: "江華島一日行",
    type: "spot",
    city: "仁川",
    name: "還車地點：樂天租車仁川市區店",
    korean: "SEE&SEE 빌딩",
    url: naverSearch("인천광역시 남동구 예술로 198 SEE&SEE 빌딩"),
    note: "15:00 出發前往仁川市區還車，行車約 1 小時 10 分。導航可設為「SEE&SEE 빌딩」或輸入電話 0328818000；抵達後開入地下停車場，找 롯데렌터카 專用車位，再到 2 樓 268 號辦公室交車。",
    skipParking: true,
    fuelUrl: naverSearch("인천광역시 남동구 예술로 198 주변 주유소"),
    fuelLabel: "附近加油地點"
  }
];

const typeLabels = {
  stay: "住宿",
  spot: "景點",
  food: "美食"
};

const groupOrder = ["8/1", "8/2", "8/3", "8/4", "8/5"];
const storyPlaceDetails = Array.isArray(window.storyPlaceDetails) ? window.storyPlaceDetails : [];
const itineraryDays = [
  {
    day: "8/1",
    title: "大田集合往扶餘",
    summary: "旅程正式進入百濟文化核心區。從大田集合後前往扶餘，走訪定林寺址、宮南池、扶餘博物館與扶蘇山城。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%EA%B6%81%EB%82%A8%EC%A7%80.jpg",
    imageAlt: "扶餘宮南池水面與亭閣",
    highlights: ["定林寺址", "宮南池", "扶蘇山城", "扶餘美食"],
    details: [
      {
        name: "百濟古都扶餘",
        text: "扶餘曾是百濟後期都城，行程會透過寺址、山城、博物館與庭園，把王都的宗教、政治與生活空間連起來。"
      },
      {
        name: "定林寺址與扶蘇山城",
        text: "定林寺址保留百濟佛教都城的尺度感，扶蘇山城則能看到王都防禦與地形之間的關係。"
      },
      {
        name: "宮南池",
        text: "宮南池是韓國早期人工庭園代表，夏季水面、蓮花與亭閣很適合拍照，也是這一天最有景觀感的停留點。"
      }
    ]
  },
  {
    day: "8/2",
    title: "扶餘與公州",
    summary: "延續百濟主題，上午在扶餘百濟文化園區理解王都想像，下午轉往公州看武寧王陵與國立公州博物館。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeongnimsa%20Temple%2002.jpg",
    imageAlt: "扶餘定林寺址五層石塔",
    highlights: ["百濟文化園區", "武寧王陵", "國立公州博物館", "公州住宿"],
    details: [
      {
        name: "從扶餘到公州",
        text: "這天仍以百濟歷史為主軸，但空間從扶餘轉到公州，能比較兩座古都在地形與遺址保存上的差異。"
      },
      {
        name: "武寧王陵",
        text: "武寧王陵是理解百濟王室、墓葬文化與東亞交流的重要地點，也是公州行程中最核心的歷史節點。"
      },
      {
        name: "公州博物館",
        text: "博物館可把前面看到的陵墓、都城與文物線索整理起來，適合作為這一天歷史理解的收束。"
      }
    ]
  },
  {
    day: "8/3",
    title: "公州往水原",
    summary: "上午看公山城與山城市場，午後長距離移動到水原。抵達後可用水原華城周邊、星空圖書館與排骨店作為晚間重點。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pavilion%20in%20Gongsanseong%20Fortress.jpg",
    imageAlt: "公州公山城內的亭閣",
    highlights: ["公山城", "山城市場", "水原星空圖書館", "水原排骨"],
    details: [
      {
        name: "公山城",
        text: "公山城是公州代表性的山城景觀，可從城牆、亭閣與河岸地形感受百濟王都防禦與城市位置。"
      },
      {
        name: "山城市場",
        text: "市場停留讓行程從古蹟轉到地方生活，可以補充餐食、飲料，也讓參與者看到公州日常面貌。"
      },
      {
        name: "水原晚間安排",
        text: "移動到水原後，星空圖書館與排骨餐廳比較偏城市休閒與美食，行程節奏會從古都轉向現代都市。"
      }
    ]
  },
  {
    day: "8/4",
    title: "水原往仁川",
    summary: "上午以水原華城作為城市歷史亮點，之後往仁川移動，接上月尾島與松島住宿的海港城市節奏。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%2002.jpg",
    imageAlt: "水原華城城牆",
    highlights: ["水原華城", "月尾島", "松島", "Orakai Songdo Park Hotel"],
    details: [
      {
        name: "水原華城",
        text: "水原華城是朝鮮王朝後期重要城郭，兼具軍事防禦、城市規劃與王權展示，是與百濟古都不同時代的城市案例。"
      },
      {
        name: "往仁川移動",
        text: "下午轉往仁川後，景觀會從內陸歷史城市切換到港口、海邊與新市鎮，旅程視覺感會明顯改變。"
      },
      {
        name: "月尾島與松島",
        text: "月尾島帶有海邊遊憩氣氛，松島則是規劃型新市鎮，適合觀察韓國城市發展的另一種面貌。"
      }
    ]
  },
  {
    day: "8/5",
    title: "江華島一日行",
    summary: "旅程最後一個完整日安排江華島，從高麗宮址、傳燈寺到風物市場，把歷史、寺院與地方市場串在一起。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeongdeungsa%20%28Ganghwa%29%2013-01259.JPG",
    imageAlt: "江華島傳燈寺建築",
    highlights: ["高麗宮址", "傳燈寺", "江華風物市場"],
    details: [
      {
        name: "江華島的歷史層次",
        text: "江華島不是單純的郊遊地，它同時連著高麗時期、佛教寺院、海防與地方市場，是很適合收尾的歷史島嶼。"
      },
      {
        name: "高麗宮址",
        text: "高麗宮址可作為理解高麗王朝避難與政治中心轉移的入口，和前幾天的百濟、朝鮮城郭形成時代對照。"
      },
      {
        name: "傳燈寺與風物市場",
        text: "傳燈寺提供山林寺院與建築細節，風物市場則讓最後一天回到地方飲食與伴手禮的生活感。"
      }
    ]
  }
];

const homeView = document.querySelector("#homeView");
const storyView = document.querySelector("#storyView");
const navView = document.querySelector("#navView");
const itineraryEl = document.querySelector("#itineraryDays");
const storyFilterButtons = document.querySelectorAll(".story-filter-chip");
const storyDateButtons = document.querySelectorAll(".story-date-chip");
const filterButtons = document.querySelectorAll(".filter-chip");
const dateButtons = document.querySelectorAll(".date-chip");
const searchInput = document.querySelector("#searchInput");
const groupsEl = document.querySelector("#locationGroups");

let activeStoryFilter = "all";
let activeStoryDate = "all";
let activeFilter = "all";
let activeDate = "all";

function setMode(mode) {
  const targetMode = ["home", "story", "nav"].includes(mode) ? mode : "home";
  homeView.hidden = targetMode !== "home";
  storyView.hidden = targetMode !== "story";
  navView.hidden = targetMode !== "nav";
  document.body.dataset.mode = targetMode;

  if (window.location.hash !== `#${targetMode}`) {
    history.replaceState(null, "", targetMode === "home" ? window.location.pathname : `#${targetMode}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setDateFilter(day) {
  activeDate = day;
  dateButtons.forEach((item) => item.classList.toggle("active", item.dataset.date === day));
  renderLocations();
}

function setStoryDateFilter(day) {
  activeStoryDate = day;
  storyDateButtons.forEach((item) => item.classList.toggle("active", item.dataset.storyDate === day));
  renderItinerary();
}

function normalizeText(value) {
  return value.toLowerCase().trim();
}

function matchesLocation(location, term) {
  if (!term) return true;
  const parking = parkingSearch(location);
  return [location.day, location.dayTitle, location.type, location.city, location.name, location.korean, location.note, parking?.label]
    .join(" ")
    .toLowerCase()
    .includes(term);
}

function createLocationCard(location) {
  const article = document.createElement("article");
  article.className = `location-card ${location.type}-card`;
  article.dataset.type = location.type;
  const parking = parkingSearch(location);
  const fuel = location.fuelUrl
    ? {
        label: location.fuelLabel || "附近加油地點",
        url: location.fuelUrl
      }
    : null;

  article.innerHTML = `
    <div class="card-top">
      <div>
        <h3 class="location-name">${location.name}</h3>
        <p class="korean-name">${location.korean}</p>
      </div>
      <span class="tag ${location.type}">${typeLabels[location.type]}</span>
    </div>
    <div class="meta">
      <span>${location.day}</span>
      <span>${location.city}</span>
    </div>
    <p class="note">${location.note}</p>
    ${parking ? `<p class="parking-note">停車搜尋：${parking.label}</p>` : ""}
    ${fuel ? `<p class="parking-note">還車前提醒：請先加油，可用下方按鈕搜尋附近加油站。</p>` : ""}
    <div class="actions ${parking || fuel ? "has-parking" : ""}">
      <a class="nav-button" href="${location.url}" target="_blank" rel="noopener">開啟 Naver Map</a>
      ${parking ? `<a class="parking-button" href="${parking.url}" target="_blank" rel="noopener">找附近停車</a>` : ""}
      ${fuel ? `<a class="parking-button fuel-button" href="${fuel.url}" target="_blank" rel="noopener">${fuel.label}</a>` : ""}
      <button class="copy-button" type="button" data-url="${location.url}">複製</button>
    </div>
  `;

  return article;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function storyKindClass(kind) {
  return ["stay", "spot", "food", "shop"].includes(kind) ? kind : "spot";
}

function createStoryPlaceBlock(place) {
  const paragraphs = Array.isArray(place.description) ? place.description.filter(Boolean) : [];
  const images = Array.isArray(place.images) ? place.images.filter(Boolean) : [];
  const links = Array.isArray(place.links) ? place.links.filter((link) => link.href) : [];
  const kind = storyKindClass(place.kind);
  const firstParagraph = paragraphs[0] || "";
  const extraParagraphs = paragraphs.slice(1);
  const navigationLink = links.find((link) => /naver|map/i.test(`${link.label} ${link.href}`));
  const sourceLinks = links.filter((link) => link !== navigationLink).slice(0, 2);

  return `
    <section class="story-place ${kind}-story">
      <div class="story-place-top">
        <span class="story-place-kind ${kind}">${escapeHtml(place.kindLabel || typeLabels[kind] || "地點")}</span>
        <h5>${escapeHtml(place.title)}</h5>
      </div>
      ${images.length ? `
        <div class="place-gallery" aria-label="${escapeHtml(place.title)}圖片">
          ${images.map((src, index) => `
            <img src="${escapeHtml(src)}" alt="${escapeHtml(place.title)} 圖片 ${index + 1}" loading="lazy">
          `).join("")}
        </div>
      ` : ""}
      ${firstParagraph ? `<p>${escapeHtml(firstParagraph)}</p>` : ""}
      ${extraParagraphs.length ? `
        <details class="story-more">
          <summary>更多介紹</summary>
          ${extraParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </details>
      ` : ""}
      ${links.length ? `
        <div class="story-place-links">
          ${navigationLink ? `<a href="${escapeHtml(navigationLink.href)}" target="_blank" rel="noopener">${escapeHtml(navigationLink.label || "Naver Map")}</a>` : ""}
          ${sourceLinks.map((link) => `
            <a href="${escapeHtml(link.href)}" target="_blank" rel="noopener">${escapeHtml(link.label || "參考資料")}</a>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

function createItineraryCard(day) {
  const article = document.createElement("article");
  article.className = "itinerary-card";
  const storyPlaces = storyPlaceDetails.filter((place) => {
    const typeMatch = activeStoryFilter === "all" || place.kind === activeStoryFilter;
    return place.day === day.day && typeMatch;
  });
  article.innerHTML = `
    <img src="${day.image}" alt="${day.imageAlt}" loading="lazy">
    <div class="itinerary-content">
      <div class="itinerary-top">
        <span class="itinerary-date">${day.day}</span>
        <h3>${day.title}</h3>
      </div>
      <p>${day.summary}</p>
      <ul class="highlight-list">
        ${day.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
      </ul>
      ${storyPlaces.length ? `
        <div class="place-detail-section">
          <h4>地點介紹與照片</h4>
          <div class="story-place-list">
            ${storyPlaces.map(createStoryPlaceBlock).join("")}
          </div>
        </div>
      ` : ""}
      <button class="story-nav-link" type="button" data-day-nav="${day.day}">需要開車時，開啟這天導航</button>
    </div>
  `;

  return article;
}

function renderItinerary() {
  itineraryEl.innerHTML = "";
  const filteredDays = itineraryDays.filter((day) => {
    const dateMatch = activeStoryDate === "all" || day.day === activeStoryDate;
    const typeMatch =
      activeStoryFilter === "all" ||
      storyPlaceDetails.some((place) => place.day === day.day && place.kind === activeStoryFilter);
    return dateMatch && typeMatch;
  });

  if (!filteredDays.length) {
    itineraryEl.innerHTML = `<div class="empty">沒有符合條件的總覽內容。</div>`;
    return;
  }

  filteredDays.forEach((day) => itineraryEl.appendChild(createItineraryCard(day)));
}

function renderLocations() {
  const term = normalizeText(searchInput.value);
  const filtered = locations.filter((location) => {
    const typeMatch = activeFilter === "all" || location.type === activeFilter;
    const dateMatch = activeDate === "all" || location.day === activeDate;
    return typeMatch && dateMatch && matchesLocation(location, term);
  });

  groupsEl.innerHTML = "";

  if (!filtered.length) {
    groupsEl.innerHTML = `<div class="empty">沒有符合條件的地點。</div>`;
    return;
  }

  groupOrder.forEach((day) => {
    const dayLocations = filtered.filter((location) => location.day === day);
    if (!dayLocations.length) return;

    const section = document.createElement("section");
    section.className = "day-group";
    const dayTitle = dayLocations[0].dayTitle;
    section.innerHTML = `
      <div class="day-title">
        <h2>${day} ${dayTitle}</h2>
        <span>${dayLocations.length} 個地點</span>
      </div>
      <div class="location-list"></div>
    `;

    const list = section.querySelector(".location-list");
    dayLocations.forEach((location) => list.appendChild(createLocationCard(location)));
    groupsEl.appendChild(section);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderLocations();
  });
});

storyFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeStoryFilter = button.dataset.storyFilter;
    storyFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderItinerary();
  });
});

storyDateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setStoryDateFilter(button.dataset.storyDate);
  });
});

dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setDateFilter(button.dataset.date);
  });
});

searchInput.addEventListener("input", renderLocations);

window.addEventListener("hashchange", () => {
  setMode(window.location.hash.replace("#", "") || "home");
});

document.addEventListener("click", async (event) => {
  const modeButton = event.target.closest("[data-mode-target]");
  if (modeButton) {
    setMode(modeButton.dataset.modeTarget);
    return;
  }

  const dayNavButton = event.target.closest("[data-day-nav]");
  if (dayNavButton) {
    setMode("nav");
    setDateFilter(dayNavButton.dataset.dayNav);
    return;
  }

  const button = event.target.closest(".copy-button");
  if (!button) return;

  try {
    await navigator.clipboard.writeText(button.dataset.url);
    const originalText = button.textContent;
    button.textContent = "已複製";
    setTimeout(() => {
      button.textContent = originalText;
    }, 1400);
  } catch {
    button.textContent = "失敗";
  }
});

renderItinerary();
renderLocations();
setMode(window.location.hash.replace("#", "") || "home");
