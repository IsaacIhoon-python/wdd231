const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'CSE', number: 340, title: 'Web Backend Development', credits: 3, completed: false },
    { subject: 'CSE', number: 341, title: 'Web Services', credits: 3, completed: false },
    { subject: 'CSE', number: 212, title: 'Programming with Data Structures', credits: 2, completed: false },
    { subject: 'CSE', number: 270, title: 'Software Testing', credits: 3, completed: false },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Development I', credits: 2, completed: false },
    { subject: 'WDD', number: 330, title: 'Web Frontend Development II', credits: 2, completed: false },
    { subject: 'WDD', number: 430, title: 'Web Full Stack Development', credits: 3, completed: false }
];

const courseContainer = document.querySelector('#course-cards');
const totalCredits = document.querySelector('#total-credits');
const allBtn = document.querySelector('#all');
const wddBtn = document.querySelector('#wdd');
const cseBtn = document.querySelector('#cse');

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(course.completed? 'completed' : 'incomplete');
        card.innerHTML = `${course.subject} ${course.number}`;
        courseContainer.appendChild(card);
    });

    const credits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;
}

allBtn.addEventListener('click', () => {
    displayCourses(courses);
});

wddBtn.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

cseBtn.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

displayCourses(courses);