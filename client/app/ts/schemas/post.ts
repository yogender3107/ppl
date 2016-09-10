export class Post{	
	_id : string;
	title : string;
	description : string;
	postby:  string;
	category : string;
	image : string;
	comments : [{}];
	likes : [{}];
	featured : boolean;
}