function formatDate(nDate) {
    let date = new Date(nDate);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + " • " + dd + " • " + yyyy;
    return date;
}

export default formatDate;