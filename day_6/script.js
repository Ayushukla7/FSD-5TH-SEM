let students = [];

let editIndex = -1;



function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let marks = Number(document.getElementById("marks").value);

    if (name === "" || roll === "" || course === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks should be between 0 and 100");
        return;
    }


    let student = {
        name: name,
        roll: roll,
        course: course,
        marks: marks
    };


    // Edit mode ka use isliye kiya jata hai ki student ke details ko edit kar sake
    if (editIndex !== -1) {

        students[editIndex] = student;

        editIndex = -1;

        document.getElementById("addBtn").innerText = "Add Student";

    }

    // Add mode ka use isliye kiya jata hai ki student ke details ko add kar sake
    else {

        students.push(student);

    }


    clearForm();

    displayStudents();
}


// Grade function se student ke marks ke hisab se grade nikalte hai
function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B+";
    }
    else if (marks >= 60) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else if (marks >= 40) {
        return "D";
    }
    else {
        return "F";
    }
}


// student ka data ko table me display karne ke liye function displayStudents
function displayStudents() {

    let table = document.getElementById("studentTable");

    let search = document.getElementById("search").value.toLowerCase();

    table.innerHTML = "";


    students.forEach(function(student, index) {

        if (
            student.name.toLowerCase().includes(search) ||
            student.roll.toString().includes(search)
        ) {

            let row = `
                <tr>

                    <td>${student.roll}</td>

                    <td>${student.name}</td>

                    <td>${student.course}</td>

                    <td>${student.marks}</td>

                    <td>${getGrade(student.marks)}</td>

                    <td>

                        <button class="edit"
                            onclick="editStudent(${index})">
                            Edit
                        </button>

                        <button class="delete"
                            onclick="deleteStudent(${index})">
                            Delete
                        </button>

                    </td>

                </tr>
            `;

            table.innerHTML += row;
        }

    });


    updateStats();
}


// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


// student ki details ko form me fill karne ke liye function edit
function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("course").value = student.course;
    document.getElementById("marks").value = student.marks;

    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Student";
}


// clear form krke delete krne ke liye function clearForm
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}


// Update Statistics ka use isliye kiya jata hai ki total students aur average marks ko update kar sake
function updateStats() {

    document.getElementById("totalStudents").innerText =
        students.length;


    if (students.length === 0) {

        document.getElementById("averageMarks").innerText = "0";

        return;
    }


    let total = 0;

    students.forEach(function(student) {

        total = total + student.marks;

    });


    let average = total / students.length;

    document.getElementById("averageMarks").innerText =
        average.toFixed(2);
}