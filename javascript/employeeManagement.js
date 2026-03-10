document.addEventListener('DOMContentLoaded', () => {

    const accordion = document.getElementById('employeeAccordion');

    accordion.addEventListener('click', (event) => {

        if (event.target.classList.contains('delete-btn')) {

            if (confirm('Are you sure you want to remove this entry?')) {

                const employeeItem = event.target.closest('.accordion-item');
                employeeItem.remove();

                alert("Employee was removed!");
            }
        }
    });
});