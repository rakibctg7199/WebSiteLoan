// script.js

function calculateTotal() {
  const amount = parseFloat(document.getElementById("amount").value);
  const duration = parseInt(document.getElementById("duration").value);

  if (!isNaN(amount) && !isNaN(duration)) {
    const interestRate = 0.02;
    const total = amount + (amount * interestRate * duration);
    document.getElementById("total").textContent = `৳${total.toFixed(2)}`;
  } else {
    document.getElementById("total").textContent = "৳0";
  }
}

document.getElementById("amount").addEventListener("input", calculateTotal);
document.getElementById("duration").addEventListener("change", calculateTotal);

function submitLoan() {
  const amount = document.getElementById("amount").value;
  const reason = document.getElementById("reason").value;
  const duration = document.getElementById("duration").value;

  if (amount && reason && duration) {
    alert("লোন আবেদন সফল! ");
  } else {
    alert("অনুগ্রহ করে সব ফিল্ড পূরণ করুন");
  }
}
