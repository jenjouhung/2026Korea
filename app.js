function naverSearch(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function parkingSearch(location) {
  if (location.type === "stay") return null;
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
    day: "7/30",
    dayTitle: "抵達首爾",
    type: "stay",
    city: "首爾",
    name: "首爾仁寺洞 IBIS 酒店",
    korean: "이비스 앰배서더 서울 인사동",
    url: "https://naver.me/FY3ylqo0",
    note: "B 團 7/30-7/31 住宿。"
  },
  {
    day: "7/31",
    dayTitle: "清州抵達與大田",
    type: "spot",
    city: "清州",
    name: "清州機場火車站",
    korean: "청주공항역",
    url: "https://naver.me/5VlFw1GG",
    note: "清州機場外步行約 5 分鐘，無人站，建議先線上購票。"
  },
  {
    day: "7/31",
    dayTitle: "清州抵達與大田",
    type: "stay",
    city: "大田",
    name: "Hotel Stendhal",
    korean: "스탕달호텔",
    url: "https://naver.me/5S9jq06W",
    note: "大田住宿點。"
  },
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
    note: "8/1 扶餘住宿點；15:00 後入住，入住密碼出發前 48 小時於 Airbnb 取得。"
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
    note: "公州與忠清南道出土文物。"
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
    url: "https://naver.me/F88omljm",
    note: "栗子甜點與咖啡。"
  },
  {
    day: "8/2",
    dayTitle: "扶餘與公州",
    type: "food",
    city: "公州",
    name: "栗子村麵包店",
    korean: "베이커리밤마을",
    url: "https://naver.me/F88omljm",
    note: "原規劃書連結與 Lucia 的庭園相同，出發前建議再確認。"
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
    url: "https://naver.me/5huaWNDC",
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
  }
];

const typeLabels = {
  stay: "住宿",
  spot: "景點",
  food: "美食"
};

const groupOrder = ["7/30", "7/31", "8/1", "8/2", "8/3", "8/4", "8/5"];
const filterButtons = document.querySelectorAll(".filter-chip");
const dateButtons = document.querySelectorAll(".date-chip");
const searchInput = document.querySelector("#searchInput");
const groupsEl = document.querySelector("#locationGroups");

let activeFilter = "all";
let activeDate = "all";

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
    <div class="actions ${parking ? "has-parking" : ""}">
      <a class="nav-button" href="${location.url}" target="_blank" rel="noopener">開啟 Naver Map</a>
      ${parking ? `<a class="parking-button" href="${parking.url}" target="_blank" rel="noopener">找附近停車</a>` : ""}
      <button class="copy-button" type="button" data-url="${location.url}">複製</button>
    </div>
  `;

  return article;
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

dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeDate = button.dataset.date;
    dateButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderLocations();
  });
});

searchInput.addEventListener("input", renderLocations);

document.addEventListener("click", async (event) => {
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

renderLocations();
