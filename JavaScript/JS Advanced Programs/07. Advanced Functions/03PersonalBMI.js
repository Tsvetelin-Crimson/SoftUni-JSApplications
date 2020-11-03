function solve(name, age, weight, height){
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        }
        
    }
    person.BMI = Math.round(person.personalInfo.weight / (person.personalInfo.height / 100 * person.personalInfo.height / 100));
    person.status = person.BMI < 18.5 ? 'underweight' : person.BMI < 25 ? 'normal' : person.BMI < 30 ? 'overweight' : 'obese';
    if (person.status == 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

//solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);