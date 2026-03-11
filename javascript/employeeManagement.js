document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.getElementById("employeeAccordion");
  const addForm = document.getElementById("employeeAddForm");
  const saveBtn = document.getElementById("employeeSaveBtn");

  accordion.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      if (confirm("Are you sure you want to remove this entry?")) {
        const employeeItem = event.target.closest(".accordion-item");
        employeeItem.remove();

        alert("Employee was removed!");
      }
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const name = document.getElementById("newName").value;
      const empId = document.getElementById("newIdCode").value;
      const role = document.getElementById("newRole").value;
      const email = document.getElementById("newEmail").value;
      const dept = document.getElementById("newDept").value;
      const type = document.getElementById("newType").value;

      if (!name) {
        alert("Please enter a name.");
        return;
      }

      const collapseId = `employeeCollapse${Date.now()}`;

      const newItem = `
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed d-flex justify-content-between align-items-center w-100"
                      type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                <span class="fs-5">${name}</span>
                <i class="fas fa-chevron-down"></i>
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#employeeAccordion">
              <div class="accordion-body">
                <div class="row align-items-center">
                  <div class="col-md-8">
                    <p> <strong>Employee ID:</strong> ${empId}</p>
                    <p> <strong>Role:</strong> ${role}</p>
                    <p> <strong>Email:</strong> ${email}</p>
                    <p> <strong>Department:</strong> ${dept}</p>
                    <p> <strong>Employment Type:</strong> ${type}</p>
                    <div class="d-flex gap-2 mt-4">
                      <button class="btn btn-outline-danger btn-sm delete-btn rounded-pill select-btn">Delete Entry</button>
                    </div>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="/images/employee.jpg" class="img-fluid rounded shadow-sm employee-photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      document
        .getElementById("employeeAccordion")
        .insertAdjacentHTML("beforeend", newItem);
      addForm.reset();
    });
  }
});
