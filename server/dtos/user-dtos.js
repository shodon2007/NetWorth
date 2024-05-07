module.exports = class UserDto {
    email;
    name;
    surname;
    id;
    isActivated;

    constructor(user) {
        this.email = user.email;
        this.name = user.name;
        this.surname = user.surname;
        this.id = user.id;
        this.isActivated = user.isActivated;
    }
}