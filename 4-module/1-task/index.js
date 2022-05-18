function makeFriendsList(friends) {
  let list = document.createElement('ul');

  for (let elem of friends) {
    let name = document.createElement('li');
    list.append(name);
    name.innerHTML = `${elem.firstName} ${elem.lastName}`;
  }

  return list;
};