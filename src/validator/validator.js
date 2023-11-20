const validator = (step, data) => {
    switch (step) {
        case 0: return form1Validator(data);
        case 1: return form2Validator(data);
        case 2: return form3Validator(data);
        case 3: return form4Validator(data);
        case 4: return form5Validator(data);
    }
    return true;
}

function form1Validator (data) {
    // return true;
    if(!data?.name?.trim()) return 'Name is requied';
    if(!/^[a-zA-Z ]+$/.test(data?.name?.trim())) return 'Invalid Name';
    if(!data?.title?.trim()) return 'Title is requird';
    if(!/^[a-zA-Z ]+$/.test(data?.title?.trim())) return 'Invalid Title'
    if(!data?.address?.trim()) return 'Please provide your address';
    if(!data?.about?.trim()) return 'About field is required';
    const aboutLenght = data?.about?.trim().split(' ').length;
    if( aboutLenght<50 ) return 'Minimum 50 words required in about field';
    if( aboutLenght>70 ) return 'About field should not exist 70 words';
    return true;
}

function form2Validator (data) {
    console.log(data)
    if(!data?.email?.trim()) return 'Email is required';
    if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(data.email.trim())) return 'Invalid Email ID';
    if(!data?.phone?.trim()) return 'Mobile number is required';
    if(!/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(data.phone.trim())) return 'Invalid mobile number';
    if(!data?.linkedIn?.trim()) return 'LinkedIn address is required';
    if(!data?.github?.trim()) return 'GitHub address is required';
    return true;
}

function form3Validator (data) {
    return true;
}

function form4Validator (data) {
    return true;
}

function form5Validator (data) {
    return true;
}

export default validator;