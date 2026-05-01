/* =============================================
   TNTT THÁI HÀ — Tin Mừng Hôm Nay
   script.js
   ============================================= */

const DATA = {
  0: {
    scripture: {
      title: "Chúa Giêsu chữa lành người mù Bartimê",
      text: "Khi Chúa Giêsu và môn đệ sắp rời thành Giê-ri-khô, người ta thấy một người mù tên là Bartimê ngồi bên vệ đường ăn xin. Nghe tin Đức Giêsu Na-da-rét đi qua, ông ta bắt đầu kêu lớn: 'Lạy ông Giêsu, Con vua Đavít, xin dủ lòng thương tôi!'",
      ref: "Mc 10, 46-52"
    },
    questions: [
      {
        q: "Người mù trong bài Tin Mừng hôm nay tên là gì?",
        options: ["Giakêu", "Bartimê", "Lazarô", "Simôn"],
        correct: 1,
        explain: "Người mù tên là Bartimê, con ông Timê, ngồi ăn xin bên vệ đường Giêricô."
      },
      {
        q: "Bartimê đang làm gì khi Chúa Giêsu đi qua?",
        options: ["Cày ruộng", "Đánh cá", "Ngồi ăn xin bên vệ đường", "Đi theo đám đông"],
        correct: 2,
        explain: "Bartimê ngồi bên vệ đường ăn xin trước khi được Chúa Giêsu chữa lành."
      },
      {
        q: "Bartimê đã kêu gọi Chúa Giêsu bằng tước hiệu nào?",
        options: ["Con Thiên Chúa", "Ngôn sứ", "Con vua Đavít", "Thầy Chí Thánh"],
        correct: 2,
        explain: "Bartimê kêu: 'Lạy ông Giêsu, Con vua Đavít, xin dủ lòng thương tôi!' Đây là lời tuyên xưng đức tin."
      },
      {
        q: "Chúa Giêsu hỏi Bartimê điều gì?",
        options: ["Anh có muốn sạch không?", "Anh muốn ta làm gì cho anh?", "Anh tin ta không?", "Anh đã tội lỗi gì?"],
        correct: 1,
        explain: "Chúa Giêsu hỏi: 'Anh muốn ta làm gì cho anh?' – Ngài tôn trọng và lắng nghe ước muốn của Bartimê."
      },
      {
        q: "Sau khi được chữa lành, Bartimê đã làm gì?",
        options: ["Trở về nhà", "Theo Chúa Giêsu trên đường", "Loan báo cho mọi người", "Dâng lễ vật tạ ơn"],
        correct: 1,
        explain: "Sau khi sáng mắt, Bartimê đi theo Chúa Giêsu trên đường – ông trở thành môn đệ."
      }
    ]
  },
  1: {
    scripture: {
      title: "Chúa Giêsu và người phụ nữ xứ Canaan",
      text: "Một người phụ nữ xứ Canaan đến thưa với Chúa Giêsu: 'Lạy Ngài, Con vua Đavít, xin dủ lòng thương tôi! Con gái tôi bị quỷ ám khổ sở lắm!' Nhưng Người không đáp lại một lời. Bà cứ kiên trì kêu xin cho đến khi được Chúa nhận lời.",
      ref: "Mt 15, 21-28"
    },
    questions: [
      {
        q: "Người phụ nữ trong bài Tin Mừng đến từ đâu?",
        options: ["Giêrusalem", "Galilêa", "Canaan", "Samari"],
        correct: 2,
        explain: "Bà là người phụ nữ xứ Canaan – không phải người Do Thái, nhưng bà có đức tin vĩ đại."
      },
      {
        q: "Bà đến cầu xin Chúa Giêsu điều gì?",
        options: ["Xin tiền bạc", "Xin chữa lành con gái bị quỷ ám", "Xin việc làm", "Xin tha tội"],
        correct: 1,
        explain: "Bà xin Chúa Giêsu chữa lành con gái đang bị quỷ ám khổ sở."
      },
      {
        q: "Lúc đầu Chúa Giêsu đáp lại thế nào?",
        options: ["Chữa lành ngay lập tức", "Khen ngợi bà", "Không đáp lại một lời", "Xua đuổi bà"],
        correct: 2,
        explain: "Chúa Giêsu im lặng để thử thách đức tin của bà. Bà vẫn kiên trì cầu xin."
      },
      {
        q: "Chúa Giêsu khen điều gì nơi người phụ nữ này?",
        options: ["Sự khôn ngoan", "Đức tin lớn lao của bà", "Lòng nhân hậu", "Sự kiên nhẫn"],
        correct: 1,
        explain: "Chúa Giêsu khen: 'Này bà, lòng tin của bà mạnh thật!' và chữa lành con gái bà ngay lúc đó."
      },
      {
        q: "Kết quả sau lời xin của bà là gì?",
        options: ["Bà được giàu có", "Con gái bà được chữa lành", "Bà được theo Chúa", "Quỷ nói chuyện với Chúa"],
        correct: 1,
        explain: "Nhờ đức tin kiên vững, con gái bà được chữa lành ngay trong giờ đó."
      }
    ]
  },
  2: {
    scripture: {
      title: "Chúa Giêsu và Giakêu người thu thuế",
      text: "Chúa Giêsu đi vào thành Giê-ri-khô. Ở đó có một người tên là Giakêu, ông là người đứng đầu những người thu thuế và là người giàu có. Ông muốn xem Đức Giêsu là người thế nào, nhưng không được vì dân chúng thì đông mà ông lại lùn.",
      ref: "Lc 19, 1-10"
    },
    questions: [
      {
        q: "Giakêu làm nghề gì?",
        options: ["Ngư dân", "Đứng đầu những người thu thuế", "Thợ mộc", "Nông dân"],
        correct: 1,
        explain: "Giakêu là người đứng đầu những người thu thuế và rất giàu có."
      },
      {
        q: "Tại sao Giakêu phải trèo lên cây sung?",
        options: ["Để trốn đám đông", "Vì ông rất lùn nên không thấy được", "Vì ông sợ", "Vì cây xanh mát"],
        correct: 1,
        explain: "Giakêu bé nhỏ và đám đông chen chúc nên ông trèo lên cây sung để nhìn thấy Chúa."
      },
      {
        q: "Chúa Giêsu nói gì với Giakêu khi đến gốc cây?",
        options: ["Giakêu, hãy sám hối!", "Giakêu, xuống mau đi, hôm nay ta phải ở lại nhà anh", "Giakêu, tội ngươi được tha!", "Giakêu, theo ta!"],
        correct: 1,
        explain: "Chúa Giêsu gọi đích danh Giakêu và muốn đến nhà ông, thể hiện tình yêu thương đặc biệt."
      },
      {
        q: "Sau khi gặp Chúa, Giakêu hứa điều gì?",
        options: ["Bỏ nghề thu thuế", "Đi theo Chúa ngay", "Cho người nghèo nửa tài sản và hoàn lại gấp bốn cho ai bị ông lấy oan", "Xây đền thờ"],
        correct: 2,
        explain: "Giakêu hoán cải hoàn toàn, hứa chia sẻ và đền bù – đây là trái hoán cải thật sự."
      },
      {
        q: "Câu nào mô tả sứ mạng của Chúa Giêsu trong bài này?",
        options: ["Ta đến để xét xử", "Con Người đến để tìm và cứu những gì đã mất", "Ta đến để xây dựng Hội Thánh", "Ta đến để dạy dỗ"],
        correct: 1,
        explain: "'Con Người đến để tìm và cứu những gì đã mất' – đây là câu kết đẹp của bài Tin Mừng."
      }
    ]
  },
  3: {
    scripture: {
      title: "Chúa Giêsu hóa bánh ra nhiều",
      text: "Đức Giêsu nhìn thấy đám đông đông đảo liền chạnh lòng thương. Ngài bảo các môn đệ: 'Họ không cần phải đi đâu cả, chính các con hãy cho họ ăn.' Rồi Ngài cầm lấy năm chiếc bánh và hai con cá, ngước mắt lên trời, dâng lời chúc tụng, bẻ ra và trao cho các môn đệ.",
      ref: "Mt 14, 13-21"
    },
    questions: [
      {
        q: "Trong phép lạ hóa bánh, ban đầu có bao nhiêu chiếc bánh?",
        options: ["Hai bánh ba cá", "Năm bánh hai cá", "Bảy bánh và ít cá", "Mười bánh"],
        correct: 1,
        explain: "Ban đầu chỉ có năm chiếc bánh và hai con cá – một lượng nhỏ bé trước đám đông đói khát."
      },
      {
        q: "Bao nhiêu người đàn ông đã được ăn no?",
        options: ["Một ngàn", "Hai ngàn", "Năm ngàn", "Mười ngàn"],
        correct: 2,
        explain: "Có khoảng năm ngàn người đàn ông, chưa kể đàn bà và trẻ em."
      },
      {
        q: "Sau khi ăn xong, người ta thu được bao nhiêu giỏ bánh vụn?",
        options: ["5 giỏ", "7 giỏ", "10 giỏ", "12 giỏ"],
        correct: 3,
        explain: "Người ta thu được mười hai giỏ đầy những mẩu bánh vụn – dư dả hơn cả ban đầu!"
      },
      {
        q: "Chúa Giêsu đã làm gì trước khi phát bánh cho dân?",
        options: ["Cầu nguyện trong im lặng", "Ngước mắt lên trời dâng lời chúc tụng rồi bẻ bánh", "Hỏi ý kiến các môn đệ", "Nói lời phép lạ"],
        correct: 1,
        explain: "Chúa ngước mắt lên trời, dâng lời tạ ơn, bẻ bánh – cử chỉ này nhắc đến Bí tích Thánh Thể."
      },
      {
        q: "Cảm xúc nào của Chúa Giêsu được nhắc đến trong bài?",
        options: ["Vui mừng", "Buồn bã", "Chạnh lòng thương", "Tức giận"],
        correct: 2,
        explain: "Chúa Giêsu 'chạnh lòng thương' đám đông – trái tim Người đầy lòng trắc ẩn với người đói."
      }
    ]
  },
  4: {
    scripture: {
      title: "Chúa Giêsu rửa chân cho môn đệ",
      text: "Trước lễ Vượt Qua, Đức Giêsu đứng dậy, cởi áo ngoài ra, lấy khăn thắt lưng, đổ nước vào chậu và bắt đầu rửa chân cho các môn đệ. Người nói: 'Thầy là Chúa, là Thầy mà còn rửa chân cho anh em, thì anh em cũng phải rửa chân cho nhau.'",
      ref: "Ga 13, 1-15"
    },
    questions: [
      {
        q: "Chúa Giêsu rửa chân cho các môn đệ vào dịp nào?",
        options: ["Lễ Giáng Sinh", "Trước lễ Vượt Qua", "Sau khi sống lại", "Ngày lễ ngũ tuần"],
        correct: 1,
        explain: "Sự kiện xảy ra trước lễ Vượt Qua, trong bữa Tiệc Ly – đêm trước khi Chúa chịu nạn."
      },
      {
        q: "Môn đệ nào phản đối không muốn Chúa rửa chân?",
        options: ["Gioan", "Giacôbê", "Phêrô", "Tôma"],
        correct: 2,
        explain: "Phêrô thưa: 'Thầy mà rửa chân cho con, không đời nào con chịu đâu!' – vì kính trọng Thầy."
      },
      {
        q: "Bài học Chúa Giêsu muốn dạy qua việc rửa chân là gì?",
        options: ["Giữ gìn vệ sinh", "Phục vụ và yêu thương nhau", "Vâng lời cha mẹ", "Kính trọng người lớn"],
        correct: 1,
        explain: "Chúa nói: 'Anh em cũng phải rửa chân cho nhau' – đây là gương mẫu về phục vụ khiêm nhường."
      },
      {
        q: "Chúa Giêsu cởi gì ra khi bắt đầu rửa chân?",
        options: ["Áo lót", "Dép", "Áo ngoài", "Mão triều thiên"],
        correct: 2,
        explain: "Chúa đứng dậy, cởi áo ngoài ra, lấy khăn thắt lưng – cử chỉ của một người đầy tớ."
      },
      {
        q: "Câu nói nào thể hiện rõ tinh thần phục vụ của bài này?",
        options: ["Ta là ánh sáng thế gian", "Ai muốn làm lớn giữa anh em thì phải làm người phục vụ", "Ta là đường, là sự thật và là sự sống", "Ta là bánh hằng sống"],
        correct: 1,
        explain: "'Ai muốn làm lớn giữa anh em thì phải làm người phục vụ' – đây là tinh thần Tin Mừng."
      }
    ]
  },
  5: {
    scripture: {
      title: "Chúa Giêsu Chịu Đóng Đinh",
      text: "Khi đến nơi gọi là Sọ, chúng đóng đinh Người vào thập giá. Chúa Giêsu nói: 'Lạy Cha, xin tha cho họ, vì họ không biết việc họ làm.' Bên cạnh Ngài, có hai người bị đóng đinh vào thập giá cùng một lúc, một người bên phải, một người bên trái.",
      ref: "Lc 23, 33-43"
    },
    questions: [
      {
        q: "Địa điểm Chúa Giêsu bị đóng đinh gọi là gì?",
        options: ["Bêlem", "Giêrusalem", "Núi Tabor", "Đồi Sọ (Golgotha)"],
        correct: 3,
        explain: "Chúa Giêsu bị đóng đinh tại Đồi Sọ – tiếng Aram là Golgotha."
      },
      {
        q: "Lời cầu nguyện đầu tiên của Chúa Giêsu trên thập giá là gì?",
        options: ["Lạy Cha, con xin phó thác hồn con", "Lạy Cha, xin tha cho họ vì họ không biết việc họ làm", "Trời ơi, sao Cha bỏ con?", "Ta khát!"],
        correct: 1,
        explain: "Dù đang đau đớn, Chúa Giêsu cầu xin Cha tha tội cho những kẻ hành hạ Ngài – tình yêu vô bờ."
      },
      {
        q: "Người trộm lành đã xin Chúa Giêsu điều gì?",
        options: ["Cứu tôi xuống khỏi thập giá", "Khi Ngài vào Nước Ngài, xin nhớ đến tôi", "Cho tôi được đi theo Ngài", "Tha tội cho tôi"],
        correct: 1,
        explain: "Người trộm lành thưa: 'Khi Ngài vào Nước Ngài, xin nhớ đến tôi' – đức tin vào giờ phút cuối."
      },
      {
        q: "Chúa Giêsu trả lời người trộm lành ra sao?",
        options: ["Hãy ăn năn sám hối", "Hôm nay anh sẽ ở với Ta trên thiên đàng", "Đức tin của anh đã cứu anh", "Tôi sẽ cầu nguyện cho anh"],
        correct: 1,
        explain: "'Hôm nay anh sẽ ở với Ta trên thiên đàng' – lời hứa về ơn cứu độ ngay trong giờ chết."
      },
      {
        q: "Bài Tin Mừng hôm nay dạy chúng ta điều gì về Chúa Giêsu?",
        options: ["Chúa rất quyền năng", "Chúa yêu thương và tha thứ ngay cả kẻ thù", "Chúa buồn vì bị phản bội", "Chúa muốn được tôn vinh"],
        correct: 1,
        explain: "Tình yêu của Chúa Giêsu vĩ đại đến mức Ngài cầu nguyện tha thứ cho những người giết hại Ngài."
      }
    ]
  },
  6: {
    scripture: {
      title: "Chúa Giêsu Phục Sinh Hiện Ra",
      text: "Sáng sớm ngày thứ nhất trong tuần, Maria Mácđala đến mộ Chúa và thấy tảng đá đã lăn ra khỏi mộ. Bà chạy đến gặp Simôn Phêrô và người môn đệ Chúa yêu, báo tin: 'Người ta đã đem Chúa đi khỏi mộ và chúng tôi không biết họ đã để Người ở đâu.'",
      ref: "Ga 20, 1-9"
    },
    questions: [
      {
        q: "Ai là người đầu tiên đến mộ Chúa Giêsu?",
        options: ["Phêrô", "Maria Mácđala", "Gioan", "Mẹ Maria"],
        correct: 1,
        explain: "Maria Mácđala đến mộ sáng sớm ngày thứ nhất trong tuần – bà là người đầu tiên biết tin mộ trống."
      },
      {
        q: "Bà đến mộ vào lúc nào?",
        options: ["Buổi chiều tối", "Sáng sớm", "Trưa nắng", "Nửa đêm"],
        correct: 1,
        explain: "Bà đến sáng sớm khi trời còn tối – tình yêu mến Thầy không thể chờ đến sáng hẳn."
      },
      {
        q: "Bà thấy điều gì bất thường ở ngôi mộ?",
        options: ["Có nhiều thiên thần", "Tảng đá đã lăn ra khỏi mộ", "Vải liệm còn nguyên vẹn", "Cửa mộ khép kín"],
        correct: 1,
        explain: "Tảng đá to che cửa mộ đã được lăn sang một bên – dấu hiệu Chúa không còn ở đó nữa."
      },
      {
        q: "Maria Mácđala chạy đi báo tin cho ai?",
        options: ["Các bà đạo đức", "Các nhà lãnh đạo Do Thái", "Simôn Phêrô và người môn đệ Chúa yêu", "Mẹ Maria"],
        correct: 2,
        explain: "Bà chạy ngay đến báo cho Phêrô và Gioan – hai vị lãnh đạo trong nhóm các môn đệ."
      },
      {
        q: "Sự kiện mộ trống là dấu hiệu của điều gì?",
        options: ["Có người ăn trộm xác", "Chúa Giêsu đã Phục Sinh từ cõi chết", "Chúa không thực sự chết", "Đây là một phép lạ bí ẩn"],
        correct: 1,
        explain: "Mộ trống cùng với các lần hiện ra xác nhận: Chúa Giêsu đã Phục Sinh – trái tim của đức tin Kitô giáo!"
      }
    ]
  }
};

const DAYS   = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
const ABBR   = ["CN","T.2","T.3","T.4","T.5","T.6","T.7"];
const LETTERS = ["A","B","C","D"];

/* ---- STATE ---- */
let currentDay = new Date().getDay();
let currentQ   = 0;
let score      = 0;
let numCorrect = 0;
let numWrong   = 0;
let answered   = [];

/* ---- INIT ---- */
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
  buildDayTabs();
  loadDay(currentDay);
}

/* ---- DAY TABS ---- */
function buildDayTabs() {
  const wrap = document.getElementById("day-tabs");
  wrap.innerHTML = "";
  DAYS.forEach((d, i) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (i === currentDay ? " active" : "");
    btn.innerHTML = `<span class="day-abbr">${ABBR[i]}</span><span class="day-num">${i + 1}</span>`;
    btn.setAttribute("title", d);
    btn.addEventListener("click", () => loadDay(i));
    wrap.appendChild(btn);
  });
}

function highlightTab() {
  document.querySelectorAll(".day-tab").forEach((btn, i) => {
    btn.classList.toggle("active", i === currentDay);
  });
}

/* ---- LOAD DAY ---- */
function loadDay(dayIdx) {
  currentDay = dayIdx;
  currentQ = 0; score = 0; numCorrect = 0; numWrong = 0; answered = [];
  highlightTab();
  renderScripture();
  updateHUD();
  renderQuestion();
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
}

/* ---- SCRIPTURE ---- */
function renderScripture() {
  const s = DATA[currentDay].scripture;
  document.getElementById("scripture-title").textContent = s.title;
  document.getElementById("scripture-text").textContent  = s.text;
  document.getElementById("scripture-ref").textContent   = s.ref;
}

/* ---- HUD ---- */
function updateHUD() {
  document.getElementById("hud-score").textContent   = score;
  document.getElementById("hud-correct").textContent = numCorrect;
  document.getElementById("hud-wrong").textContent   = numWrong;
}

/* ---- PROGRESS ---- */
function updateProgress() {
  const total = DATA[currentDay].questions.length;
  const pct   = Math.round((currentQ / total) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent = `Câu ${currentQ + 1} / ${total}`;
  document.getElementById("progress-pct").textContent  = pct + "%";
}

/* ---- RENDER QUESTION ---- */
function renderQuestion() {
  const questions = DATA[currentDay].questions;
  if (currentQ >= questions.length) { showResult(); return; }

  updateProgress();

  const q     = questions[currentQ];
  const total = questions.length;

  let optHTML = "";
  q.options.forEach((opt, i) => {
    optHTML += `
      <button class="option-btn" id="opt-${i}" onclick="selectAnswer(${i})">
        <span class="option-letter">${LETTERS[i]}</span>${opt}
      </button>`;
  });

  document.getElementById("question-container").innerHTML = `
    <div class="question-card">
      <div class="q-badge">Câu <span>${currentQ + 1}</span> / ${total}</div>
      <div class="question-text">${q.q}</div>
      <div class="options">${optHTML}</div>
      <div class="feedback" id="feedback"></div>
      <button class="next-btn" id="next-btn" onclick="nextQuestion()">
        ${currentQ < total - 1 ? "Câu tiếp theo →" : "Xem kết quả 🏆"}
      </button>
    </div>`;
}

/* ---- SELECT ANSWER ---- */
function selectAnswer(idx) {
  const q    = DATA[currentDay].questions[currentQ];
  const btns = document.querySelectorAll(".option-btn");
  btns.forEach(b => (b.disabled = true));

  const fb        = document.getElementById("feedback");
  const isCorrect = idx === q.correct;

  if (isCorrect) {
    btns[idx].classList.add("correct");
    score += 10;
    numCorrect++;
    fb.className = "feedback show fb-correct";
    fb.innerHTML = "✅ " + q.explain;
    answered.push({ q: q.q, userIdx: idx, correctIdx: q.correct, ok: true, opts: q.options });
  } else {
    btns[idx].classList.add("wrong");
    btns[q.correct].classList.add("reveal-correct");
    numWrong++;
    fb.className = "feedback show fb-wrong";
    fb.innerHTML = "❌ Đáp án đúng là: <strong>" + q.options[q.correct] + "</strong>. " + q.explain;
    answered.push({ q: q.q, userIdx: idx, correctIdx: q.correct, ok: false, opts: q.options });
  }

  updateHUD();
  document.getElementById("next-btn").classList.add("show");
}

/* ---- NEXT ---- */
function nextQuestion() {
  currentQ++;
  renderQuestion();
}

/* ---- RESULT ---- */
function showResult() {
  document.getElementById("quiz-area").style.display = "none";
  const rs    = document.getElementById("result-screen");
  rs.style.display = "block";

  const total = DATA[currentDay].questions.length;
  const max   = total * 10;
  const pct   = Math.round((numCorrect / total) * 100);

  document.getElementById("result-score").textContent   = score;
  document.getElementById("result-max").textContent     = " / " + max;
  document.getElementById("stat-correct").textContent   = numCorrect;
  document.getElementById("stat-wrong").textContent     = numWrong;
  document.getElementById("stat-pct").textContent       = pct + "%";

  let trophy, title, message, badge;

  if (pct === 100) {
    trophy  = "🥇";
    title   = "Xuất Sắc! Thiên Tài Tin Mừng!";
    message = "Tuyệt vời! Bạn trả lời đúng tất cả mọi câu hỏi. Lời Chúa đã thấm sâu vào trái tim bạn rồi!";
    badge   = "🥇 Huy Chương Vàng";
    launchConfetti();
  } else if (pct >= 80) {
    trophy  = "🥈";
    title   = "Rất Giỏi! Học Trò Siêng Năng!";
    message = "Bạn nắm vững hầu hết bài Tin Mừng. Cố gắng thêm một chút nữa để đạt điểm tuyệt đối nhé!";
    badge   = "🥈 Huy Chương Bạc";
  } else if (pct >= 60) {
    trophy  = "🥉";
    title   = "Tốt Lắm! Tiếp Tục Cố Gắng!";
    message = "Bạn đã học được nhiều điều hay từ bài Tin Mừng. Hãy đọc lại và thử lại để ghi điểm cao hơn!";
    badge   = "🥉 Huy Chương Đồng";
  } else if (pct >= 40) {
    trophy  = "📖";
    title   = "Cần Cố Gắng Thêm!";
    message = "Đừng nản lòng nhé! Hãy đọc lại bài Tin Mừng thật kỹ rồi thử lại. Chúa luôn yêu thương bạn!";
    badge   = "📖 Huy Hiệu Học Viên";
  } else {
    trophy  = "🌱";
    title   = "Hãy Tiếp Tục Học Hỏi!";
    message = "Đây là bước khởi đầu. Mỗi ngày đọc Tin Mừng một ít, bạn sẽ sớm trở thành chuyên gia đấy!";
    badge   = "🌱 Huy Hiệu Mầm Non";
  }

  document.getElementById("result-trophy").textContent  = trophy;
  document.getElementById("result-title").textContent   = title;
  document.getElementById("result-message").textContent = message;
  document.getElementById("reward-badge").textContent   = badge;

  // Review list
  let reviewHTML = "";
  answered.forEach((a, i) => {
    reviewHTML += `
      <div class="review-item">
        <div class="review-q">Câu ${i + 1}: ${a.q}</div>
        <div class="review-ans ${a.ok ? "ok" : "bad"}">
          ${a.ok ? "✅" : "❌"} Bạn chọn: ${LETTERS[a.userIdx]}. ${a.opts[a.userIdx]}
        </div>
        ${!a.ok ? `<div class="review-correct">💡 Đáp án đúng: ${LETTERS[a.correctIdx]}. ${a.opts[a.correctIdx]}</div>` : ""}
      </div>`;
  });
  document.getElementById("review-list").innerHTML = reviewHTML;

  rs.scrollIntoView({ behavior: "smooth" });
}

/* ---- RESTART ---- */
function restartQuiz() {
  loadDay(currentDay);
}

/* ---- CONFETTI ---- */
function launchConfetti() {
  const wrap   = document.getElementById("confetti");
  const colors = ["#F0C040","#1A3560","#2A5298","#FFFFFF","#4ADE80","#60A5FA","#F87171","#FBBF24"];
  wrap.innerHTML = "";
  wrap.style.display = "block";

  for (let i = 0; i < 90; i++) {
    const p    = document.createElement("div");
    const size = Math.random() * 11 + 5;
    const dur  = (Math.random() * 2.5 + 2).toFixed(2);
    const del  = (Math.random() * 1.8).toFixed(2);
    p.className = "confetti-piece";
    p.style.cssText = `
      left:${Math.random() * 100}%;
      top:${-size}px;
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > 0.45 ? "50%" : "3px"};
      animation-duration:${dur}s;
      animation-delay:${del}s;
    `;
    wrap.appendChild(p);
  }

  setTimeout(() => { wrap.style.display = "none"; wrap.innerHTML = ""; }, 6000);
}
