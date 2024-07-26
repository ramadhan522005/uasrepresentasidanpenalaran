const gejala = [
    { kode: "G1", nama: "Nyeri" },
    { kode: "G2", nama: "Pembengkakan" },
    { kode: "G3", nama: "Memar" },
    { kode: "G4", nama: "Mati Rasa" },
    { kode: "G5", nama: "Terasa Saat Berjalan" },
    { kode: "G6", nama: "Tidak Terasa Saat Beristirahat" },
    { kode: "G7", nama: "Terasa Hangat Pada Daerah Cedera" },
    { kode: "G8", nama: "Sulit Bergerak Pada Daerah Cedera" },
    { kode: "G9", nama: "Sulit Berdiri atau Berjalan" },
    { kode: "G10", nama: "Sulit Menggerakkan Lengan" },
    { kode: "G11", nama: "Sulit Menggerakkan Pergelangan Kaki" },
    { kode: "G12", nama: "Sensasi Robek Pada Belakang Paha" },
    { kode: "G13", nama: "Perubahan Posisi Bahu" },
    { kode: "G14", nama: "Pergelangan Kaki Tidak Stabil" },
    { kode: "G15", nama: "Lutut Tidak Stabil" },
    { kode: "G16", nama: "Lutut Sulit Digerakkan" }
  ];
  
  const rule = [
    { kode: "C1", gejala: ["G1", "G2", "G3"] },
    { kode: "C2", gejala: ["G4", "G5", "G6"] },
    { kode: "C3", gejala: ["G7", "G8", "G9"] },
    { kode: "C4", gejala: ["G10", "G11", "G12"] },
    { kode: "C5", gejala: ["G13", "G14", "G15"] },
    { kode: "C6", gejala: ["G16"] }
  ];
  
  const cedera = [
    { kode: "C1", nama: "ACL (Anterior Cruciate Ligaments)" },
    { kode: "C2", nama: "Hamstring" },
    { kode: "C3", nama: "Angkle / Sprain" },
    { kode: "C4", nama: "Dislokasi Bahu" },
    { kode: "C5", nama: "Patah Tulang" },
    { kode: "C6", nama: "Fraktur Stres" }
  ];
  

  const gejalaList = document.getElementById("gejala-list");
  gejala.forEach((gejala) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "gejala[]";
    checkbox.value = gejala.kode;
    const label = document.createElement("label");
    label.textContent = gejala.nama;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    gejalaList.appendChild(listItem);
  });
  

  const btnDiagnosa = document.getElementById("btn-diagnosa");
  btnDiagnosa.addEventListener("click", diagnose);
  
  function diagnose() {
    const gejalaList = document.getElementById("gejala-list");
    const gejalaChecked = [];
    for (let i = 0; i < gejalaList.children.length; i++) {
      const gejala = gejalaList.children[i];
      if (gejala.children[0].checked) {
        gejalaChecked.push(gejala.children[0].value);
      }
    }
  
    let hasilDiagnosa;
    if (gejalaChecked.length === 0) {
      hasilDiagnosa = "Silakan pilih gejala yang dialami";
    } else {
      const kemungkinanCedera = [
        { name: "ACL", probability: 0 },
        { name: "Hamstring", probability: 0 },
        { name: "Ankle Sprain", probability: 0 },
        { name: "Dislokasi Bahu", probability: 0 },
        { name: "Patah Tulang", probability: 0 },
        { name: "Fraktur Stres", probability: 0 },
      ];
  
      for (let i = 0; i < gejalaChecked.length; i++) {
        const gejala = gejalaChecked[i];
        switch (gejala) {
          case "G1":
            kemungkinanCedera[0].probability += 10; // ACL
            kemungkinanCedera[1].probability += 5; // Hamstring
            break;
          case "G2":
            kemungkinanCedera[1].probability += 10; // Hamstring
            kemungkinanCedera[2].probability += 5; // Ankle Sprain
            break;
          case "G3":
            kemungkinanCedera[2].probability += 10; // Ankle Sprain
            kemungkinanCedera[3].probability += 5; // Dislokasi Bahu
            break;
          case "G4":
            kemungkinanCedera[3].probability += 10; // Dislokasi Bahu
            kemungkinanCedera[4].probability += 5; // Patah Tulang
            break;
          case "G5":
            kemungkinanCedera[4].probability += 10; // Patah Tulang
            kemungkinanCedera[5].probability += 5; // Fraktur Stres
            break;
          case "G6":
            kemungkinanCedera[5].probability += 10; // Fraktur Stres
            kemungkinanCedera[0].probability += 5; // ACL
            break;
          case "G7":
            kemungkinanCedera[0].probability += 10; // ACL
            kemungkinanCedera[1].probability += 5; // Hamstring
            break;
          case "G8":
            kemungkinanCedera[1].probability += 10; // Hamstring
            kemungkinanCedera[2].probability += 5; // Ankle Sprain
            break;
          case "G9":
            kemungkinanCedera[2].probability += 10; // Ankle Sprain
            kemungkinanCedera[3].probability += 5; // Dislokasi Bahu
            break;
          case "G10":
            kemungkinanCedera[3].probability += 10; // Dislokasi Bahu
            kemungkinanCedera[4].probability += 5; // Patah Tulang
            break;
          case "G11":
            kemungkinanCedera[4].probability += 10; // Patah Tulang
            kemungkinanCedera[5].probability += 5; // Fraktur Stres
            break;
          case "G12":
            kemungkinanCedera[5].probability += 10; // Fraktur Stres
            kemungkinanCedera[0].probability += 5; // ACL
            break;
          case "G13":
            kemungkinanCedera[0].probability += 10; // ACL
            kemungkinanCedera[1].probability += 5; // Hamstring
            break;
          case "G14":
            kemungkinanCedera[1].probability += 10; // Hamstring
            kemungkinanCedera[2].probability += 5; // Ankle Sprain
            break;
            case "G15":
                kemungkinanCedera[2].probability += 10; // Ankle Sprain
                kemungkinanCedera[3].probability += 5; // Dislokasi Bahu
                break;
              case "G16":
                kemungkinanCedera[3].probability += 10; // Dislokasi Bahu
                kemungkinanCedera[4].probability += 5; // Patah Tulang
                break;
            }
          }
      
          const totalProbability = kemungkinanCedera.reduce((acc, curr) => acc + curr.probability, 0);
          if (totalProbability === 0) {
            hasilDiagnosa = "Tidak ada kemungkinan cedera";
          } else {
            kemungkinanCedera.forEach((cedera) => {
              cedera.probability = (cedera.probability / totalProbability) * 100;
            });
      
            const sortedKemungkinanCedera = kemungkinanCedera.sort((a, b) => b.probability - a.probability);
      
            if (sortedKemungkinanCedera.length === 1) {
              hasilDiagnosa = `Kemungkinan cedera: ${sortedKemungkinanCedera[0].name} (${sortedKemungkinanCedera[0].probability.toFixed(2)}%)`;
            } else if (sortedKemungkinanCedera.length === 2) {
              hasilDiagnosa = `Kemungkinan cedera: ${sortedKemungkinanCedera[0].name} (${sortedKemungkinanCedera[0].probability.toFixed(2)}%), atau ${sortedKemungkinanCedera[1].name} (${sortedKemungkinanCedera[1].probability.toFixed(2)}%)`;
            } else {
              hasilDiagnosa = `Kemungkinan cedera: ${sortedKemungkinanCedera[0].name} (${sortedKemungkinanCedera[0].probability.toFixed(2)}%), ${sortedKemungkinanCedera[1].name} (${sortedKemungkinanCedera[1].probability.toFixed(2)}%), atau ${sortedKemungkinanCedera[2].name} (${sortedKemungkinanCedera[2].probability.toFixed(2)}%)`;
            }
          }
        }
      
        const hasilDiagnosaText = document.getElementById("hasil-diagnosa-text");
        hasilDiagnosaText.textContent = `Hasil Diagnosa: ${hasilDiagnosa}`;
        const hasilDiagnosaSection = document.getElementById("hasil-diagnosa-section");
        hasilDiagnosaSection.style.display = "block";
      }


  const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  diagnose();
});