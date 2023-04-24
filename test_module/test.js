let fullName = (fname,lname) => {
    return `${fname} ${lname}`;
}

let actualName = fullName("HARSH", "JOLAPARA");

let expected_output = "HARSH JOLAPARA";

if(actualName !== expected_output) {
    throw Error(
        `your code not working as ${actualName} and ${expected_output}`
    )
}