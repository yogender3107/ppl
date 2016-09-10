export class User{
    _id:string;
	local            : {
                            'name': string,
                            'password': string,
                            'email': string,
                            'image': [string],
                            'isadmin': string,
                            'isverified': Boolean,
                            'verification_code': number
                        };
    facebook         : {
        id           : string,
        token        : string,
        email        : string,
        name         : string
    };
    twitter          : {
        id           : string,
        token        : string,
        displayName  : string,
        username     : string
    };
    google           : {
        id           : string,
        token        : string,
        email        : string,
        name         : string
    };
}