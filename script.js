document.addEventListener("DOMContentLoaded", function () {

  const PILLARS = [
    "Physical Health",
    "Mental & Emotional Wellbeing",
    "Relationships & Social",
    "Career & Purpose",
    "Financial Wellness",
    "Personal Growth & Learning",
    "Recreation & Creativity",
    "Environment & Living Situation"
  ];

  const QUESTIONS = {
    "Physical Health": [
      "I wake up feeling physically refreshed and ready to start the day without needing stimulants.",
      "I complete at least 20–30 minutes of deliberate physical activity (walking, exercise, sports) in a typical day.",
      "When I notice early signs of illness, I adjust my routine or rest within the same day.",
      "I can comfortably walk 3–4 km without feeling unusually tired or strained.",
      "My meals throughout the day keep my energy levels consistent without major dips.",
      "I am able to manage stress without developing physical symptoms like headaches, acidity, or body tension.",
      "I drink enough water throughout the day without needing reminders.",
      "I get preventive health check-ups (BP, blood tests, dental, eye checks) at least once a year.",
      "I incorporate movement or stretching even on busy days or while traveling.",
      "My sleep schedule stays consistent with less than one hour variation.",
      "When I feel unusually tired, I can identify the cause (sleep, food, stress, dehydration).",
      "I can lift and carry everyday items (groceries, 5–10 kg) without discomfort.",
      "I avoid skipping meals even during hectic periods.",
      "I follow a reliable recovery routine when I get sick.",
      "Lifestyle-related problems like fatigue or acidity affect me only rarely."
    ],

    "Mental & Emotional Wellbeing": [
      "I can calm myself within 10–15 minutes when overwhelmed.",
      "I can correctly identify my emotions during difficult moments.",
      "I handle constructive criticism without spiraling into negative thoughts.",
      "I recover emotionally from setbacks within a few days.",
      "I avoid worst-case overthinking that affects my actions.",
      "I express feelings openly to at least one trusted person.",
      "I can complete essential tasks even on low-energy days.",
      "I maintain hobbies that improve my emotional state.",
      "I notice early signs of burnout and take action quickly.",
      "I can separate thoughts from facts during stress.",
      "I rarely suppress emotions and understand my triggers.",
      "I practise self-care at least twice a week.",
      "I forgive myself quickly after mistakes.",
      "I ask for and accept support when needed.",
      "I maintain a generally positive outlook even in uncertainty."
    ],

    "Relationships & Social": [
      "I have at least one person I can call anytime for support.",
      "I communicate my needs clearly without aggression or withdrawal.",
      "I address conflicts within a reasonable time.",
      "I check in on important people regularly.",
      "I set boundaries calmly when needed.",
      "I say 'no' without guilt when necessary.",
      "I initiate conversations or plans instead of waiting.",
      "My close relationships feel balanced and reciprocal.",
      "I celebrate others’ achievements without comparison.",
      "I avoid gossip as a primary mode of bonding.",
      "I form new connections when entering new environments.",
      "I resolve misunderstandings instead of distancing myself.",
      "I spend quality time with people who matter.",
      "I share vulnerabilities with trusted people.",
      "My relationships energize me more than they drain me."
    ],

    "Career & Purpose": [
      "I can clearly articulate why my work or role is meaningful.",
      "I feel confident about my next career step.",
      "I spend at least two hours weekly on skill development.",
      "I can focus deeply without frequent task-switching.",
      "I actively seek feedback to improve.",
      "I feel valued for my contributions.",
      "I have mentors or peers guiding my growth.",
      "I take career-advancing risks like presenting or applying.",
      "My work aligns with my strengths.",
      "I track progress toward my goals.",
      "I balance urgent tasks with long-term work.",
      "I don’t carry chronic stress home.",
      "I have a backup plan for career disruptions.",
      "I’m proud of my achievements from the past year.",
      "I pursue purpose-driven activities outside work."
    ],

    "Financial Wellness": [
      "I review and adjust my spending monthly.",
      "I maintain an emergency fund covering at least three months.",
      "I save or invest a fixed proportion of income regularly.",
      "I know exactly where most of my money goes.",
      "I avoid impulse purchases except rarely.",
      "I am free of high-interest debt or have a payoff plan.",
      "I compare options before major purchases.",
      "I understand basic tax planning or consult someone who does.",
      "I maintain necessary insurance (health, life, etc.).",
      "I regularly review and cancel unused subscriptions.",
      "I have clear long-term financial goals.",
      "I maintain a realistic monthly budget.",
      "I track my financial health at least yearly.",
      "I discuss financial decisions openly with affected partners.",
      "I adjust spending as life goals change."
    ],

    "Personal Growth & Learning": [
      "I dedicate fixed weekly time for learning.",
      "I am working on a long-term skill or learning project.",
      "I explore new subjects or hobbies monthly.",
      "I set measurable learning goals.",
      "I reflect on new learnings and adjust.",
      "I track my progress with notes or journals.",
      "I apply new knowledge to real situations.",
      "I step outside my comfort zone regularly.",
      "I ask curious questions daily.",
      "I balance depth and breadth in learning.",
      "I seek feedback to grow.",
      "I identify an area of improvement monthly.",
      "I invest time or money in learning.",
      "I stay consistent even with low motivation.",
      "I celebrate small growth milestones."
    ],

    "Recreation & Creativity": [
      "I have hobbies that leave me refreshed.",
      "I schedule downtime that truly relaxes me.",
      "I try new creative or recreational activities regularly.",
      "I include small adventures in my month.",
      "I can immerse in activities without checking my phone.",
      "I rotate hobbies to stay inspired.",
      "I keep a list of creative ideas.",
      "I protect leisure time even during busy weeks.",
      "I use creative outlets to process emotions.",
      "I enjoy solo recreation comfortably.",
      "I balance digital and physical recreation.",
      "I allow spontaneous fun weekly or monthly.",
      "I take small creative challenges.",
      "I maintain at least one long-term creative project.",
      "I revisit old hobbies from time to time."
    ],

    "Environment & Living Situation": [
      "My living space supports productivity and relaxation.",
      "I declutter or organize regularly.",
      "I maintain a reliable system for bills and expenses.",
      "I feel safe and comfortable where I live.",
      "I have tools or reliable help for home issues.",
      "My home reflects my personality and priorities.",
      "I can host someone comfortably when needed.",
      "I keep important documents organized and accessible.",
      "I prepare for seasonal home needs.",
      "I address noise or lighting issues affecting focus.",
      "I maintain consistent cleaning routines.",
      "I adjust my home setup during major life changes.",
      "I invest in improvements that enhance living quality.",
      "I have a quiet or restorative corner at home.",
      "I periodically review my living choices against goals."
    ]
  };

  // Build the form
  const form = document.getElementById("form-area");

  PILLARS.forEach(pillar => {
    const block = document.createElement("div");
    block.className = "card";
    block.innerHTML = `<h3>${pillar}</h3>`;

    QUESTIONS[pillar].forEach((q, index) => {
      const row = document.createElement("div");
      row.style.marginBottom = "12px";

      const id = `${pillar}-${index}`.replace(/\s+/g, "-");

      row.innerHTML = `
        <label>${index + 1}. ${q}</label><br>
        <input type="range" min="0" max="5" value="3" step="1" id="${id}">
        <span id="${id}-value">3</span>/5
      `;

      block.appendChild(row);

      setTimeout(() => {
        document.getElementById(id).addEventListener("input", (e) => {
          document.getElementById(`${id}-value`).textContent = e.target.value;
        });
      }, 10);
    });

    form.appendChild(block);
  });

  // Calculate results
  const calcBtn = document.getElementById("calc");
  const output = document.getElementById("output");
  const focusDiv = document.getElementById("focus");
  let radarChart;

  calcBtn.addEventListener("click", () => {
    const scores = [];

    PILLARS.forEach(pillar => {
      const qList = QUESTIONS[pillar];
      let sum = 0;

      qList.forEach((_, i) => {
        const id = `${pillar}-${i}`.replace(/\s+/g, "-");
        sum += Number(document.getElementById(id).value);
      });

      scores.push((sum / qList.length).toFixed(1));
    });

    output.classList.remove("hidden");

    // ⭐ Add baseline for star chart
    const BASELINE = 30;
    const radarValues = scores.map(s => Number(s) + BASELINE);

    const ctx = document.getElementById("radar").getContext("2d");
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: PILLARS,
        datasets: [{
          label: "Your Scores",
          data: radarValues,
          fill: true,
          backgroundColor: "rgba(79, 70, 229, 0.15)",
          borderColor: "rgba(79, 70, 229, 0.9)",
          pointBackgroundColor: "rgba(79, 70, 229, 0.9)",
          tension: 0
        }]
      },
      options: {
        scales: {
          r: {
            min: BASELINE,
            max: BASELINE + 5,
            ticks: { display: false },
            grid: { color: "rgba(150,150,150,0.3)" },
            angleLines: { color: "rgba(100,100,100,0.4)" }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    const indexed = PILLARS.map((p, i) => ({ p, score: scores[i] }));
    indexed.sort((a, b) => a.score - b.score);
    const low = indexed.slice(0, 3);

    focusDiv.innerHTML =
      `<h3>Your Top 3 Focus Areas</h3>` +
      low.map(item => `<p><strong>${item.p}</strong>: ${item.score}/5</p>`).join("");
  });

});
