document.addEventListener('DOMContentLoaded', () => {
    const skillButtons = document.querySelectorAll('.skill-btn');
    const contentSections = {
        'vision': document.getElementById('vision-content'),
        'rtl': document.getElementById('rtl-content'),
        'others': document.getElementById('others-content')
    };

    skillButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all content sections
            Object.values(contentSections).forEach(section => {
                section.classList.remove('show');
                section.classList.add('hidden');
            });

            // Show the selected content
            const skill = button.dataset.skill;
            contentSections[skill].classList.remove('hidden');
            contentSections[skill].classList.add('show');

            // Update button states
            skillButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600');
                btn.classList.add('bg-primary');
            });
            button.classList.remove('bg-primary');
            button.classList.add('bg-blue-600');

            // Scroll to section
            contentSections[skill].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show first section by default
    document.querySelector('.skill-btn').click();
});