
// this function will call when all documents is ready

let main = function () {

// filling date of birth with required data 
    let i, birth_day, birth_month, birth_year, tag;
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // getting which should modify
    birth_day = document.getElementsByName("b_day")[0];
    birth_month = document.getElementsByName("b_month")[0];
    birth_year = document.getElementsByName("b_year")[0];

    let date = new Date(); // creating date objects


    // applying for date
    for (i = 1; i <= 31; i++) {
        tag += `<option value="${i}">${i}</option>`;
        birth_day.innerHTML = tag;

    } // end of for (day)
    //selecting current date
    birth_day.options[date.getDate() - 1].selected = true;
    // applying for months
    tag = ''; // clearing previous data
    months.forEach(month => {
        tag += `<option value="${month}">${month}</option>`;
        birth_month.innerHTML = tag;
    });
    // end for (month)
    //selecting current month
    birth_month.options[date.getMonth()].selected = true; // options[index]
    // applying years from 1930 to current year
    tag = ''; // clearing previous data

    for (i = 1930; i <= date.getFullYear(); i++) {
        tag += `<option value="${i}">${i}</option>`;
        birth_year.innerHTML = tag;
    }
    // end of for (year)
    //selecting current year
    length = birth_year.options.length; // fetchin the length of options
    birth_year.options[length-1].selected = true; // then select the last child
// end of related issue to filling date birth data

};

$(document).ready(main);
// end of main
