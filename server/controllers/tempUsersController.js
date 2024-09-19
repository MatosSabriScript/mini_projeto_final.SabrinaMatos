export const getTempUsers = (raceNumber, statusComplemented, createdAt) => {
    if(typeof(statusComplemented)===typeof (true)){
        const newUser = new TempUser(raceNumber, statusComplemented, createdAt);
        tempUsers.push(newUser);
        return newUser;
    }
    else {
        return ;
    }
};

export const returnPeople = () => {
  return tempUsers;
};

export const getTrue = () => {
    let status = tempUsers.filter (item => item.statusComplemented == true);
    return status;
};

export const getFalse = () =>  {
    let status = tempUsers.filter (item => item.statusComplemented === false);
    return status;
}