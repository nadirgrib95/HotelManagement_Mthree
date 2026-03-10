const ROOM_OPTIONS = [
  "101",
  "102",
  "103",
  "104",
  "105",
  "112",
  "118",
  "119",
  "127",
  "203",
  "204",
  "214",
  "220",
  "305",
  "310",
  "333",
  "402",
  "409",
  "417",
  "501",
];

const PAYMENT_STATUS_OPTIONS = ["PAID", "PARTIAL", "UNPAID"];

function populateRoomSelects() {
  const roomSelects = document.querySelectorAll(".room-select");

  roomSelects.forEach((select) => {
    const currentRoom = select.getAttribute("data-current-room") || "";
    select.innerHTML = "";

    ROOM_OPTIONS.forEach((roomNumber) => {
      const option = document.createElement("option");
      option.value = roomNumber;
      option.textContent = roomNumber;
      select.appendChild(option);
    });

    if (ROOM_OPTIONS.includes(currentRoom)) {
      select.value = currentRoom;
    }
  });
}

function populatePaymentStatusSelects() {
  const paymentStatusSelects = document.querySelectorAll(
    ".payment-status-select",
  );

  paymentStatusSelects.forEach((select) => {
    const currentPaymentStatus =
      select.getAttribute("data-current-payment-status") || "";
    select.innerHTML = "";

    PAYMENT_STATUS_OPTIONS.forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status;
      select.appendChild(option);
    });

    if (PAYMENT_STATUS_OPTIONS.includes(currentPaymentStatus)) {
      select.value = currentPaymentStatus;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateRoomSelects();
  populatePaymentStatusSelects();
});
