jobs.map((job, idx) => {

    const dateCon = document.getElementById("date" + idx);

    const companyCon = document.getElementById("company" + idx);

    const headingCon = document.getElementById("heading" + idx);

    const tagsCon = document.getElementById("tags" + idx);

    const salaryCon = document.getElementById("salary" + idx);

    const locationCon = document.getElementById("location" + idx);


    dateCon.innerText = job.date;

    companyCon.innerText = job.company;

    headingCon.innerText = job.title;

    salaryCon.innerText = job.salary;

    locationCon.innerText = job.location;


    // Tags

    job.tags.map((tag, i) => {

        const tagCon = document.createElement("span");

        tagCon.innerText = tag;

        tagCon.classList.add("tag");

        tagsCon.appendChild(tagCon);

    });

});