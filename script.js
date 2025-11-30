document.addEventListener("DOMContentLoaded", function () {

  const PILLARS = [
    'Physical Health',
    'Mental & Emotional Wellness',
    'Relationships & Social Health',
    'Career & Intellectual Growth',
    'Financial Stability',
    'Lifestyle & Environment',
    'Values & Purpose',
    'Contribution & Community'
  ];

  const QUESTIONS = PILLARS.map((p, pi) => {
    const arr = [];
    for (let i = 1; i <= 15; i++) arr.push(`${p} — Question ${i}`);
    return arr;
  });

  const form = document.getElementById("form-area");

  // Render questions
  QUESTIONS.forEach((qset, pi) => {
    const block = document.createElement("div");
    block.className = "card";

    block.innerHTML = `<h3>${PILLARS[pi]}</h3>`;

    qset.forEach((q, qi) => {
      const row = document.createElement("div");
      row.style.marginBottom = "12px";

      row.innerHTML = `
        <label>${qi + 1}. ${q}</label><br>
        <input type="range" min="0" max="5" value="3" step="1" id="r-${pi}-${qi}">
        <span id="v-${pi}-${qi}">3</span>/5
      `;
      block.appendChild(row);

      setTimeout(() => {
        document.getElementById(`r-${pi}-${qi}`).addEventListener("input", (e) => {
          document.getElementById(`v-${pi}-${qi}`).textContent = e.target.value;
        });
      }, 10);
    });

    form.appendChild(block);
  });

  // Calculate results
  const calcBtn = document.getElementById("calc");
  const output = document.getElementById("output");
  const focusDiv = document.getElementById("focus");
  let radarChart = null;

  calcBtn.addEventListener("click", () => {
    const scores = [];

    for (let pi = 0; pi < PILLARS.length; pi++) {
      let sum = 0;

      for (let qi = 0; qi < 15; qi++) {
        sum += Number(document.getElementById(`r-${pi}-${qi}`).value);
      }

      scores.push((sum / 15).toFixed(1));
    }

    output.classList.remove("hidden");

    const ctx = document.getElementById("radar").getContext("2d");
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: PILLARS,
        datasets: [{
          label: "Your Scores",
          data: scores,
          fill: true,
          backgroundColor: "rgba(79, 70, 229, 0.15)",
          borderColor: "rgba(79, 70, 229, 0.9)",
          pointBackgroundColor: "rgba(79, 70, 229, 0.9)"
        }]
      },
      options: {
        scales: {
          r: { min: 0, max: 5, ticks: { stepSize: 1 } }
        },
        plugins: { legend: { display: false } }
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
