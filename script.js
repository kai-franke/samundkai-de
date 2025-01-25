function updateCounter() {
  const startDate = new Date("2021-07-09");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // "Borrowing" bei negativen Tagen
  if (days < 0) {
    months--;
    // Letzter Tag des Vormonats
    const daysInPrevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days = daysInPrevMonth + days;
  }

  // "Borrowing" bei negativen Monaten
  if (months < 0) {
    years--;
    months += 12;
  }

  const words = [
    years === 1 ? "Jahr" : "Jahre",
    months === 1 ? "Monat" : "Monate",
    days === 1 ? "Tag" : "Tage",
  ];

  document.getElementById(
    "counter"
  ).textContent = `${years} ${words[0]}, ${months} ${words[1]}, ${days} ${words[2]}`;
}

document.addEventListener("DOMContentLoaded", updateCounter);
